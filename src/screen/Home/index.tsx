import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Task } from "../../components/Task";
import { homeStyle } from "./style";


export function Home() {
  const [addTaskInputFocus, setAddTaskInputFocus] = useState(false)

  return (
    <>
      <View style={homeStyle.logoContainer}>
        <Image style={homeStyle.logoIMG} source={require("../../assets/Logo.png")} />
      </View>
      <View style={homeStyle.container}>

        <View style={homeStyle.addTaskContainer}>
          <TextInput
            style={{ ...homeStyle.addTaskInput, borderColor: addTaskInputFocus ? "#5e60ce" : "#000" }}
            onFocus={() => setAddTaskInputFocus(true)}
            onBlur={() => setAddTaskInputFocus(false)}
            placeholder={"Adicione uma nova tarefa"}
            placeholderTextColor={"#5d5d5d"}
          />
          <TouchableOpacity style={homeStyle.addTaskButton}>
            <Image style={homeStyle.addTaskButtonIcon} source={require("../../assets/plus.png")} />
          </TouchableOpacity>
        </View>
        <View style={homeStyle.totalizers}>
          <View style={{ flexDirection: "row" }}>
            <Text style={homeStyle.totalizersText}>Craidos</Text>
            <Text style={homeStyle.totalizersValue}>0</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={homeStyle.totalizersText}>Concluidas</Text>
            <Text style={homeStyle.totalizersValue}>0</Text>
          </View>
        </View>

        <View style={homeStyle.separator} />

        <Task />
        <Task />
        <Task />

      </View>
    </>
  )
}