import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { taskStyle } from "./style";

interface TaskProps {
  description: string
  onDelete: ()=> void,
  checked: boolean 
  onCheck: ()=> void 
}

export function Task(props: TaskProps) {

  return (
    <View style={taskStyle.container}>
      <TouchableOpacity
        style={props.checked ?
          {
            ...taskStyle.checkBox,
            ...taskStyle.checkBoxChecked
          } :
          taskStyle.checkBox
        }
        onPress={props.onCheck}
      >
        {
          props.checked ?
            <Image style={taskStyle.checkBoxIcon} source={require('../../assets/check.png')} />
            : ""
        }
      </TouchableOpacity>
      <Text
        style={{
          ...taskStyle.description, 
          textDecorationLine: props.checked ? "line-through" : "none",
          color: props.checked ? "#7f7f7f": "#fff"
        }}>
        {props.description}
      </Text>

      <TouchableOpacity
        onPress={props.onDelete}
      >
        <Image style={taskStyle.deleteIcon} source={require("../../assets/trashcan.png")} />
      </TouchableOpacity>
    </View>
  )
}