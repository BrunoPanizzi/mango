import { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AuthContext } from './contexts/AuthProvider'

import Home from './screens/Home'
import Calendario from './screens/Calendario'
import HomeAdmin from './screens/HomeAdmin'
import Login from './screens/Login'
import Header from './components/Header'


const StudentTabs = createBottomTabNavigator();

function Class() {
  return (
    <StudentTabs.Navigator screenOptions={{header: Header}}>
      <StudentTabs.Screen
        name='Home'
        component={Home}
        options={{header: Header}}
      />
      <StudentTabs.Screen name='Calendario' component={Calendario}/>
    </StudentTabs.Navigator>
  )
}

const TeacherStack = createNativeStackNavigator()

function TeacherRoutes() {
  return (
    <TeacherStack.Navigator >
      <TeacherStack.Screen name='Home' component={HomeAdmin} options={{header: Header}}/>
      <TeacherStack.Screen name='Class' component={Class} options={{headerShown: false}} />
    </TeacherStack.Navigator>
  )
}

export default function Routes() {
  const { auth } = useContext(AuthContext)

  return (
    <NavigationContainer>
      {auth === 'teacher'
        ? <TeacherRoutes />
        : auth === 'student'
        ? <Class />
        : <Login />
      }
    </NavigationContainer>
  )
}
