import { useEffect, useContext, useRef, useCallback } from "react";
import { CartContext } from "../components/CartContext";

export function useScrollX() {
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
    firstCheck: ''
  });

  const iniciarArraste = useCallback((e, i) =>  {
    e.preventDefault();
    if (e.type === "mousedown" && e.button !== 0) return;
    //
    const page = pageRef.current;
    const variables = variablesRef.current[i];
    page.initialX = e.touches ? e.touches[0].clientX : e.clientX;
    page.initialY = e.touches ? e.touches[0].clientY : e.clientY;
    page.deltaY = 0;
    page.speed=0;
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
    const variables = variablesRef.current[i];
    if (!variables.arrastando) return;
    const page = pageRef.current;
    const now = Date.now();
    const dt = Math.max(1, now - variables.time_touch);
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    const dx = Math.abs(x - page.initialX);
    const dy = Math.abs(y - page.initialY);
    if (dx <= 4 && dy <= 4) return;

    if (page.firstDiffX === null && page.firstDiffY ===null) {
      page.firstDiffX = dx;
      page.firstDiffY = dy;
      page.firstAngle  = Math.atan2(dy, dx) * (180 / Math.PI);
      page.firstAngle < 45 ? page.firstCheck = 'divs':page.firstCheck = 'page';
    }

    if (page.firstAngle !== null && page.firstCheck === 'divs') {
      page.dragY = false;
      const deslocamento = (x - variables.toc_ini)*1.3;

      if (Math.abs(deslocamento) < 0.5) return;
      const velocidade = (deslocamento / dt)*1.3;
      variables.velocidade = velocidade;
      if(Math.abs(velocidade)>1.4){
        variables.velocidade = 1.4 * Math.sign(velocidade);
      }

      variables.time_touch = now;
      variables.toc_ini= x;

      let proximo = translateRefs[i].current + deslocamento;
      const max = limitsTranslateRefs[i].current;
      if (proximo < max) {
        proximo = max;
        variables.velocidade = 0;
      } else if (proximo > 0) {
        proximo = 0;
        variables.velocidade = 0;
      }
      setTranslates[i](proximo);

      page.initialX = x;
    }
    
  }, []);

  const finalizarArraste = useCallback((e, i) => {
    const page = pageRef.current;
    const variables = variablesRef.current[i];
    if (!page.dragY) {
      if (!variables.arrastando) return;
      variables.arrastando = false;
  
      // Cancela animação anterior, se existir
      if (variables.animacao) {
        cancelAnimationFrame(variables.animacao);
      }
  
      const decel = () => {
        if (Math.abs(variables.velocidade) > 0.15) {
          variables.velocidade *= 0.95;
          let proximo = translateRefs[i].current + variables.velocidade * 16;
  
          const max = limitsTranslateRefs[i].current;
  
          if (proximo < max) {
            proximo = max;
            variables.velocidade = 0;
          } else if (proximo > 0) {
            proximo = 0;
            variables.velocidade = 0;
          }
          setTranslates[i](proximo);
          variables.animacao = requestAnimationFrame(decel);
        }
      };
      decel();
    }
 
    page.initialX = null
    page.initialY = null
    page.firstAngle = null
    page.firstDiffX = null
    page.firstDiffY = null
    page.dragY= null
    variables.animacao=null;
  }, []);
  
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
  }, []);
}