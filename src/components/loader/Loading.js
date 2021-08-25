import React from 'react';
import { SafeAreaView,View,StyleSheet,ActivityIndicator } from 'react-native';

const Loading = () =>{
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <ActivityIndicator color='#FFFFFF' size='small'></ActivityIndicator>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    }
});

export default Loading;