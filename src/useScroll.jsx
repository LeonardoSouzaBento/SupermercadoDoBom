import { useEffect, useContext, useRef, useCallback } from "react";
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
  const variablesRef = useRef(
    refs.map(() => ({
      arrastando: false,
      toc_ini: 0,
      time_touch: 0,
      velocidade: 0,
      animacao: null
    }))
  );

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
  const pageRef = useRef({
    initialX: null,
    initialY: null,
    firstAngle: null,
    dragY: null,
    startTime: null,
    deltaY: 0,
    speed: 0,
    firstCheck: null //false para pagina; true para divs
  });

  const minSpeed = 0.7;
  const maxSpeed = 2.0;

  const listeners = useRef([[], [], []]);

  const iniciarArraste = useCallback((e, i) =>  {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "mousedown" && e.button !== 0) return;
    //
    const page = pageRef.current;
    const variables = variablesRef.current[i];
    page.initialX = e.touches ? e.touches[0].clientX : e.clientX;
    page.initialY = e.touches ? e.touches[0].clientY : e.clientY;
    page.deltaY = 0;
    page.speed=0;
    page.startTime = Date.now();
    //

    variables.arrastando = true;
    variables.toc_ini = page.initialX;
    variables.time_touch = Date.now();
    variables.arraste=0;
    if (variables.animacao) {
      cancelAnimationFrame(variables.animacao);
      variables.animacao = null;
    }
  }, []);
  
  const aoMover = useCallback((e, i) => {
    e.preventDefault();
    e.stopPropagation();
    const variables = variablesRef.current[i];
    if (!variables.arrastando) return;
    const page = pageRef.current;
    const now = Date.now();
    const dt = Math.max(1, now - variables.time_touch);
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    const dx = Math.abs(x - page.initialX);
    const dy = Math.abs(y - page.initialY);

    if (page.firstDiffX === null && page.firstDiffY ===null) {
      const widhtWindow = window.innerWidth;
      page.firstDiffX = dx;
      page.firstDiffY = dy;
      page.firstAngle  = Math.atan2(dy, dx) * (180 / Math.PI);
      page.firstAngle < 45 && (page.firstCheck = true);
      (page.firstAngle > 45 && widhtWindow < 993)&&(page.firstCheck = false);
    }

    if (page.firstAngle !== null && page.firstCheck === true) {
      const deslocamento = x - variables.toc_ini;

      const velocidade = deslocamento / dt;
      variables.velocidade = velocidade;
      if (Math.abs(variables.velocidade) > 1.4) {
        variables.velocidade = 1.4 * Math.sign(variables.velocidade);
      }

      variables.time_touch = now;
      variables.toc_ini= x;
      setTranslates[i](translateRefs[i].current + deslocamento);
      page.initialX = x;
    }
    
    else if (page.firstCheck === false) {
      page.deltaY = y - page.initialY;
      page.speed = page.deltaY / dt;
      page.speed = Math.sign(page.speed) * Math.max(minSpeed, Math.min(Math.abs(page.speed), maxSpeed));
      window.scrollBy(0, -page.deltaY);
      page.initialY = y;
      page.startTime = now;
    }
  }, []);

  const finalizarArraste = useCallback((e, i) => {
    e.preventDefault();
    e.stopPropagation();
    
    const page = pageRef.current;
    const variables = variablesRef.current[i];

    if (page.firstCheck === true) {
      if (!variables.arrastando) return;
      variables.arrastando = false;
  
      // Cancela animação anterior, se existir
      if (variables.animacao) {
        cancelAnimationFrame(variables.animacao);
      }
  
      const decel = () => {
        if (Math.abs(variables.velocidade) > 0.01) {
          variables.velocidade *= 0.95;
          let proximo = translateRefs[i].current + variables.velocidade * 16;
  
          const max = limitsTranslateRefs[i].current;
          const min = 0;
  
          if (proximo < max) {
            proximo = max;
            variables.velocidade = 0;
          } else if (proximo > min) {
            proximo = min;
            variables.velocidade = 0;
          }
          setTranslates[i](proximo);
          variables.animacao = requestAnimationFrame(decel);
        }
      };
      decel();
    }
    if(page.firstCheck === false){
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
    page.firstCheck = null
    page.startTime = null
    // page.deltaY = 0
    // page.speed = 0
    variables.animacao=null;
  }, []);
  
  const startMomentumScroll = useCallback(() => {
    const page = pageRef.current;
    const decay = 0.95;
    const step = () => {
      if (Math.abs(page.speed) > 0.1) {
        page.speed *= decay;
        window.scrollBy(0, -page.speed * 16);
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    refs.forEach((refWrapper, i) => {
      const el = refWrapper?.current;
      if (!el) {
      console.warn(`Elemento para ref ${i} não encontrado.`);
      return;
    }
      const start = e => iniciarArraste(e, i);
      const move = e => aoMover(e, i);
      const end = e => finalizarArraste(e, i);
  
      listeners.current[i] = [start, move, end];
  
      el.addEventListener('pointerdown', start, { passive: false });
      el.addEventListener('pointermove', move, { passive: false });
      el.addEventListener('pointerup', end, { passive: false });
    });
  
    return () => {
      refs.forEach((refWrapper, i) => {
        const el = refWrapper?.current;
        if (!el || !listeners.current[i]) return;

        const start = e => iniciarArraste(e, i);
        const move = e => aoMover(e, i);
        const end = e => finalizarArraste(e, i);

        el.removeEventListener('pointerdown', start, { passive: false });
        el.removeEventListener('pointermove', move, { passive: false });
        el.removeEventListener('pointerup', end, { passive: false });
      });
    };
  }, []);
}
