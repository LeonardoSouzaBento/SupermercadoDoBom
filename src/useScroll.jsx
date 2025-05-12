import { useEffect, useContext, useRef, useCallback } from "react";
import { CartContext } from "./Componentes/CartContext";

export function useScroll() {
  const {
    advertisementsRef,
    categoriesRef,
    promotionsRef,
    mainRef,
    limitAdvertisements,
    limitCategories,
    limitProductList,
    limitMain,
    translateX1,
    translateX2,
    translateX3,
    translateMain, 
    setTranslateX1,
    setTranslateX2,
    setTranslateX3,
    setTranslateMain
  } = useContext(CartContext);

  // Refs agrupados
  const refs = [
    advertisementsRef,
    categoriesRef,
    promotionsRef,
    mainRef
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
    useRef(translateX3),
    useRef(translateMain)
  ];
  useEffect(() => {
    translateRefs[0].current = translateX1;
    translateRefs[1].current = translateX2;
    translateRefs[2].current = translateX3;
    translateRefs[3].current = translateMain;
  }, [translateX1, translateX2, translateX3, translateMain]);
    
  const setTranslates = [setTranslateX1, setTranslateX2, setTranslateX3, setTranslateMain];

  //array de limites
  const limitsTranslateRefs = [
    useRef(limitAdvertisements),
    useRef(limitCategories),
    useRef(limitProductList),
    useRef(limitMain)
  ];

  useEffect(() => {
    limitsTranslateRefs[0].current = limitAdvertisements;
    limitsTranslateRefs[1].current = limitCategories;
    limitsTranslateRefs[2].current = limitProductList;
    limitsTranslateRefs[3].current = limitMain;
  }, [limitAdvertisements, limitCategories, limitProductList, limitMain]);

  // Variáveis de scroll de página
const pageRefs = useRef(
  {
    initialX: 0,
    initialY: 0,
    firstAngle: null,
    firstDiffX: null,
    firstDiffY: null,
    startTime: 0,
    deltaY: 0,
    speed: 0,
    firstCheck: null,
  }
);

  // const minSpeed = 0.7;
  const maxSpeed = 1.4;
  let isDesktop = false;

  const listeners = useRef([[], [], []]);

  const iniciarArraste = useCallback((e, i) =>  {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "mousedown" && e.button !== 0) return;
    //
    const page = pageRefs.current;
    const variables = variablesRef.current[i];
    page.initialX = e.touches ? e.touches[0].clientX : e.clientX;
    page.initialY = e.touches ? e.touches[0].clientY : e.clientY;
    page.deltaY = 0;
    page.speed=0;
    page.firstCheck = null;
    page.firstAngle = null;
    page.firstDiffX = null;
    page.firstDiffY = null;

    page.startTime = Date.now();
    (isDesktop===false && window.innerWidth > 993) && (isDesktop=true);
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
    const page = pageRefs.current;
    const now = Date.now();
    const dt = Math.max(1, now - variables.time_touch);
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    const dx = Math.abs(x - page.initialX);
    const dy = Math.abs(y - page.initialY);

    if (page.firstDiffX === null && page.firstDiffY ===null) {
      page.firstDiffX = dx;
      page.firstDiffY = dy;
      page.firstAngle  = Math.atan2(dy, dx) * (180 / Math.PI);
      if(page.firstAngle < 45) page.firstCheck = true;
      if (page.firstAngle > 45) page.firstCheck=false;
    }

    if (page.firstCheck) {
      e.preventDefault();
      const deslocamento = x - variables.toc_ini;
      variables.velocidade = deslocamento / dt;
      if (Math.abs(variables.velocidade) > 1.4) {
        variables.velocidade = 1.4 * Math.sign(variables.velocidade);
      }
      variables.time_touch = now;
      variables.toc_ini= x;
      setTranslates[i](translateRefs[i].current + deslocamento);
      page.initialX = x;
      
    }
    else if(!page.firstCheck && !isDesktop) {
      page.deltaY = y - page.initialY;
      page.speed = page.deltaY / dt;
      (Math.abs(page.speed)>maxSpeed) && (page.speed = maxSpeed * Math.sign(page.speed))
      setTranslates[3](translateRefs[3].current + page.deltaY);
      page.initialY = y;
      page.startTime = now;
    };
  }, []);

  const finalizarArraste = useCallback((e, i) => {
    e.preventDefault(e);
    e.stopPropagation();
    const page = pageRefs.current;
    const variables = variablesRef.current[i];

    if(page.firstCheck) {
      e.preventDefault(e);
      if (!variables.arrastando) return;
      variables.arrastando = false;
      // Cancela animação anterior, se existir
      if (variables.animacao) {
        cancelAnimationFrame(variables.animacao);
      }

      const decel = () => {
        if (Math.abs(variables.velocidade) > 0.01) {
          variables.velocidade *= 0.95;
          let proximo = translateRefs[i].current + variables.velocidade * 20;

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
    if(!page.firstCheck && !isDesktop){
      (window.scrollY === 0 && page.deltaY < -80) && (location.reload());
      
      const decel = () => {
      if (Math.abs(variables.velocidade) > 0.01) {
        variables.velocidade *= 0.95;
        let proximo = translateRefs[3].current + variables.velocidade * 20;

        const max = limitsTranslateRefs[3].current;
        const min = 0;

        if (proximo < max) {
          proximo = max;
          variables.velocidade = 0;
        } else if (proximo > min) {
          proximo = min;
          variables.velocidade = 0;
        }
        setTranslates[3](proximo);
        variables.animacao = requestAnimationFrame(decel);
      }
      decel()
    };
      // (page.speed!=0)&&(startMomentumScroll())
    }
    page.initialX = null
    page.initialY = null
    page.firstAngle = null
    page.firstDiffX = null
    page.firstDiffY = null
    page.startTime = null
    page.firstCheck = null
    page.deltaY = 0
    page.speed = 0
    variables.animacao=null;
  }, []);
  

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
      el.addEventListener('touchend', end, { passive: false });
      el.addEventListener('mouseup', end, { passive: false });
    });
  
    return () => {
      refs.forEach((refWrapper, i) => {
        const el = refWrapper?.current;
        if (!el || !listeners.current[i]) return;

        const start = e => iniciarArraste(e, i);
        const move = e => aoMover(e, i);
        const end = e => finalizarArraste(e, i);

        el.removeEventListener('touchstart', start);
        el.removeEventListener('mousedown', start);
        el.removeEventListener('touchmove', move);
        el.removeEventListener('mousemove', move);
        el.removeEventListener('touchend', end);
        el.removeEventListener('mouseup', end);
      });
    };
  }, []);
}