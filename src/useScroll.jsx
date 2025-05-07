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
    setTranslateX3
  } = useContext(CartContext);

  // Refs agrupados
  const refs = [
    advertisementsRef,
    categoriesRef,
    promotionsRef
  ];

  // Estado interno de arraste
  const variables = useRef([
    { arraste: 0, toc_ini: 0, time_touch: 0, velocidade: 0, animacao: null, arrastando: false, historicoVelocidade: []},
    { arraste: 0, toc_ini: 0, time_touch: 0, velocidade: 0, animacao: null, arrastando: false, historicoVelocidade: []},
    { arraste: 0, toc_ini: 0, time_touch: 0, velocidade: 0, animacao: null, arrastando: false, historicoVelocidade: []}
  ]).current;

  const translateRefs = [
    useRef(translateX1),
    useRef(translateX2),
    useRef(translateX3)
  ];
  useEffect(() => {
    translateRefs[0].current = translateX1;
    translateRefs[1].current = translateX2;
    translateRefs[2].current = translateX3;
  }, [translateX1, translateX2, translateX3]);
  
  const setTranslates = [setTranslateX1, setTranslateX2, setTranslateX3];

  //array de limites
  const limitsTranslateRefs = [
    useRef(limitAdvertisements),
    useRef(limitCategories),
    useRef(limitProductList)
  ];

  useEffect(() => {
    limitsTranslateRefs[0].current = limitAdvertisements;
    limitsTranslateRefs[1].current = limitCategories;
    limitsTranslateRefs[2].current = limitProductList;
  }, [limitAdvertisements, limitCategories, limitProductList]);

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

  const listeners = useRef([[], [], []]);

  useEffect(() => {
    refs.forEach((refWrapper, i) => {
      const el = refWrapper?.current;
      if (!el) return;
  
      const start = e => iniciarArraste(e, i);
      const move = e => aoMover(e, i);
      const end = e => finalizarArraste(e, i);
  
      listeners.current[i] = [start, move, end];
  
      el.addEventListener('touchstart', start, { passive: false });
      el.addEventListener('mousedown', start, { passive: false });
      el.addEventListener('touchmove', move, { passive: false });
      el.addEventListener('mousemove', move, { passive: false });
      el.addEventListener('touchend', end);
      el.addEventListener('mouseup', end);
    });
  
    return () => {
      refs.forEach((refWrapper, i) => {
        const el = refWrapper?.current;
        if (!el || !listeners.current[i]) return;
  
        const [start, move, end] = listeners.current[i];
  
        el.removeEventListener('touchstart', start);
        el.removeEventListener('mousedown', start);
        el.removeEventListener('touchmove', move);
        el.removeEventListener('mousemove', move);
        el.removeEventListener('touchend', end);
        el.removeEventListener('mouseup', end);
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

    variables[i].arrastando = true;
    variables[i].toc_ini = page.initialX;
    variables[i].time_touch = Date.now();
    variables[i].arraste=0;
    if (variables[i].animacao) {
      cancelAnimationFrame(variables[i].animacao);
      variables[i].animacao = null;
    }
  };
  
  function aoMover(e, i) {
    e.preventDefault();
    if (!variables[i].arrastando) return;

    const now = Date.now();
    const dt = Math.max(16, now - variables[i].time_touch);
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    const dx = Math.abs(x - page.initialX);
    const dy = Math.abs(y - page.initialY);
    if (dx <= limiar && dy <= limiar) return;

    if (page.firstDiffX === null && page.firstDiffY ===null) {
      page.firstDiffX = dx;
      page.firstDiffY = dy;
      page.firstAngle  = Math.atan2(dy, dx) * (180 / Math.PI);
    }

    if (page.firstAngle !== null && page.firstAngle < 45) {
      page.dragY = false;
    
      const deslocamento = x - variables[i].toc_ini;

      if (Math.abs(deslocamento) < 0.5) return;

      const novaVel = deslocamento / dt;
      variables[i].historicoVelocidade.push(novaVel);
      if (variables[i].historicoVelocidade.length > 5) {
        variables[i].historicoVelocidade.shift();
      }

      // Calcular a média e aplicar
      const historico = variables[i].historicoVelocidade;
      const media = historico.reduce((a, b) => a + b, 0) / historico.length;
      variables[i].velocidade = media;

      variables[i].time_touch = now;
      variables[i].toc_ini= x;
      setTranslates[i](translateRefs[i].current + deslocamento);
      page.initialX = x;
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
  }

  function finalizarArraste(e, i) {
    if (!page.dragY) {
      if (!variables[i].arrastando) return;
      variables[i].arrastando = false;
  
      // Cancela animação anterior, se existir
      if (variables[i].animacao) {
        cancelAnimationFrame(variables[i].animacao);
      }
  
      const decel = () => {
        if (Math.abs(variables[i].velocidade) > 0.01) {
          variables[i].velocidade *= 0.95;
          let proximo = translateRefs[i].current + variables[i].velocidade * 16;
  
          const max = limitsTranslateRefs[i].current;
          const min = 0;
  
          if (proximo < max) {
            proximo = max;
            variables[i].velocidade = 0;
          } else if (proximo > min) {
            proximo = min;
            variables[i].velocidade = 0;
          }
  
          // translateRefs[i].current = proximo;
          setTranslates[i](proximo);
          variables[i].animacao = requestAnimationFrame(decel);
        }
      };
      decel();
    }
    if(page.dragY){
      if (window.scrollY === 0 && page.deltaY > 80) {
        location.reload();
      }
      if (Math.abs(page.speed) < minSpeed || !Number.isFinite(page.speed) || page.speed === 0) {
        page.speed = minSpeed * (page.deltaY !== 0 ? Math.sign(page.deltaY) : -1);
      }
      startMomentumScroll();
    }
  
    page.initialX = null
    page.initialY = null
    page.firstAngle = null
    page.firstDiffX = null
    page.firstDiffY = null
    page.dragY= null
    page.startTime = null
    page.deltaY = 0
    page.speed = 0
    variables[i].historicoVelocidade=[];
    variables[i].animacao=null;
  }
  
  function startMomentumScroll() {
    const decay = 0.95;
    const step = () => {
      if (Math.abs(page.speed) > 0.1) {
        page.speed *= decay;
        window.scrollBy(0, -page.speed * 16);
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }
}
