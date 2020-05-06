import { createContext, useContext } from 'react';
import { initialState } from './reducer';

const PageContext = createContext(initialState);

export const PageProvider = PageContext.Provider;

export function usePageContext() {
  return useContext(PageContext);
}

PageContext.displayName = 'PageContext';
