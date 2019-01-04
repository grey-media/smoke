const initialState = {
  id: '',
  name: '',
  health: '',
};

export default function cloneData(state = initialState, action) {
  if (action.type === 'SELECT_ID') {
    return {
      ...state,
      id: action.payload,
    };
  }
  return state;
}
