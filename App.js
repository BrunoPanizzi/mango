import { StyleSheet } from 'react-native'

import Routes from './src/Routes';
import Login from './src/screens/Login';

export default function App() {

  function penis(data) {
    return true;
  }
  const auth = penis()
  if(auth){
    return (
      <Routes />
    )
  }else{
    return <Login/>
  }
}

const styles = StyleSheet.create({})

