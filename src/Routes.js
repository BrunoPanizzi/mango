import { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { AuthContext } from './contexts/AuthProvider'

import Home from './screens/Home'
import Calendario from './screens/Calendario'

import Login from './screens/Login'
import Header from './components/Header'

const Tab = createBottomTabNavigator();

function LoggedRoutes() {
  return (
    <Tab.Navigator screenOptions={{header: Header}} >
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Calendario' component={Calendario}/>
    </Tab.Navigator>
  )
}

export default function Routes() {
  const { auth } = useContext(AuthContext)

  return (
    <NavigationContainer>
      {auth
      ? <LoggedRoutes />
      : <Login />}
    </NavigationContainer>
  )
}
