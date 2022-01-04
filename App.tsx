import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/screens/routes';



const App: React.FC = () => {

  return(
    <>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'light-content'}
      />
      <Routes/>
    </>
  )
};

export default App;
