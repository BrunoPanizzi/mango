import { StyleSheet } from 'react-native'

import Auth from './auth';

import Routes from './src/Routes';
import Login from './src/screens/Login';

export default function App() {

  const auth = Auth;
  if(Auth){
    return (
      <Routes />
    )
  }else{
    return <Login/>
  }
}

const styles = StyleSheet.create({})

