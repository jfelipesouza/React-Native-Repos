import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Main from '../main';




const {Navigator,Screen} = createStackNavigator();

const Routes:React.FC = () =>{
  return(
    <NavigationContainer>
      <Navigator screenOptions={{headerShown:false}} >
        <Screen component = {Main} name='principal' />
      </Navigator>
    </NavigationContainer>
  )
}

export default Routes;
