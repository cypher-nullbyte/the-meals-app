import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';

const FiltersScreen=props=>{
    return (
        <View style={styles.screen}>
            <Text>The FilterScreen!</Text>
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
        justifyContent:'center',
        alignItems:'center',
    }
});

export default FiltersScreen;