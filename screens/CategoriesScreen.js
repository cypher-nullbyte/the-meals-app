import React from 'react'
import { Button, FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CategoryGridTitle from '../components/CategoryGridTitle';
import Colors from '../constants/Colors';
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

CategoriesScreen.navigationOptions={
    headerTitle:"Meal Categories",
};

const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
});

export default CategoriesScreen;