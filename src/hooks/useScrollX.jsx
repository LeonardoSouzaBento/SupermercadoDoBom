import { useEffect, useContext, useRef, useCallback } from "react";
import { CartContext } from "../components/CartContext";

export function useScrollX() {
  const {
    advertisementsRef,
    categoriesRef,
    productListHomeRef,
    limitAdvertisements,
    limitCategories,
    limitProductList
  } = useContext(CartContext);

  const refs = [advertisementsRef, categoriesRef, productListHomeRef];

  const variablesRef = useRef(
    refs.map(() => ({
      arrastando: false,
      toc_ini: 0,
      time_touch: 0,
      velocidade: 0,
      animacao: null
    }))
  );

  const limitsScrollRefs = [
    useRef(limitAdvertisements),
    useRef(limitCategories),
    useRef(limitProductList)
  ];

  useEffect(() => {
    limitsScrollRefs[0].current = limitAdvertisements;
    limitsScrollRefs[1].current = limitCategories;
    limitsScrollRefs[2].current = limitProductList;
  }, [limitAdvertisements, limitCategories, limitProductList]);

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
    const deslocamento = (variables.toc_ini - x)*0.7;
    const velocidade = deslocamento / dt;

    if(Math.abs(velocidade) > 1.4){variables.velocidade = 1.4 * Math.sign(velocidade)}
    
    variables.time_touch = now;
    variables.toc_ini = x;
    
    const div = refs[i].current;
    let proximo = div.scrollLeft + deslocamento;
    const maxScroll = -limitsScrollRefs[i].current;

    if (proximo < 0) {
      proximo = 0;
      variables.velocidade = 0;
    } else if (proximo > maxScroll) {
      proximo = maxScroll;
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

  const listeners = useRef([[], [], []]);

  useEffect(() => {
    refs.forEach((refWrapper, i) => {
      const el = refWrapper?.current;
      if (!el) return;

      const start = e => iniciarArraste(e, i);
      const move = e => aoMover(e, i);
      const end = e => finalizarArraste(e, i);

      listeners.current[i] = [start, move, end];

      el.addEventListener('mousedown', start, { passive: false });
      el.addEventListener('mousemove', move, { passive: false });
      el.addEventListener('mouseup', end);
    });

    return () => {
      refs.forEach((refWrapper, i) => {
        const el = refWrapper?.current;
        if (!el || !listeners.current[i]) return;

        const [start, move, end] = listeners.current[i];
        el.removeEventListener('mousedown', start);
        el.removeEventListener('mousemove', move);
        el.removeEventListener('mouseup', end);
      });
    };
  }, []);
}
