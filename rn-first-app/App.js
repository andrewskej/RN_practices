import React, {useState} from 'react';
import { View, Button, Text, StyleSheet, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (enteredVal) => {
    setCourseGoals(currentGoals => 
      [...currentGoals, 
        { id: Math.random().toString(), value: enteredVal }
      ]);
      setIsAddMode(false);
  }

  const removeGoalhandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    })
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false)
}

  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={()=> setIsAddMode(true)}/>
      <GoalInput 
        visible={isAddMode} 
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />

      <FlatList 
        keyExtracotr={(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemData => 
          <GoalItem title={itemData.item.value} id={itemData.item.id} onDelete={removeGoalhandler}/>
      }/>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
})