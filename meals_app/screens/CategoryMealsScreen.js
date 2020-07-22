import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';


const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId'); //important!

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return (
        <View style={styles.screen}>
            <Text>CategoryMeal Screen !</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to Details" onPress={() => {
                props.navigation.navigate({
                    routeName:'MealDetail'
                });
            }} />
            <Button title="Go Back" onPress={() => {
                props.navigation.pop();
            }}/>
        </View>
    )

};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    
    return {
        headerTitle: selectedCategory.title,
    }
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default CategoryMealsScreen;