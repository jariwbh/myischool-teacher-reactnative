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
    horizontalImage:{
        margin:10,
        marginRight:-10,
        height:HEIGHT-500,
        width:WIDTH-230,
        borderRadius:25,
    },
    verticalImage:{
        margin:10,
        marginRight:-10,
        height:HEIGHT-450,
        width:WIDTH-230,
        borderRadius:25,
    },
});

export default styles;