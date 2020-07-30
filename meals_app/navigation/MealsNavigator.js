import React from 'react';
import { Platform, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import { createAppContainer, createStackNavigator, createDrawerNavigator, createBottomTabNavigator, createMaterialBottomTabNavigator } from 'react-navigation';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';


const defaultStackNavOptions = {
    // headerTitle: 'Home',
    headerStyle: {
        backgroundColor:Platform.OS === 'android' ? Colors.primaryColor : 'orange'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.accentColor
}

const MealsNavigator = createStackNavigator({
        Categories: { screen: CategoriesScreen },
        CategoryMeals: { screen: CategoryMealsScreen },
        MealDetail: MealDetailScreen
    }, { 
    defaultNavigationOptions: defaultStackNavOptions 
    }
);


const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
    }, 
    {
    defaultNavigationOptions: defaultStackNavOptions
    }
)

const tabScreenConfig = {
    Meals: {screen:MealsNavigator, navigationOptions:{
        tabBarIcon: (tabInfo) => { 
            return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />;
        },
        tabBarColor: Colors.primaryColor,
        tabBarLabel: <Text>Meals</Text>
    }},
    Favorites: {screen: FavNavigator, navigationOptions:{
        tabBarIcon: (tabInfo) => { 
            return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
        },
        tabBarColor: Colors.accentColor    
    }}
}


const MealsFavTabNavigator = Platform.OS === 'android' 
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: 'white',
        shifting: true
    })
    : createBottomTabNavigator(tabScreenConfig , {
        tabBarOptions: {
            activeTintColor:Colors.accentColor
        }
});

const FiltersNavigator = createStackNavigator({
    Filters:FiltersScreen
},     
{
    navigationOptions: {
        drawerLabel: 'Filters'
    },
    defaultNavigationOptions: defaultStackNavOptions
});

const MainNavigator = createDrawerNavigator({
    MealsFavs: {screen:MealsFavTabNavigator, navigationOptions: {
        drawerLabel: 'Meals'
    }},
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
    }
});


export default createAppContainer(MainNavigator); 