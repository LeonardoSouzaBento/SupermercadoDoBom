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
    { arraste: 0, toc_ini: 0, toc_ini2: 0, time_touch: 0, velocidade: 0, animacao: null, arrastando: false },
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

    const posX = page.initialX;
    variables[i].arrastando = true;
    variables[i].toc_ini = posX - translates[i];
    variables[i].time_touch = Date.now();
  
    if (variables[i].animacao) {
      cancelAnimationFrame(variables[i].animacao);
      variables[i].animacao = null;
    }
  };
  

  function aoMover(e, i) {
    e.preventDefault();
    if (!variables[i].arrastando) return;

    const now = Date.now();
    const dt = Math.max(1, now - variables[i].time_touch);
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
      page.initialX = x;
      variables[i].velocidade = (x - variables[i].toc_ini2) / dt;
      variables[i].time_touch = now;
      variables[i].toc_ini2 = x;
    }
    else if (page.firstAngle > 60 && window.innerWidth < 993) {
      page.deltaY = y - page.initialY;
      page.speed = page.deltaY / dt;
      page.speed = Math.sign(page.speed) * Math.max(minSpeed, Math.min(Math.abs(page.speed), maxSpeed));
      window.scrollBy(0, -page.deltaY);
      page.initialY = y;
      page.startTime = now;
      page.dragY = true;
    }
    else{page.dragY = null;}
  }

  function finalizarArraste(e, i) {
    e.preventDefault();
    if (!page.dragY) {
      console.log(translates[i]);
      if (!variables[i].arrastando) return;
      variables[i].arrastando = false;
      const decel = () => {
        if (Math.abs(variables[i].velocidade) > 0.01) {
          variables[i].velocidade *= 0.95;
          variables[i].arraste += variables[i].velocidade * 16;
          setTranslates[i](translates[i] + variables[i].arraste);
          variables[i].animacao = requestAnimationFrame(decel);
        } else {
          variables[i].animacao = null;    
        }
      };
      decel();
    }
    if(page.dragY){
      if (Math.abs(page.speed) < minSpeed) {
        page.speed = minSpeed * Math.sign(page.speed); // Garante movimento mínimo
      }
      if (!Number.isFinite(page.speed)) page.speed = minSpeed * Math.sign(page.deltaY);
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
  
  function startMomentumScroll() {
    const decay = 0.95;
    const step = () => {
      if (Math.abs(page.speed) > 0.1) {
        page.speed *= decay;
        window.scrollBy(0, -page.speed * 16);
        requestAnimationFrame(step);
      }
      //removi o else daqui
    };
    requestAnimationFrame(step);
  }
}
