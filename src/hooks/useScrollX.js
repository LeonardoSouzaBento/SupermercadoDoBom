import { useEffect, useContext, useRef, useCallback } from "react";
import { HomeDivsContext } from "@contexts/HomeDivsContext";

export function useScrollX() {
  const {
    advertisementsRef,
    categoriesRef,
    productListHomeRef,
    limitAdvertisements,
    limitCategories,
    limitProductList,
    isDraggingRef,
    pointerPositionRef,
  } = useContext(HomeDivsContext);

  const refs = [advertisementsRef, categoriesRef, productListHomeRef];

  const variablesRef = useRef(
    refs.map(() => ({
      arrastando: false,
      toc_ini: 0,
      time_touch: 0,
      velocidade: 0,
      animacao: null,
    }))
  );

  const limitsScrollRefs = [
    useRef(limitAdvertisements),
    useRef(limitCategories),
    useRef(limitProductList),
  ];

  useEffect(() => {
    limitsScrollRefs[0].current = limitAdvertisements;
    limitsScrollRefs[1].current = limitCategories;
    limitsScrollRefs[2].current = limitProductList;
  }, [
    limitAdvertisements,
    limitCategories,
    limitProductList,
    limitsScrollRefs,
  ]);

  const handlePointerDown = useCallback((e) => {
    isDraggingRef.current = false;
    pointerPositionRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handlePointerMove = useCallback((e) => {
    if (!pointerPositionRef.current) return;
    const deltaX = Math.abs(e.clientX - pointerPositionRef.current.x);
    const deltaY = Math.abs(e.clientY - pointerPositionRef.current.y);

    if (deltaX > 5 || deltaY > 5) {
      isDraggingRef.current = true;
    } else {
      isDraggingRef.current = false;
    }
  }, []);

  const iniciarArraste = useCallback((e, i) => {
    e.preventDefault();
    if (e.button !== 0) return;

    const variables = variablesRef.current[i];
    variables.arrastando = true;
    variables.toc_ini = e.clientX;
    variables.time_touch = Date.now();
    variables.arraste = 0;

    if (variables.animacao) {
      cancelAnimationFrame(variables.animacao);
      variables.animacao = null;
    }
  }, []);

  const aoMover = useCallback((e, i) => {
    e.preventDefault();
    const variables = variablesRef.current[i];
    if (!variables.arrastando) return;

    const now = Date.now();
    const dt = Math.max(1, now - variables.time_touch);
    const x = e.clientX;
    const deslocamento = (variables.toc_ini - x) * 0.7;
    const velocidade = deslocamento / dt;

    if (Math.abs(velocidade) > 1.4) {
      variables.velocidade = 1.4 * Math.sign(velocidade);
    }

    variables.time_touch = now;
    variables.toc_ini = x;

    const div = refs[i].current;
    let proximo = div.scrollLeft + deslocamento;

    if (proximo < 0) {
      proximo = 0;
      variables.velocidade = 0;
    } else if (proximo > -limitsScrollRefs[i].current) {
      proximo = -limitsScrollRefs[i].current;
      variables.velocidade = 0;
    }
    div.scrollLeft = proximo;
  }, []);

  const finalizarArraste = useCallback((e, i) => {
    const variables = variablesRef.current[i];
    if (!variables.arrastando) return;
    variables.arrastando = false;

    if (variables.animacao) {
      cancelAnimationFrame(variables.animacao);
    }

    const div = refs[i].current;

    const maxScroll = -limitsScrollRefs[i].current;

    const decel = () => {
      if (Math.abs(variables.velocidade) > 0.17) {
        variables.velocidade *= 0.95;
        let proximo = div.scrollLeft + variables.velocidade * 16;

        if (proximo < 0) {
          proximo = 0;
          variables.velocidade = 0;
        } else if (proximo > maxScroll) {
          proximo = maxScroll;
          variables.velocidade = 0;
        }

        div.scrollLeft = proximo;

        variables.animacao = requestAnimationFrame(decel);
      }
    };
    decel();
    variables.animacao = null;
  }, []);

  const listeners = useRef([]);

  useEffect(() => {
    refs.forEach((refWrapper, i) => {
      const el = refWrapper?.current;
      if (!el) return;

      // Mouse listeners
      const start = (e) => iniciarArraste(e, i);
      const move = (e) => aoMover(e, i);
      const end = (e) => finalizarArraste(e, i);

      el.addEventListener("mousedown", start, { passive: false });
      el.addEventListener("mousemove", move, { passive: false });
      el.addEventListener("mouseup", end);

      // Pointer listeners
      const pointerDown = (e) => handlePointerDown(e);
      const pointerMove = (e) => handlePointerMove(e);

      el.addEventListener("pointerdown", pointerDown);
      el.addEventListener("pointermove", pointerMove);

      // Salva tudo no listeners
      listeners.current[i] = {
        mouse: [start, move, end],
        pointer: [pointerDown, pointerMove],
      };
    });

    return () => {
      refs.forEach((refWrapper, i) => {
        const el = refWrapper?.current;
        const refListeners = listeners.current[i];
        if (!el || !refListeners) return;

        const [start, move, end] = refListeners.mouse || [];
        const [pointerDown, pointerMove] = refListeners.pointer || [];

        if (start) el.removeEventListener("mousedown", start);
        if (move) el.removeEventListener("mousemove", move);
        if (end) el.removeEventListener("mouseup", end);

        if (pointerDown) el.removeEventListener("pointerdown", pointerDown);
        if (pointerMove) el.removeEventListener("pointermove", pointerMove);
      });
    };
  }, []);
}
