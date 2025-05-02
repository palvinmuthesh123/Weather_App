import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import HomeScreen from './src/screens/Home/HomeScreen';
import { ThemeProvider } from './src/context/ThemeContext';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <HomeScreen />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
