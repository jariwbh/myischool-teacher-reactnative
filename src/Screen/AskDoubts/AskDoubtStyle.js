import React from 'react';
import { StyleSheet,Dimensions } from 'react-native';

const HEIGHT=Dimensions.get('window').height;
const WIDTH=Dimensions.get('window').width;

const styles = StyleSheet.create({
    imageBackground:{
        height:HEIGHT,
        width:WIDTH,
    },
    viewBackBody:{
        backgroundColor:'#ffffff',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        marginTop:100,
        height:HEIGHT, 
    },
    textBody:{
        marginLeft:35,
        marginTop:35,
        fontSize:15,
        color:'#A9A9A9',
        fontWeight:'bold',
    },
    sendRequestButton:{
        backgroundColor:"#6586C6",
        marginLeft:40,
        marginRight:40,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        borderRadius:10,
    },
    sendRequestButtonText:{
        fontSize:18,
        fontWeight:'bold',
        color:'#ffffff',       
    },
    bottomImage:{
        marginTop:40,
        height:150,
        width:WIDTH,
    },
});

export default styles;