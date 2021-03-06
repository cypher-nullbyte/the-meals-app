import React, { useCallback, useEffect } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../store/actions/meals';

const ListItem=props=>{
    return (
        <View style={styles.listItem}>
            <DefaultText style={{textAlign:'center'}}>{props.children}</DefaultText>
        </View>
    );
}

const MealDetailScreen=props=>{
    const mealId=props.navigation.getParam('mealId');
    const allMeals=useSelector(state=>state.meals.meals);
    const currentMealIsFav=useSelector(state=>state.meals.favoriteMeals.some(meal=>meal.id=mealId));
    const selectedMeal=allMeals.find(meal=>meal.id===mealId);
    
    const dispatch=useDispatch();
    const toggleFavoriteHandler=useCallback(()=>{
        dispatch(toggleFavorite(mealId));
    },[dispatch,mealId]);

    useEffect(()=>{
        // props.navigation.setParams({mealTitle:selectedMeal.title});
        props.navigation.setParams({toggleFav:toggleFavoriteHandler})
    },[toggleFavoriteHandler]);

    useEffect(()=>{
        props.navigation.setParams({isFav:currentMealIsFav})
    },[currentMealIsFav]);

    return (
        <ScrollView>
            <Image source={{uri:selectedMeal.imageUrl}} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient=><ListItem key={ingredient}>{ingredient}</ListItem>)}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step=><ListItem key={step}>{step}</ListItem>)}
        </ScrollView>
    )};

MealDetailScreen.navigationOptions=(naviationData)=>{
    // const mealId=naviationData.navigation.getParam('mealId');
    const mealTitle=naviationData.navigation.getParam('mealTitle');
    const toggleFavorite=naviationData.navigation.getParam('toggleFav');
    const isFavorite=naviationData.navigation.getParam('isFav');
    // const selectedMeal=MEALS.find(meal=>meal.id===mealId);
    return{
        headerTitle:mealTitle,
        headerRight:()=>{
            return (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Fav" iconName={isFavorite ?'ios-star' : 'ios-star-outline'} onPress={toggleFavorite
                }/>
            </HeaderButtons>
            );
        }
      };
};
    
const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:200,
    },
    details:{
        flexDirection:'row',
        padding:15,
        justifyContent:'space-around',
    },
    listItem:{
        marginVertical:10,
        marginHorizontal:20,
        borderColor:'#ccc',
        borderWidth:1,
        padding:10,
        
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:20,
        textAlign:'center'
    },
});

export default MealDetailScreen;