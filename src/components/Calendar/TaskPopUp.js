import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

//components
import CardHeader from "../home/CardHeader";
import TaskPopUpBox from "./TaskPopUpBox";

//mock
import MockCalendarTask from "../../Mocks/MockCalendarTask";

console.log(MockCalendarTask);

export default function TaskPopUp() {

    return (
      <View style={styles.container}>
        <View style={styles.taskContainer}>
          <CardHeader tittle={"Tarefas para -Date-"} />

          <FlatList style={styles.boxesContainer}
            data={MockCalendarTask}
            renderItem={({ item }) => <TaskPopUpBox {...item} />}
            keyExtractor={({ id }) => String(id)}
          />
        </View>
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column-reverse",
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.356)",
    paddingHorizontal: "1.5%",
  },
  taskContainer: {
    bottom: 0,
    left: 0,
    width: "100%",
    maxHeight: "80%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "white",
  },
  boxesContainer: {
    width: "100%",
    padding: 10,
  },
});
