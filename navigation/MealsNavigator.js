import React from 'react';
import { Platform } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Colors from '../constants/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import FavouriteScreen from '../screens/FavouritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import {Ionicons} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

const MealsNavigator=createStackNavigator({
    Categories:{
        screen:CategoriesScreen,
        navigationOptions:{
            headerStyle:{
                backgroundColor: Platform.OS==='android'? Colors.primaryColor :'white',
            },
            headerTintColor:Platform.OS==='android'?'white':Colors.primaryColor,
        },
    },
    CategoryMeals:{
        screen:CategoryMealsScreen,
        navigationOptions:{
            headerStyle:{
                backgroundColor: Platform.OS==='android'? Colors.primaryColor :'white',
            },
            headerTintColor:Platform.OS==='android'?'white':Colors.primaryColor,
        }
    },
    MealDetail:{
        screen:MealDetailScreen,
    },
    
},
{
    initialRouteName:'Categories',
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Platform.OS==='android'? Colors.primaryColor :'white',
        },
        headerTintColor:Platform.OS==='android'?'white':Colors.primaryColor,
    }
}
);

const tabScreenConfig={
    Meals:{screen: MealsNavigator, 
        navigationOptions:{
            tabBarIcon:(tabInfo)=>{
                return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor:Colors.primaryColor
    }},
    Favorites:{screen:FavouriteScreen,
        navigationOptions:{
            tabBarLabel:'Favorites!',
            tabBarIcon:tabInfo=>{
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor:Colors.accentColor
    }},
};

const MealsFavTabNavigator=Platform.OS==='android'
? createMaterialBottomTabNavigator(
    tabScreenConfig,
    {
        activeColor:'white',
        shifting:true,
    }
)
: createBottomTabNavigator(
    tabScreenConfig,
    {
        tabBarOptions:{
            activeTintColor:Colors.primaryColor,
        }
    }
);


export default createAppContainer(MealsFavTabNavigator);