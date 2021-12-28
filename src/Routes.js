import { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { AuthContext } from './contexts/AuthProvider'

import Home from './screens/Home'
import Calendario from './screens/Calendario'

import Login from './screens/Login'

const Tab = createBottomTabNavigator()

export default function Routes() {
  const { auth } = useContext(AuthContext)
  
  if (auth) {
    return (
      <NavigationContainer>
  
        <Tab.Navigator>
          
          <Tab.Screen name='Home' component={Home}/>
          <Tab.Screen name='Calendario' component={Calendario}/>
          
        </Tab.Navigator>
  
      </NavigationContainer>
    )
  }
  
  // não logado
  return <Login />
}
