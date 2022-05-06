import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/Tasks';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask =(index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      {/* Today's Tasks*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>
          {/* THIS IS WHERE THE TASKS WILL GO!!! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              ) 
            })
          }
        </View>
      </View>

      {/* WRITE A TASK*/}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
       </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E9E9',
  },
  tasksWrapper: {
    paddingTop: 150,
    paddingHorizontal: 30
  },
  sectionTitle: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FAFAFA',
    borderRadius: 25,
    borderColor: '#A8A8A8',
    borderWidth: 1,
    width: 350,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#F2F2F2',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A8A8A8'
  },
  addText: {
    fontSize: 30,
    color: '#A8A8A8'
  }
});
