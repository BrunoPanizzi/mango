import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './screens/Home'
import Login from './screens/Login'

const Tab = createBottomTabNavigator()

export default function Routes() {

  return (
    <NavigationContainer>

      <Tab.Navigator>
        <Tab.Screen name='Login' component={Login}/>
        <Tab.Screen name='Home' component={Home}/>
      </Tab.Navigator>

    </NavigationContainer>
  )
}
