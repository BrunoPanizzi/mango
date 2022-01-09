import { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Button, View } from 'react-native'

import { AuthContext } from './contexts/AuthProvider'

import Home from './screens/Home'
import Calendario from './screens/Calendario'
import HomeAdmin from './screens/HomeAdmin'

import Login from './screens/Login'
import Header from './components/Header'


const Tab = createBottomTabNavigator();

function LoggedRoutes() {

    return (
      <>

        <Tab.Navigator
          tabBarPosition='bottom'
        >
          <Tab.Screen
            name='Home'
            component={HomeAdmin}
            options={{
              header: () => (
                <Header/>
              ),

            }}
            />
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
