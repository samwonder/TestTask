import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
// import Feed from './components/Feed';
import store from './src/redux/store';


// import {mockFeeds} from './mockData';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
