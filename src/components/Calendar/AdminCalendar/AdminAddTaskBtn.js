import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import defaultStyles from "../../../assets/defaultStyles";

import AdminAddTaskPopUp from "./AdminAddTaskPopUp";

export default function AdminAddTaskBtn() {
  return (
    <>

      <TouchableOpacity style={styles.container}>
        <Text style={styles.btnText}>Adicionar Tarefa</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    textAlign: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },

  btnText: {
    color: defaultStyles.mainColor,
    fontWeight: "bold",
    fontSize: 18,
  },
});
