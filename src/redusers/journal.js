const initialState = {
  today: {
    date: '',
    sigarets: '',
    key: '',
  },
  yesterday: {
    date: '',
    sigarets: '',
    key: '',
  },
  before: {
    date: '',
    sigarets: '',
    key: '',
  },
};

export default function journalData(state = initialState, action) {
  switch (action.type) {
    case 'JOURNAL_INSERT_TODAY':
      return {
        ...state,
        today: {
          date: action.payload[0],
          sigarets: action.payload[1],
          key: action.payload[2],
        },
      };
    case 'JOURNAL_INSERT_YESTERDAY':
      return {
        ...state,
        yesterday: {
          date: action.payload[0],
          sigarets: action.payload[1],
          key: action.payload[2],
        },
      };
    case 'JOURNAL_INSERT_BEFORE':
      return {
        ...state,
        before: {
          date: action.payload[0],
          sigarets: action.payload[1],
          key: action.payload[2],
        },
      };
    case 'JOURNAL_INSERT_ALL':
      return {
        ...state,
        today: {
          date: action.payload[0][0],
          sigarets: action.payload[0][1],
          key: action.payload[0][2],
        },
        yesterday: {
          date: action.payload[1][0],
          sigarets: action.payload[1][1],
          key: action.payload[1][2],
        },
        before: {
          date: action.payload[2][0],
          sigarets: action.payload[2][1],
          key: action.payload[2][2],
        },
      };
    default:
      return state;
  }
}
