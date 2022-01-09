import { StyleSheet, Text, View } from "react-native";
import defaultStyles from "../../../assets/defaultStyles";

export default function TaskPopUpBox({tipo, text}) {
  return (
    <View style={styles.containerB}>

        <Text style={styles.tittle}>{tipo}</Text>
        <View style={styles.line}></View>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.botLine}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerB: {
    width: "100%",
    // marginLeft:'2.5%',
    paddingHorizontal:10,
    borderRadius:10,
  },

  tittle: {
    fontSize: 24,
    fontWeight: "bold",
    color: defaultStyles.mainColor,
  },
  line: {
    width: 50,
    height: 2,


    backgroundColor: defaultStyles.mainColor,
  },
  text:{
    fontSize:16,
    color:'gray'
  },
  botLine:{
    width: '100%',
    height: 1,
    marginVertical:5,
    backgroundColor: '#ccc'

  }
});
