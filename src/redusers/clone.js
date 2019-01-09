const initialState = {
  avatar: '',
  days: '',
  final: '',
  health: '',
  motivation: '',
  name: '',
  trend: '',
};

export default function cloneData(state = initialState, action) {
  switch (action.type) {
    case 'CLONE_INSERT_DATA':
      return {
        ...state,
        key: action.payload.key,
        avatar: action.payload.avatar,
        days: action.payload.days,
        final: action.payload.final,
        health: action.payload.health,
        motivation: action.payload.motivation,
        name: action.payload.name,
        trend: action.payload.trend,
      };
    case 'CLONE_UPDATE_HEALTH':
      return {
        ...state,
        health: action.payload,
      };
    default:
      return state;
  }
}
