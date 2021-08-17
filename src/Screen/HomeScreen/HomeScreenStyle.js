import React from 'react';
import {
    StyleSheet,
    Dimensions
} from 'react-native';

const HEIGHT=Dimensions.get('window').height;
const WIDTH=Dimensions.get('window').width;

const styles = StyleSheet.create({
    textView:{
        marginTop:45,
        marginLeft:15,
        flexDirection:'row',
    },
    textHi: {
        alignItems:'flex-start',
        color: "white",
        fontSize: 30,
        marginLeft:5
    },
    text: {
        fontWeight:'bold'
    },
    viewYear:{
        width:100,height:30,
        backgroundColor:'#ffffff',
        marginLeft:22,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        marginTop:25
    },
    viewRound:{
        marginLeft:180,
        alignItems:'flex-end',
        backgroundColor:'#CACACA',
        height:90,width:90,
        borderBottomRightRadius:50,
        borderBottomLeftRadius:50,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        borderColor:'#ffffff',
        borderWidth:3,
        marginTop:-35
    },
    viewSquare:{
        height:HEIGHT-480,
        width:WIDTH-240,
        backgroundColor:'#ffffff',
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        marginLeft:22,
        alignItems:'center',
        borderColor:'#7093DB',
        borderWidth:1,
        marginTop:-80
    },
    viewSquareImage:{
        height:HEIGHT-600,
        width:83,
        marginTop:20,
    },
    viewSquareNumeric:{
        fontWeight:'bold',
        fontSize:30,
        marginTop:10,
    },
    viewSquareText:{
        fontSize:18,
        color:'#AEAEAE',
    },
    viewBackBody:{
        backgroundColor:'#ffffff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop:80,
       
    },
    viewShortSquare:{
        height:HEIGHT-540,
        width:WIDTH-240,
        backgroundColor:'#F5F6FC',
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        marginLeft:20,
        margin:10,
        alignItems:'center',
        marginTop:15
    },
    viewShortSquareImage:{
        height: HEIGHT-640,
        width:75,
        marginLeft:15,
        marginTop:25,

    },
    viewShortSquareText:{
        fontSize:17,
        marginTop:18,
        marginLeft:15,
    },
});
export default styles;