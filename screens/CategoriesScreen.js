import React from 'react'
import {FlatList, StyleSheet, } from 'react-native';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import CategoryGridTitle from '../components/CategoryGridTitle';
import CustomHeaderButton from '../components/HeaderButton';
import { CATEGORIES } from '../data/dummy-data';


const CategoriesScreen=props=>{

    const renderGridItem=itemData=>{
        return <CategoryGridTitle 
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={()=>{props.navigation.navigate({routeName:'CategoryMeals', 
                params:{categoryId:itemData.item.id,
            }});
            }}/>
    };    
    return (
    <FlatList data={CATEGORIES} 
        renderItem={renderGridItem} 
        numColumns={2} 
        keyExtractor={(item,index)=>item.id} />
    );
};

CategoriesScreen.navigationOptions=navData=>{
    return{
    headerTitle:"Meal Categories",
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

const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
});

export default CategoriesScreen;