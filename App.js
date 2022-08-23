import * as React from 'react';
import LoginScreen from './screens/LoginScreen';
import DrawerNavigator from './navigation/DrawerNavigator';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native'


export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <AppContainer />


      </NavigationContainer>
    )
  }
}

const SwitchNavigator = createSwitchNavigator({
  Login: {
    screen: LoginScreen
  },
  Drawer: {
    screen: DrawerNavigator
  }
},
  {
    initialRouteName: "Login"
  }
)


const AppContainer = createAppContainer(SwitchNavigator);