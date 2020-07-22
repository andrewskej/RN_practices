import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>MealDetail Screen</Text>
            <Button title="Go back to Categories" onPress={() => {
                props.navigation.popToTop();
            }}/>
        </View>
    )

};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default MealDetailScreen;