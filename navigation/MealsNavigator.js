import React from 'react';
import { Platform } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Colors from '../constants/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import FavouriteScreen from '../screens/FavouritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import {Ionicons} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import FiltersScreen from '../screens/FiltersScreen';


const defaultStackNavOptions={
    headerStyle:{
        backgroundColor: Platform.OS==='android'? Colors.primaryColor :'white',
    },
    headerTitleStyle:{
        fontFamily:'open-sans-bold',
    },
    headerBackTitleStyle:{
        fontFamily:'open-sans',
    },
    headerTintColor:Platform.OS==='android'?'white':Colors.primaryColor,
    headerTitle:'A Screen',
    
};

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
    defaultNavigationOptions:defaultStackNavOptions,
}
);

const FavNavigator=createStackNavigator({
    Favorites:FavouriteScreen,
    MealDetail:MealDetailScreen,
},
{
    initialRouteName:'Favorites',
    defaultNavigationOptions:defaultStackNavOptions,
});


const tabScreenConfig={
    Meals:{screen: MealsNavigator, 
        navigationOptions:{
            tabBarIcon:(tabInfo)=>{
                return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor:Colors.primaryColor
    }},
    Favorites:{screen:FavNavigator,
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
        initialRouteName:'Meals',
    }
)
: createBottomTabNavigator(
    tabScreenConfig,
    {
        tabBarOptions:{
            labelStyle:{
                fontFamily:'open-sans-bold'
            },
            activeTintColor:Colors.primaryColor,
        },
        initialRouteName:'Meals',
    }
);

const FiltersNavigator=createStackNavigator({
    Filters:FiltersScreen
},
{
    navigationOptions:{
        drawerLabel:'Filters!'
    },
    initialRouteName:'Filters',
    defaultNavigationOptions:defaultStackNavOptions,
});

const MainNavigator=createDrawerNavigator({
    MealsFavs:{screen:MealsFavTabNavigator,navigationOptions:{
        drawerLabel:'Meals!',
    }},
    Filters:FiltersNavigator,
},
{
    contentOptions:{
        activeTintColor:Colors.accentColor,
        labelStyle:{
            fontFamily:'open-sans-bold'
        },
        itemStyle:{
            marginTop:30
        },
    },
    initialRouteName:'MealsFavs',
});

export default createAppContainer(MainNavigator);