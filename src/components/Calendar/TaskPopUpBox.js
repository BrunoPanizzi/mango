import { StyleSheet, Text, View } from "react-native";
import defaultStyles from "../../assets/defaultStyles";

export default function TaskPopUpBox({tittle, text}) {
  return (
    <View style={styles.container}>
      <View style={styles.tittleContainer}>
        <Text style={styles.tittle}>{tittle}</Text>
        <View style={styles.line}></View>
      </View>

      <View style={styles.descContainer}>
        <Text>
          {text}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    borderRadius:10,
    marginBottom:10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  tittleContainer: {

  },
  tittle: {
    fontSize: 24,
    fontWeight: "bold",
    color: defaultStyles.mainColor,
  },
  line: {
    width: 50,
    height: 2,

    marginVertical: 5,
    backgroundColor: defaultStyles.mainColor,
  },
  descContainer: {},
});
