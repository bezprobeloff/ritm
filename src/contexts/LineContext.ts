import React from 'react';

interface ILineContext {
  scrollPosition: number;
}

const defaultState = {
  scrollPosition: 0
};

const LineContext = React.createContext<ILineContext>(defaultState);

export default LineContext;
