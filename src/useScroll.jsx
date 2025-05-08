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

  const refs = [
    advertisementsRef,
    categoriesRef,
    promotionsRef
  ];

  // Estado interno de arraste agrupado em ref estável
  const pageRef = useRef({
    initialX: null,
    initialY: null,
    firstAngle: null,
    firstCheck: false,
    dragY: null,
    startTime: null,
    deltaY: 0,
    speed: 0
  });

  // Variáveis por lista (sem histórico não usado)
  const variablesRef = useRef(
    refs.map(() => ({
      arrastando: false,
      toc_ini: 0,
      time_touch: 0,
      velocidade: 0,
      animacao: null
    }))
  );

  // Translates refs e setters
  const translateRefs = [useRef(translateX1), useRef(translateX2), useRef(translateX3)];
  useEffect(() => {
    translateRefs[0].current = translateX1;
    translateRefs[1].current = translateX2;
    translateRefs[2].current = translateX3;
  }, [translateX1, translateX2, translateX3]);
  const setTranslates = [setTranslateX1, setTranslateX2, setTranslateX3];

  // Limites
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

  const minSpeed = 0.7;
  const maxSpeed = 2.0;
  const limiar = 4;

  // Para throttle de movimento
  const frameRefs = useRef([null, null, null]);

  // Handlers estáveis
  const iniciarArraste = useCallback((e, i) => {
    e.preventDefault();
    if (e.type === "mousedown" && e.button !== 0) return;
    const page = pageRef.current;
    const vars = variablesRef.current[i];

    page.initialX = e.touches ? e.touches[0].clientX : e.clientX;
    page.initialY = e.touches ? e.touches[0].clientY : e.clientY;
    page.firstAngle = null;
    page.firstCheck = false;
    page.deltaY = 0;
    page.speed = 0;
    page.startTime = Date.now();

    vars.arrastando = true;
    vars.toc_ini = page.initialX;
    vars.time_touch = page.startTime;
    vars.velocidade = 0;
    if (vars.animacao) cancelAnimationFrame(vars.animacao);
  }, []);

  const aoMover = useCallback((e, i) => {
    e.preventDefault();
    const page = pageRef.current;
    const vars = variablesRef.current[i];
    if (!vars.arrastando) return;

    const now = Date.now();
    const dt = Math.max(1, now - vars.time_touch);
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    const dx = Math.abs(x - page.initialX);
    const dy = Math.abs(y - page.initialY);
    if (!page.firstCheck && (dx > limiar || dy > limiar)) {
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      page.firstAngle = angle;
      page.firstCheck = true;
    }
    if (!page.firstCheck) return;

    // Arraste horizontal
    if (page.firstAngle < 45) {
      const deslocamento = x - vars.toc_ini;
      if (Math.abs(deslocamento) < 0.5) return;
      vars.velocidade = deslocamento / dt;
      vars.time_touch = now;
      vars.toc_ini = x;
      page.initialX = x;

      // throttle com requestAnimationFrame
      if (frameRefs.current[i] == null) {
        frameRefs.current[i] = requestAnimationFrame(() => {
          const next = translateRefs[i].current + deslocamento;
          setTranslates[i](next);
          frameRefs.current[i] = null;
        });
      }
    }

    // Arraste vertical (exemplo simplificado)
    else if (page.firstAngle > 60 && window.innerWidth < 993) {
      const deltaY = y - page.initialY;
      let speed = deltaY / dt;
      speed = Math.sign(speed) * Math.max(minSpeed, Math.min(Math.abs(speed), maxSpeed));
      window.scrollBy(0, -deltaY);
      page.initialY = y;
      page.startTime = now;
      page.speed = speed;
      page.dragY = true;
    }
  }, []);

  const finalizarArraste = useCallback((e, i) => {
    const page = pageRef.current;
    const vars = variablesRef.current[i];
    if (!vars.arrastando) return;
    vars.arrastando = false;
    if (vars.animacao) cancelAnimationFrame(vars.animacao);

    if (!page.dragY) {
      // Inércia horizontal
      const decel = () => {
        if (Math.abs(vars.velocidade) > 0.01) {
          vars.velocidade *= 0.95;
          let next = translateRefs[i].current + vars.velocidade * 16;
          const max = limitsTranslateRefs[i].current;
          const min = 0;
          if (next < max) {
            next = max;
            vars.velocidade = 0;
          } else if (next > min) {
            next = min;
            vars.velocidade = 0;
          }
          setTranslates[i](next);
          vars.animacao = requestAnimationFrame(decel);
        }
      };
      decel();
    } else {
      // Inércia vertical opcional
      // ... (mantém startMomentumScroll se desejar)
    }

    // reset page
    Object.assign(page, { initialX: null, initialY: null, firstAngle: null, firstCheck: false, dragY: null, startTime: null });
  }, []);

  // Adiciona/Remove listeners apenas uma vez
  useEffect(() => {
    refs.forEach((refWrapper, i) => {
      const el = refWrapper?.current;
      if (!el) return;
      const start = e => iniciarArraste(e, i);
      const move = e => aoMover(e, i);
      const end = e => finalizarArraste(e, i);
      el.addEventListener('touchstart', start, { passive: false });
      el.addEventListener('mousedown', start, { passive: false });
      el.addEventListener('touchmove', move, { passive: false });
      el.addEventListener('mousemove', move, { passive: false });
      el.addEventListener('touchend', end);
      el.addEventListener('mouseup', end);
      frameRefs.current[i] = null;
    });

    return () => {
      refs.forEach((refWrapper, i) => {
        const el = refWrapper?.current;
        if (!el) return;
        // mesmo binding para remover
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
