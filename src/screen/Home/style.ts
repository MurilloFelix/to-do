import { Platform, StatusBar, StyleSheet } from "react-native";



export const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 30
  },
  logoContainer: {
    height: 150,
    backgroundColor: "#0d0d0d",
    justifyContent: "center",
    alignItems: "center"
  },
  logoIMG:{
    resizeMode: "contain",
    width: 120,
  },
  addTaskContainer: {
    marginTop: -25,
    flexDirection: "row",
  },
  addTaskInput: {
    color: "#fff",
    backgroundColor: "#262626",
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    marginRight: 5
  },
  addTaskButton:{
    backgroundColor: "#1e6f9f",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 50,
    height: 50,
  },
  addTaskButtonIcon:{
    resizeMode: "contain",
    width: 18,
  },
  totalizers:{
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 25,
    alignItems: "center"
  },
  totalizersText:{
    color: "#8284fa",
    marginRight: 10,
    fontSize: 14,
    fontWeight: "bold"
  },
  totalizersValue:{
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 100,
    color: "#fff",
    backgroundColor: "#333333",
    fontWeight: "bold"
  },
  separator:{
    height: 1,
    marginBottom: 25,
    backgroundColor: "#333333"
  }
})