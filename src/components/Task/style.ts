import { StyleSheet } from "react-native";



export const taskStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#262626",
    padding: 15,
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 10,
    marginBottom: 7,
  },
  checkBox: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 1000,
    width: 22,
    height: 22,
    backgroundColor: "transparent",
    borderColor: "#489acc",
  },
  checkBoxChecked: {
    backgroundColor: "#585abd",
    borderWidth: 0,
    width: 23,
    height: 23,
  },
  checkBoxIcon: {
    resizeMode: "contain",
    width: 10,
  },
  description: {
    paddingHorizontal: 8,
    textAlign: "center",
    flexWrap: "wrap",
    fontSize: 15,
    flex: 1,
  },
  deleteIcon: {
    resizeMode: "contain",
    width: 15,
  }
}) 