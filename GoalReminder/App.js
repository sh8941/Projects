import { useState } from 'react';
import { StyleSheet, View, FlatList, Button,StatusBar } from 'react-native';
import GoalItem from './components/GoalItem';
import InputComponent from './components/InputComponent';

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  function startGoalHandler() {
    setModalVisible(true);
  }
  function endGoalHandler() {
    setModalVisible(false);
  }
  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.length != 0)
      setCourseGoal([...courseGoal, { Text: enteredGoalText, id: Math.random().toString() }]);
    setModalVisible(false);
  }
  function deleteHandelor(id) {
    setCourseGoal((courseGoal) => { return courseGoal.filter((goal) => goal.id != id); })
  }
  return (
  <>
    <StatusBar/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' onPress={startGoalHandler} />
      <InputComponent onAddGoal={addGoalHandler} onCancel={endGoalHandler} visible={isModalVisible} />
      <View style={styles.goalArea}>
        <FlatList
          data={courseGoal} renderItem={(itemData) => {
            return (
              <GoalItem
                task={itemData.item.Text}
                onDeleteItem={deleteHandelor}
                id={itemData.item.id}
              />);
          }}
          keyExtractor={(item, index) => { return item.id; }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 10,
    marginTop: 30
  },
  goalArea: {
    flex: 3,
    padding: 5,
    flexDirection: "column",
    margin: 5,
    overflow: "scroll"
  },
  textInputBox: {
    width: "70%",
    borderWidth: 1,
    padding: 2,
  },
  goalItem: {
    backgroundColor: "#5D3FD3",
    color: "#fff",
    width: "100%",
    height: 40,
    borderRadius: 15,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  itemText: {
    color: "#fff",
  },
  itemFlatList: {

  }
});
