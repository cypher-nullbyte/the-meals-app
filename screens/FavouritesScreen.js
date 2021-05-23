import React from 'react';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import CustomHeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
const FavouriteScreen=props=>{
    const favMeals=useSelector(state=>state.meals.favoriteMeals);
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