import React from 'react';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import {MEALS} from '../data/dummy-data';
const FavouriteScreen=props=>{
    const favMeals=MEALS.filter(meal=>meal.id==='m1'|| meal.id==='m2');

    return (
        <MealList listData={favMeals} navigation={props.navigation}/>
    )};
   
FavouriteScreen.navigationOptions=navData=>{
    return{
        headerTitle:'Your Favorites',
    headerLeft:()=>{
        return (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Menu" iconName='ios-menu' onPress={()=>{
                    navData.navigation.toggleDrawer();
                }}/>
            </HeaderButtons>
            );
    }}
};    

export default FavouriteScreen;