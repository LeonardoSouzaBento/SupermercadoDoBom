import { useEffect, useContext, useRef, useCallback } from "react";
import { CartContext } from "./Componentes/CartContext";

export function useScrollMain() {
  const {mainRef, limitMain, translateMain, setTranslateMain} = useContext(CartContext);

  // Estado interno de arraste
  const variablesRef = useRef({
    arrastando: false,
    toc_ini: 0,
    time_touch: 0,
    velocidade: 0,
    animacao: null
  });

  const translateMainRef = useRef(translateMain);
  const limitMainRef = useRef(limitMain);

  useEffect(() => {
    translateMainRef.current = translateMain
  }, [translateMain]);
  
  useEffect(() => {
    limitMainRef.current = limitMain;
  }, [limitMain]);

  const pageRef = useRef({
    initialX: null,
    initialY: null,
    firstAngle: null,
    dragY: null,
    firstDiffX: null,
    firstDiffY: null,
  });

  const iniciarArraste = useCallback((e) =>  {
    e.preventDefault();
    //
    const page = pageRef.current;
    const variables = variablesRef.current;
    page.initialX = e.touches[0].clientX;
    page.initialY = e.touches[0].clientY;
    page.deltaY = 0;
    page.speed=0;
    page.dragY=null;
    //
    variables.arrastando = true;
    variables.toc_ini = page.initialY;
    variables.time_touch = Date.now();
    variables.arraste=0;
    if (variables.animacao) {
      cancelAnimationFrame(variables.animacao);
      variables.animacao = null;
    }
  }, []);
  
  const aoMover = useCallback((e) => {
    e.preventDefault();
    const variables = variablesRef.current;
    if (!variables.arrastando) return;
    const page = pageRef.current;
    const now = Date.now();
    const dt = Math.max(1, now - variables.time_touch);
    const x = e.touches[0].clientX;
    const y = e.touches[0].clientY;
    const dx = Math.abs(x - page.initialX);
    const dy = Math.abs(y - page.initialY);
    if (dx <= 4 && dy <= 4) return;

    if (page.firstDiffX === null && page.firstDiffY ===null) {
      page.firstDiffX = dx;
      page.firstDiffY = dy;
      page.firstAngle  = Math.atan2(dy, dx) * (180 / Math.PI);
      if(page.firstAngle > 45) {page.dragY=true};
    }

    if (page.dragY) {
      const deslocamento = y - variables.toc_ini;

      if (Math.abs(deslocamento) < 0.5) return;
      const velocidade = deslocamento / dt;
      variables.velocidade = velocidade;

      variables.time_touch = now;
      variables.toc_ini= y;
      page.initialX = x;
      page.initialY=y;
      setTranslateMain(translateMainRef.current + deslocamento);
    }
  }, []);

  const finalizarArraste = useCallback((e) => {
    const page = pageRef.current;
    const variables = variablesRef.current;
    if (page.dragY) {
      if (!variables.arrastando) return;
      variables.arrastando = false;
  
      // Cancela animação anterior, se existir
      if (variables.animacao) {
        cancelAnimationFrame(variables.animacao);
      }
  
      const decel = () => {
        if (Math.abs(variables.velocidade) > 0.01) {
          variables.velocidade *= 0.95;
          let proximo = translateMainRef.current + variables.velocidade * 16;
          
          if (proximo < limitMainRef.current) {
            proximo = limitMainRef.current;
            variables.velocidade = 0;
          } else if (proximo > 0) {
            proximo = 0;
            variables.velocidade = 0;
          }
          setTranslateMain(proximo);
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
  
  const listeners = useRef([]);

 useEffect(() => {
    const el = mainRef?.current;
    if (!el) return;

    const start = e => iniciarArraste(e);
    const move = e => aoMover(e);
    const end = e => finalizarArraste(e);

    // Armazena os listeners para poder removê-los depois, se necessário
    listeners.current = [start, move, end];

    el.addEventListener('touchstart', start, { passive: false });
    el.addEventListener('touchmove', move, { passive: false });
    el.addEventListener('touchend', end);

    return () => {
        const [start, move, end] = listeners.current;

        el.removeEventListener('touchstart', start);
        el.removeEventListener('touchmove', move);
        el.removeEventListener('touchend', end);
    };
 }, []);
}