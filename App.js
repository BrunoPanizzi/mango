import { StyleSheet } from 'react-native'

import AuthProvider from './src/contexts/AuthProvider';

import Routes from './src/Routes';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

const styles = StyleSheet.create({})

