const initialState = {
  uid: '',
  email: '',
  name: '',
  gender: '',
  sigarets: '',
};

export default function userData(state = initialState, action) {
  switch (action.type) {
    case 'USER_INSERT_DATA':
      return {
        ...state,
        uid: action.payload.uid,
        email: action.payload.email,
        name: action.payload.name,
        gender: action.payload.gender,
        sigarets: action.payload.sigarets,
      };
    case 'USER_UPDATE_UID':
      return {
        ...state,
        uid: action.payload,
      };
    case 'USER_UPDATE_GENDER':
      return {
        ...state,
        gender: action.payload,
      };
    case 'USER_UPDATE_SIGARETS':
      return {
        ...state,
        sigarets: action.payload,
      };
    case 'USER_UPDATE_MAIL':
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
}
