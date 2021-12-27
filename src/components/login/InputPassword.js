import { View, TouchableOpacity, Image, TextInput, StyleSheet} from 'react-native';
import { useState } from 'react';

//images
import eyeHide from '../../assets/images/hide.png';
import eyeView from '../../assets/images/show.png';
//main
import defaultStyles from '../../assets/defaultStyles';

export default function InputPassword() {
  const [ currentEye, setCurrentEye ] = useState(eyeHide);
  const [ secureTextEntry, setSecureTextEntry ] = useState(true);

  function handleChangePasswordVisibility() {
    if (currentEye == eyeView) {
      setSecureTextEntry(true);
      setCurrentEye(eyeHide); 
    }
    else{
      setSecureTextEntry(false);
      setCurrentEye(eyeView);       
    }
  };
  
  return(
    <View style={styles.inputPasswordContainer}>
      <TouchableOpacity style={[styles.showHidePassword]} onPress={handleChangePasswordVisibility}>
        <Image style={styles.eye} source={currentEye} />
      </TouchableOpacity>
      <TextInput secureTextEntry={secureTextEntry} style={styles.input} placeholder='Senha'/>
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    width:'100%',
    height:60,
    borderWidth:1,
    borderColor:defaultStyles.mainColor,
    borderRadius:30,
    paddingLeft:10,
    lineHeight:20,
    fontSize:18,
    marginTop:10,
    color:defaultStyles.mainColor,
  },
  inputPasswordContainer:{
    width:'100%',
    
    position:'relative',
  },
  showHidePassword:{
    width:32,
    height:32,
    position:'absolute',
    right:15,
    top:25,
    zIndex:10,
  },
  eye:{
    width:'100%',
    height:'100%',
    color:defaultStyles.mainColor,
  }
})