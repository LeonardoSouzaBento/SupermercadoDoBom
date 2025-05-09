import { useEffect, useContext, useRef, useCallback } from "react";
import { CartContext } from "./Componentes/CartContext";

export function useScroll2() {
  const {
    advertisementsRef,
    categoriesRef,
    promotionsRef,
    limitAdvertisements,
    limitCategories,
    limitProductList,
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
      animacao: null,
      scroll_ini:0
    }))
  );

  
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
    firstCheck: '',
    initialX: null,
    initialY: null,
    firstDiffX: null,
    firstDiffY: null,
    firstAngle: null,
    dragY: null,
  });

  const iniciarArraste = useCallback((e, i) =>  {
    e.preventDefault();
    e.stopPropagation();
    if (e.button !== 0) return;

    const ref = refs[i].current;
    //
    const page = pageRef.current;
    const variables = variablesRef.current[i];
    page.initialX = e.clientX;
    page.initialY = e.clientY;
    variables.scroll_ini = ref.scrollLeft; //
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
    const ref = refs[i].current;
    if (!variables.arrastando) return;

    const page = pageRef.current;
    const now = Date.now();
    const dt = Math.max(1, now - variables.time_touch);
    const x = e.clientX;
    const y = e.clientY;
    const dx = Math.abs(x - page.initialX);
    const dy = Math.abs(y - page.initialY);
    // if (dx <= limiar && dy <= limiar) return;

    if (page.firstDiffX === null && page.firstDiffY ===null) {
      page.firstDiffX = dx;
      page.firstDiffY = dy;
      page.firstAngle  = Math.atan2(dy, dx) * (180 / Math.PI);
      page.firstAngle < 45 ? page.firstCheck = 'divs':page.firstCheck = 'page';
    }

    if (page.firstAngle !== null && page.firstCheck === 'divs') {
      page.dragY = false;
      const deslocamento = x - variables.toc_ini;
      variables.velocidade = deslocamento / dt;

      if (Math.abs(variables.velocidade) > 1.4) {
        variables.velocidade = 1.4 * Math.sign(variables.velocidade);
      }
      variables.time_touch = now;
      variables.toc_ini= x;
      ref.scrollLeft =  ref.scrollLeft - deslocamento;

      page.initialX = x;
    }
  }, []);

  const finalizarArraste = useCallback((e, i) => {
    e.preventDefault();
    e.stopPropagation();

    const page = pageRef.current;
    if(page.dragY) return;

    const variables = variablesRef.current[i];

    if (!page.dragY) {
      const ref = refs[i].current;
      if (!variables.arrastando) return;

      if (variables.animacao) {
        cancelAnimationFrame(variables.animacao);
      }
  
      const velocidadeInicial = variables.velocidade;

      const decel = () => {
        variables.velocidade *= 0.95;
        ref.scrollLeft -= variables.velocidade * 16;
        variables.animacao = requestAnimationFrame(decel);
      };
      if (Math.abs(velocidadeInicial) > 0.1) {
        variables.animacao = requestAnimationFrame(decel);
      } 
      else{
        variables.velocidade = 0;
        variables.animacao = null;
      }

      variables.arrastando = false;
      page.initialX = null
      page.initialY = null
      page.firstAngle = null
      page.firstDiffX = null
      page.firstDiffY = null
      page.dragY= null
    }
  }, []);
  

  const listeners = useRef([]);

  useEffect(() => {
    // if (refs.some(ref => !ref.current)) return;
    refs.forEach((refWrapper, i) => {
      const el = refWrapper.current;
      if (!el) return;

      const start = e => iniciarArraste(e, i);
      const move  = e => aoMover(e, i);
      const end   = e => finalizarArraste(e, i);

      listeners.current[i] = { start, move, end };

      el.addEventListener('pointerdown', start, { passive: false });
      el.addEventListener('pointermove', move, { passive: false });
      el.addEventListener('pointerup', end, { passive: false });
    });

    return () => {
      refs.forEach((refWrapper, i) => {
        const el = refWrapper.current;
        const handlers = listeners.current[i];
        if (!el || !handlers) return;

        const { start, move, end } = handlers;

        el.removeEventListener('pointerdown', start, { passive: false });
        el.removeEventListener('pointermove', move, { passive: false });
        el.removeEventListener('pointerup', end, { passive: false });
      });
    };
  }, []);
}
