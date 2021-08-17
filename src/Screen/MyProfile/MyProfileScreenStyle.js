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
        height:HEIGHT-550,
        width:WIDTH-50,
        marginTop:25,
        marginLeft:22,
        borderRadius:25,
        flexDirection:'row',
    },
    profileImage:{
        height:HEIGHT-580,
        width:WIDTH-310,
        marginTop:15,
        marginLeft:15,
    },
    viewTextBody:{
        marginTop:20,
        alignItems:'flex-start',
        justifyContent:'center',
        width:WIDTH-60,
    },
    textstyle:{
        marginTop:15,
        marginLeft:30,
        fontSize:13,
        color:'#A9A9A9'
    },
    textInput:{
        marginLeft:25,
        width:WIDTH-60,
        marginBottom:5,
        fontSize:16,
    },
});

export default styles;