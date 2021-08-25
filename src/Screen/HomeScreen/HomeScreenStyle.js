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
    // viewRound:{
    //     marginLeft:200,
    //     alignItems:'flex-end',
    //     backgroundColor:'#CACACA',
    //     height:130,width:130,
    //     borderRadius:60,
    //     borderColor:'#ffffff',
    //     borderWidth:3,
    //     marginTop:-35
    // },
    roundImage:{
        marginLeft:WIDTH/2+100,
       // alignItems:'flex-end',
        height:HEIGHT/7.8,
        width:WIDTH/4.8,
        borderRadius:50,
        borderColor:'#FFFFFF',
        borderWidth:3,
        marginTop:-35
    },
    viewSquare:{
        height:HEIGHT/3.5,
        width:WIDTH/3+40,
        backgroundColor:'#ffffff',
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        marginLeft:22,
        alignItems:'center',
        borderColor:'#7093DB',
        borderWidth:1,
        marginTop:-90,
    },
    viewSquareImage:{
        height:HEIGHT/7+5,
        width:WIDTH/4,
        marginTop:20,
    },
    viewSquareNumeric:{
        fontWeight:'bold',
        fontSize:25,
        marginTop:10,
    },
    viewSquareText:{
        fontSize:15,
        color:'#AEAEAE',
    },
    viewBackBody:{
        backgroundColor:'#ffffff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        width:WIDTH,
        height:HEIGHT+200,
        marginTop:HEIGHT/10
    },
    viewShortSquare:{
        height:HEIGHT/5,
        width:WIDTH/3+40,
        backgroundColor:'#F5F6FC',
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        marginLeft:22,
        alignItems:'center',
        marginTop:15
    },
    viewShortSquareImage:{
        height: HEIGHT/15,
        width:75,
        marginLeft:15,
        marginRight:15,
        marginTop:30,

    },
    viewShortSquareText:{
        fontSize:17,
        marginTop:25,
        marginLeft:15
    },
});
export default styles;