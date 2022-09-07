import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { taskStyle } from "./style";


export function Task() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <View style={taskStyle.container}>
      <TouchableOpacity
        style={isChecked ?
          {
            ...taskStyle.checkBox,
            ...taskStyle.checkBoxChecked
          }:
          taskStyle.checkBox
        }
        onPress={() => setIsChecked(value => !value)}
      >
        {
          isChecked ?
            <Image style={taskStyle.checkBoxIcon} source={require('../../assets/check.png')} />
            : ""
        }
      </TouchableOpacity>
      <Text style={taskStyle.description}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </Text>

      <TouchableOpacity style={taskStyle.deleteButton}>
        <Image style={taskStyle.deleteIcon} source={require("../../assets/trashcan.png")} />
      </TouchableOpacity>
    </View>
  )
}