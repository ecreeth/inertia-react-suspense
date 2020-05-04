export const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    case 'SET_PAGE':
      return { ...state, component: action.component, ...action.props };
    default:
      throw new Error();
  }
};

export const initialState = {
  component: null,
  counter: 0,
  dispatch: action => {}
};
