import { Platform } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Colors from '../constants/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import FavouriteScreen from '../screens/FavouritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

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

const MealsFavTabNavigator=createBottomTabNavigator({
    Meals:MealsNavigator,
    Favorites:FavouriteScreen,
});


export default createAppContainer(MealsFavTabNavigator);