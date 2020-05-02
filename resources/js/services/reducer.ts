export const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    case 'SET_PAGE':
      Object.assign(state.page, action.page);
      return { ...state };
    default:
      throw new Error();
  }
};

export const initialState = {
  page: {
    component: null,
    key: null,
    props: {}
  },
  counter: 0,
  dispatch: action => {}
};
