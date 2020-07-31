import React from 'react';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FavoritesScreen = props => {
    const favMeals = useSelector(state => state.meals.meals);
    
    return (
        <MealList listData={favMeals} navigation={props.navigation}/>
    )
};



FavoritesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Favorites page',
        headerLeft: ()=> (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName="ios-menu" onPress={() => {
                    navData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
        )
    }
}

export default FavoritesScreen;