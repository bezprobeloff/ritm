import React from 'react';

interface ILineContext {
  scrollPosition: number;
}

const defaultState = {
  scrollPosition: 0
};

export const LineContext = React.createContext<ILineContext>(defaultState);
