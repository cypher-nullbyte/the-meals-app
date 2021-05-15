import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';

const MealDetailScreen=props=>{
    const mealId=props.navigation.getParam('mealId');
    const selectedMeal=MEALS.find(meal=>meal.id===mealId);
    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title="Go Back to Categories!" onPress={()=>{props.navigation.popToTop();}}/>
        </View>
    )};
MealDetailScreen.navigationOptions=(naviationData)=>{
    const mealId=naviationData.navigation.getParam('mealId');
    const selectedMeal=MEALS.find(meal=>meal.id===mealId);
    return{
        headerTitle:selectedMeal.title,
        headerRight:()=>{
            return (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Fav" iconName='ios-star' onPress={()=>{console.log("FAV ADDED")}}/>
            </HeaderButtons>
            );
        }
      };
};
    
const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});

export default MealDetailScreen;