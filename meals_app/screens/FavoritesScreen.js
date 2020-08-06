import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = props => {
    const favMeals = useSelector(state => state.meals.meals);
    if(favMeals.length === 0 || !favMeals){
        return (
            <View style={style.content}>
                <Text>No Favorites yet</Text>
            </View>
        )
    }

    return ( <MealList listData={favMeals} navigation={props.navigation}/> )
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

const style = StyleSheet.create({
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default FavoritesScreen;