import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const FavouriteScreen=props=>{
    return (
        <View style={styles.screen}>
            <Text>The FavouriteScreen!</Text>
        </View>
    )};
    
    
const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});

export default FavouriteScreen;