import { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { AuthContext } from './contexts/AuthProvider'

import Home from './screens/Home'
import Calendario from './screens/Calendario'

import Login from './screens/Login'
import Header from './components/Header'

const Tab = createMaterialTopTabNavigator()

function LoggedRoutes() {
  return ( 
    <>
      <Header />
      <Tab.Navigator
        tabBarPosition='bottom'
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Calendario' component={Calendario}/>
      </Tab.Navigator>
    </>
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
