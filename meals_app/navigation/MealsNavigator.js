import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen, 
        },
        CategoryMeals: {
            screen: CategoryMealsScreen,
        },
        MealDetail: MealDetailScreen
    }, 
        {
        // initialRouteName:'Categories',
        defaultNavigationOptions: {
            headerTitle: 'Meal Categories',
            headerStyle: {
                backgroundColor:Platform.OS === 'android' ? Colors.primaryColor : 'orange'
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.accentColor
        } 
    }
);

export default createAppContainer(MealsNavigator);