import React, {useState} from 'react'
import { Platform, StyleSheet, Switch, Text, View } from 'react-native';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const FilterSwitch=props=>(
<View style={styles.filterContainer}>
    <Text>{props.label}</Text>
    <Switch value={props.state} onValueChange={props.onChange} 
        trackColor={{true:Colors.primaryColor,false:Colors.accentColor}}    
        thumbColor={Platform.OS==='android'? Colors.primaryColor :'white'}
    />
</View>
);


const FiltersScreen=props=>{
    const [isGluetenFree,setIsGlutenFree]=useState(false);
    const [isLactoseFree,setIsLactoseFree]=useState(false);
    const [isVegan,setIsVegan]=useState(false);
    const [isVegetarian,setIsVegetarian]=useState(false);
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters!</Text>
            <FilterSwitch label="Gluten-Free" state={isGluetenFree} 
                onChange={newValue=>setIsGlutenFree(newValue)} 
            />
            <FilterSwitch label="Lactose-Free" state={isLactoseFree} 
                onChange={newValue=>setIsLactoseFree(newValue)} 
            />
            <FilterSwitch label="Vegan" state={isVegan} 
                onChange={newValue=>setIsVegan(newValue)} 
            />
            <FilterSwitch label="Vegetarian" state={isVegetarian} 
                onChange={newValue=>setIsVegetarian(newValue)} 
            />
        </View>
    )};


FiltersScreen.navigationOptions=navData=>{
    return{
        headerTitle:'Filter Meals',
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
        alignItems:'center',
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:20,
        margin:20,
        textAlign:'center',
    },
    filterContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'60%',
        marginVertical:15,
    },
});

export default FiltersScreen;