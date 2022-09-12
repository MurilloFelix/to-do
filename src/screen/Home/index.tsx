import { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Task } from "../../components/Task";
import { homeStyle } from "./style";

interface TaskStatus {
  id: number,
  description: string,
  checked: boolean
}

export function Home() {
  const [addTaskInputFocus, setAddTaskInputFocus] = useState(false)
  const [addTaskInputValue, setAddTaskInputValue] = useState('')
  const [taskList, setTaskList] = useState<TaskStatus[]>([])

  function checkTask(taskId: number) {
    setTaskList(currentTasks => (
      currentTasks.map(currentTasks => {
        if (currentTasks.id === taskId) {
          return {
            id: currentTasks.id,
            description: currentTasks.description,
            checked: !currentTasks.checked
          }
        }
        return currentTasks
      })
    ))

  }

  function addTask() {
    if (!addTaskInputValue) {
      return;
    }
    setTaskList(currentTasks => [...currentTasks, { id: (taskList[taskList.length - 1]?.id || 0) + 1, description: addTaskInputValue, checked: false }])
    setAddTaskInputValue('')
  }

  function deleteTask(taskId: number) {
    Alert.alert('Excluir?', 'Deseja excluir essa tarefa', [
      {
        text: "Não"
      },
      {
        text: "Sim",
        onPress: () => setTaskList(currentTasks => currentTasks.filter(currentTask => (currentTask.id != taskId)))
      },
    ])

  }

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
            onChangeText={setAddTaskInputValue}
            value={addTaskInputValue}
          />
          <TouchableOpacity
            style={homeStyle.addTaskButton}
            onPress={addTask}
          >
            <Image style={homeStyle.addTaskButtonIcon} source={require("../../assets/plus.png")} />
          </TouchableOpacity>
        </View>
        <View style={homeStyle.totalizers}>
          <View style={{ flexDirection: "row" }}>
            <Text style={homeStyle.totalizersText}>Craidos</Text>
            <Text style={homeStyle.totalizersValue}>{taskList.length}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={homeStyle.totalizersText}>Concluidas</Text>
            <Text style={homeStyle.totalizersValue}>{taskList.filter(task => task.checked).length}</Text>
          </View>
        </View>

        {taskList.length ?
          ''
          :
          <View style={homeStyle.separator} />
        }

        <FlatList
          data={taskList}
          keyExtractor={(_task, index) => (index + "")}
          ListEmptyComponent={()=>(
            <View style={homeStyle.emptyTaskListComponent}>
              <Image style={homeStyle.emptyTaskListIco} source={require("../../assets/clipboard.png")}/>
              <Text style={{...homeStyle.emptyTaskListText, fontWeight: 'bold'}}>Você ainda não tem tarefas cadastradas</Text>
              <Text style={homeStyle.emptyTaskListText}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
          )}
          renderItem={({ item }) => (
            <Task
              checked={item.checked}
              onCheck={() => checkTask(item.id)}
              description={item.description}
              onDelete={() => deleteTask(item.id)}
            />
          )}
        />

      </View>
    </>
  )
}