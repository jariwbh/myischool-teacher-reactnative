import React from 'react';
import { StyleSheet,Dimensions } from 'react-native';

const HEIGHT=Dimensions.get('window').height;
const WIDTH=Dimensions.get('window').width;

const styles = StyleSheet.create({
    viewBackBody:{
        backgroundColor:'#ffffff',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        marginTop:100,
        height:HEIGHT,
    },
    horizontalRectangle:{
        borderColor:'#7093DB',
        borderWidth:1,
        height:HEIGHT/6,
        width:WIDTH-50,
        margin:25,
        borderRadius:25,
        flexDirection:'row',
    },
    profileImage:{
        height:HEIGHT/8,
        width:WIDTH/4.8,
        marginTop:15,
        marginLeft:15,
        borderRadius:15,
        borderWidth:1,
        borderColor:'#000000'
    },
    viewTextBody:{
        
        alignItems:'flex-start',
        justifyContent:'center',
        width:WIDTH-60,
        marginBottom:250
    },
    textstyle:{
        marginTop:15,
        marginLeft:30,
        fontSize:14,
        color:'#A9A9A9'
    },
    textInput:{
        //marginRight:30,
        marginLeft:30,
        width:WIDTH-50,
        marginBottom:5,
        fontSize:16,
        color:'#000000',
       
    },
    iconStyle:{
        marginTop:-50,
        marginLeft:WIDTH-80,
        marginBottom:15
    }
    
});

export default styles;