import { useEffect, useContext, useRef } from "react";
import { CartContext } from "./Componentes/CartContext";

export function useScroll() {
  const {
    advertisementsRef,
    categoriesRef,
    promotionsRef,
    limitAdvertisements,
    limitCategories,
    limitProductList,
    translateX1,
    translateX2,
    translateX3,
    setTranslateX1,
    setTranslateX2,
    setTranslateX3,
  } = useContext(CartContext);

  // Refs agrupados
  const refs = [
    advertisementsRef,
    categoriesRef,
    promotionsRef
  ];

  // Estado interno de arraste
  const variables = useRef([
    { arraste: translateX1, toc_ini: 0, toc_ini2: 0, time_touch: 0, velocidade: 0, animacao: null, arrastando: false },
    { arraste: 0, toc_ini: 0, toc_ini2: 0, time_touch: 0, velocidade: 0, animacao: null, arrastando: false },
    { arraste: 0, toc_ini: 0, toc_ini2: 0, time_touch: 0, velocidade: 0, animacao: null, arrastando: false }
  ]).current;

  const translates = [translateX1, translateX2, translateX3];
  const setTranslates = [setTranslateX1, setTranslateX2, setTranslateX3];

  // Variáveis de scroll de página
  const page = { 
    initialX: null, 
    initialY: null, 
    firstAngle: null, 
    firstDiffX: null, 
    firstDiffY: null, 
    dragY: null, 
    startTime: null,
    deltaY:0,
    speed:0
  };

  const minSpeed = 0.7;
  const maxSpeed = 2.0;
  const limiar = 4;

  useEffect(() => {
    refs.forEach((refWrapper, i) => {
      const el = refWrapper?.current;
      if (!el) return;
      el.addEventListener('touchstart',  e => iniciarArraste(e, i), { passive: false });
      el.addEventListener('mousedown',   e => iniciarArraste(e, i), { passive: false });
      el.addEventListener('touchmove',   e => aoMover(e, i),      { passive: false });
      el.addEventListener('mousemove',   e => aoMover(e, i),      { passive: false });
      el.addEventListener('touchend',    e => finalizarArraste(e, i));
      el.addEventListener('mouseup',     e => finalizarArraste(e, i));
    });

    return () => {
      refs.forEach((refWrapper, i) => {
        const el = refWrapper?.current;
        if (!el) return;
        el.removeEventListener('touchstart',  e => iniciarArraste(e, i));
        el.removeEventListener('mousedown',   e => iniciarArraste(e, i));
        el.removeEventListener('touchmove',   e => aoMover(e, i));
        el.removeEventListener('mousemove',   e => aoMover(e, i));
        el.removeEventListener('touchend',    e => finalizarArraste(e, i));
        el.removeEventListener('mouseup',     e => finalizarArraste(e, i));
      });
    };
  }, [advertisementsRef, categoriesRef, promotionsRef]);

  const iniciarArraste = (e, i) => {
    e.preventDefault();
    if (e.type === "mousedown" && e.button !== 0) return;
    //
    page.initialX = e.touches ? e.touches[0].clientX : e.clientX;
    page.initialY = e.touches ? e.touches[0].clientY : e.clientY;
    page.deltaY = 0;
    page.speed=0;
    page.startTime = Date.now();
    //
    const v = variables[i];
    const posX = page.initialX;
    v.arrastando = true;
    v.toc_ini = posX - translates[i];
    v.time_touch = Date.now();
  
    if (v.animacao) {
      cancelAnimationFrame(v.animacao);
      v.animacao = null;
    }
  };
  

  function aoMover(e, i) {
    e.preventDefault();
    const v = variables[i];
    if (!v.arrastando) return;

    const now = Date.now();
    const dt = Math.max(1, now - v.time_touch);
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    const dx = Math.abs(x - page.initialX);
    const dy = Math.abs(y - page.initialY);
    if (dx <= limiar && dy <= limiar) return;

    if (page.firstDiffX === null && page.firstDiffY) {
      page.firstDiffX = dx;
      page.firstDiffY = dy;
      page.firstAngle  = Math.atan2(dy, dx) * (180 / Math.PI);
      if (page.firstAngle === null) page.firstAngle = 0;
    }

    if (page.firstAngle < 45) {
      page.dragY = false;
      v.velocidade = (x - v.toc_ini2) / dt;
      v.time_touch = now;
      v.toc_ini2 = x;
      v.arraste = x - v.toc_ini;
      setTranslates[i](v.arraste);
      aplicarLimites(i);
    }
    else if (page.firstAngle > 60 && window.innerWidth < 993) {
      page.deltaY = y - page.initialY;
      page.speed = page.deltaY / dt; //antes: now - page.startTime
      page.speed = Math.sign(speed) * Math.max(minSpeed, Math.min(Math.abs(speed), maxSpeed));
      window.scrollBy(0, -deltaY);
      page.initialY = y;
      page.startTime = now;
      page.dragY = true;
    }
    else{page.dragY = null;}
  }

  function finalizarArraste(e, i) {
    const v = variables[i];
    if (!page.dragY) {
      if (!v.arrastando) return;
      v.arrastando = false;
      const decel = () => {
        if (Math.abs(v.velocidade) > 0.01) {
          v.velocidade *= 0.95;
          v.arraste += v.velocidade * 16;
          setTranslates[i](v.arraste);
          v.animacao = requestAnimationFrame(decel);
          aplicarLimites(i);
        } else {
          v.animacao = null;    
        }
      };
      decel();
    }
    if(page.dragY){
      if (Math.abs(speed) < minSpeed) {
        page.speed = minSpeed * Math.sign(speed); // Garante movimento mínimo
      }
      if (!Number.isFinite(speed)) page.speed = minSpeed * Math.sign(deltaY);
      startMomentumScroll();
    }
    page.initialX = null
    page.initialY= null 
    page.firstAngle = null, 
    page.firstDiffX = null, 
    page.firstDiffY = null, 
    page.dragY = null, 
    page.startTime = null;
  }

  function aplicarLimites(i) {
    const v = variables[i];
    const limits = [limitAdvertisements, limitCategories, limitProductList];
    const limit = limits[i]; // sempre atualizado
  
    if (v.arraste < limit) { v.arraste = limit; v.velocidade = 0; }
    if (v.arraste > 0)      { v.arraste = 0;     v.velocidade = 0; }
  }

  function startMomentumScroll() {
    const decay = 0.95;
    const step = () => {
      if (Math.abs(speed) > 0.1) {
        page.speed *= decay;
        window.scrollBy(0, -page.speed * 16);
        requestAnimationFrame(step);
      }
      //removi o else daqui
    };
    requestAnimationFrame(step);
  }
}
