import React, { createContext, useRef } from 'react';

export const SharedStateContext = createContext(null);

export const SharedStateProvider = ({ children }) => {
  const sharedVars = {
    initialY: useRef(null),
    initialX: useRef(null),
    diffX: useRef(null),
    diffY: useRef(null),
    firstAngle: useRef(null),
    firstDiffX: useRef(null),
    firstDiffY: useRef(null),
    dragY: useRef(null),
    tempoDecorrido: useRef(0),
    startTime: useRef(null),
    speed: useRef(0),
    deltaY: useRef(null),
    minSpeed: 0.7,
    maxSpeed: 2.0,
    limiar: 4,
    arrastando2: useRef(false),
  };

  return (
    <SharedStateContext.Provider value={sharedVars}>
      {children}
    </SharedStateContext.Provider>
  );
};
