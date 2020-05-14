import { atom } from 'recoil';

export const counterState = atom({
  key: 'counterState',
  default: 0
});

export const currentComponent = atom({
  key: 'currentComponent',
  default: null
});

export const pageProps = atom({
  key: 'pageProps',
  default: {}
});
