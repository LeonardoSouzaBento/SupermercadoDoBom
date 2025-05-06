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

  // Variáveis de scroll de página
  const page = useRef({ initialX: null, initialY: null, firstAngle: null, firstDiffX: null, firstDiffY: null, dragY: null, startTime: null });
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

  function iniciarArraste(e, i) {
    e.preventDefault();
    if (e.type === 'mousedown' && e.button !== 0) return;
    page.current.initialX = e.touches ? e.touches[0].clientX : e.clientX;
    page.current.initialY = e.touches ? e.touches[0].clientY : e.clientY;
    page.current.firstAngle = page.current.firstDiffX = page.current.firstDiffY = null;
    page.current.dragY = false;
    page.current.startTime = Date.now();

    const v = variables[i];
    const posX = page.current.initialX;
    v.arrastando = true;
    v.toc_ini = posX - v.arraste;
    v.time_touch = Date.now();
    if (v.animacao) cancelAnimationFrame(v.animacao);
  }

  function aoMover(e, i) {
    e.preventDefault();
    const v = variables[i];
    if (!v.arrastando) return;
    const now = Date.now();
    const dt = Math.max(1, now - v.time_touch);
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    const dx = Math.abs(x - page.current.initialX);
    const dy = Math.abs(y - page.current.initialY);
    if (dx <= limiar && dy <= limiar) return;

    if (page.current.firstDiffX === null) {
      page.current.firstDiffX = dx;
      page.current.firstDiffY = dy;
      page.current.firstAngle  = Math.atan2(dy, dx) * (180 / Math.PI);
    }

    if (page.current.firstAngle < 45) {
      v.velocidade = (x - v.toc_ini2) / dt;
      v.time_touch = now;
      v.toc_ini2 = x;
      v.arraste = x - v.toc_ini;
      if (i === 0 && translateX1 !== v.arraste) setTranslateX1(v.arraste);
      if (i === 1 && translateX2 !== v.arraste) setTranslateX2(v.arraste);
      if (i === 2 && translateX3 !== v.arraste) setTranslateX3(v.arraste);
      aplicarLimites(i);
    }
    else if (page.current.firstAngle > 60 && window.innerWidth < 993) {
      const deltaY = y - page.current.initialY;
      let speed = deltaY / (now - page.current.startTime);
      speed = Math.sign(speed) * Math.max(minSpeed, Math.min(Math.abs(speed), maxSpeed));
      window.scrollBy(0, -deltaY);
      page.current.initialY = y;
      page.current.startTime = now;
      page.current.dragY = true;
    }
  }

  function finalizarArraste(e, i) {
    e.preventDefault();
    const v = variables[i];
    if (!page.current.dragY) {
      if (!v.arrastando) return;
      v.arrastando = false;
      const decel = () => {
        if (Math.abs(v.velocidade) > 0.01) {
          v.velocidade *= 0.95;
          v.arraste += v.velocidade * 16;
          if (i === 0 && translateX1 !== v.arraste) setTranslateX1(v.arraste);
          if (i === 1 && translateX2 !== v.arraste) setTranslateX2(v.arraste);
          if (i === 2 && translateX3 !== v.arraste) setTranslateX3(v.arraste);
          v.animacao = requestAnimationFrame(decel);
          aplicarLimites(i);
        } else {
          v.animacao = null;    
        }
      };
      decel();
    }
    page.current = { initialX: null, initialY: null, firstAngle: null, firstDiffX: null, firstDiffY: null, dragY: null, startTime: null };
  }

  function aplicarLimites(i) {
    const v = variables[i];
    const limits = [limitAdvertisements, limitCategories, limitProductList];
    const limit = limits[i]; // sempre atualizado
  
    if (v.arraste < limit) { v.arraste = limit; v.velocidade = 0; }
    if (v.arraste > 0)      { v.arraste = 0;     v.velocidade = 0; }
  }
}
