import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';
import CustomHeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
const FavouriteScreen=props=>{
    const favMeals=useSelector(state=>state.meals.favoriteMeals);
    if(favMeals.length===0 || !favMeals)
    {
        return <View style={styles.content}>
            <DefaultText>No Fav Meals Found!</DefaultText>
        </View>
    }
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

const styles=StyleSheet.create({
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});
export default FavouriteScreen;