const initialState = {
  message: '',
};

export default function appData(state = initialState, action) {
  switch (action.type) {
    case 'DATA_UPDATE_MESSAGE':
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
}
