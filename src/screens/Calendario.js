import { Text } from "react-native";

import Calendar from '../components/Calendar/index';
import TaskPopUp from '../components/Calendar/TaskPopUp';
import AdminPopUp from '../components/Calendar/AdminCalendar/AdminPopUp';
import AdminAddTaskPopUp from "../components/Calendar/AdminCalendar/AdminAddTaskPopUp";



export default function Calendario() {


    return(
        <>
          <Calendar/>
          {/* <TaskPopUp/> */}
          <AdminPopUp/>
          <AdminAddTaskPopUp/>
        </>
    )
}
