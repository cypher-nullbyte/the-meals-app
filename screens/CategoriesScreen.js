import React from 'react'
import { Button, FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../constants/Colors';
import { CATEGORIES } from '../data/dummy-data';


const CategoriesScreen=props=>{

    const renderGridItem=itemData=>{
        return (
            <TouchableOpacity style={styles.gridItem} 
                onPress={()=>{props.navigation.navigate({routeName:'CategoryMeals', params:{
                    categoryId:itemData.item.id,
                }});}}>
                <View >
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        );
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
    headerStyle:{
        backgroundColor: Platform.OS==='android'? Colors.primaryColor :'white',
    },
    headerTintColor:Platform.OS==='android'?'white':Colors.primaryColor,
};

const styles = StyleSheet.create({
  gridItem:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    margin:15,
    height:150,
  },
});

export default CategoriesScreen;