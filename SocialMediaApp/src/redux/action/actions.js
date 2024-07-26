// redux/action/actions.js
export const setFeeds = (feeds) => ({
  type: 'SET_FEEDS',
  payload: feeds,
});

export const setProfileFeeds = (feeds) => ({
  type: 'SET_PROFILE_FEEDS',
  payload: feeds,
});