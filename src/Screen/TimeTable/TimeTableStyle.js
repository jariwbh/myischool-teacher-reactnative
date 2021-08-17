import React from 'react';
import {
    StyleSheet,
    Dimensions,
} from 'react-native';

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
    viewWeekDay:{
        borderColor:'#A9A9A9',
        borderWidth:1,
        height:HEIGHT-650,
        width:WIDTH-50,
        marginTop:28,
        marginLeft:22,
        borderRadius:25,
        flexDirection:'row',
    },
    viewPeriods:{
        borderColor:'#A9A9A9',
        borderWidth:1,
        height:HEIGHT-540,
        width:WIDTH-50,
        borderRadius:15,
        margin:20,
        marginBottom:-5,
    },
    textSubject:{
        fontSize:15,
        color:'#000000',
        fontWeight:'bold',
        margin:18
    },
    textTime:{
        fontSize:15,
        color:'#A9A9A9',
        fontWeight:'bold',
        marginLeft:18,
    },
    textName:{
        marginLeft:18,
        fontSize:15,
        color:'#A9A9A9',
        fontWeight:'bold',
    },

});

export default styles;