import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './screens/Home'

import Calendario from './screens/Calendario'

const Tab = createBottomTabNavigator()

export default function Routes() {

  return (
    <NavigationContainer>

      <Tab.Navigator>
        
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Calendario' component={Calendario}/>
        
      </Tab.Navigator>

    </NavigationContainer>
  )
}
