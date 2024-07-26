// redux/reducer/feedReducer.js
const initialState = {
  feeds: [],
  profileFeeds: [],
};

const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FEEDS':
      return {
        ...state,
        feeds: action.payload,
      };
    case 'SET_PROFILE_FEEDS':
      return {
        ...state,
        profileFeeds: action.payload,
      };
    default:
      return state;
  }
};

export default feedReducer;
