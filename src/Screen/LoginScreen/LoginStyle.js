import React from 'react';
import {
    StyleSheet,
    Dimensions
} from 'react-native';

const HEIGHT=Dimensions.get('window').height;
const WIDTH=Dimensions.get('window').width;


const styles = StyleSheet.create({
  imageBackground:{
      height:HEIGHT,
      width:WIDTH
    },
    image: {
      width:WIDTH,
      height:HEIGHT-480,
      
    },
    textView:{
      marginTop:-30,
      marginLeft:20,
    },
    text: {
      alignItems:'flex-start',
      color: "white",
      fontSize: 30,
      fontWeight: "bold",
      marginLeft:10
    },
    viewBody:{
      marginTop:20,
      backgroundColor:'#ffffff',
      borderTopLeftRadius:35,
      borderTopRightRadius:35,
    },
    textBody:{
      marginLeft:35,
      marginTop:35,
      fontSize:15,
      color:'#B8B8B8',
      fontWeight:'bold',
      marginBottom:5,
    },
    signupButton:{
      backgroundColor:"#355FB4",
      marginLeft:40,
      marginRight:35,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      marginTop:25,
      borderRadius:6,
      flexDirection:'row'
    },
    signupButtonText:{
      fontSize:18,
      fontWeight:'bold',
      color:'white',
      marginLeft:100
    },
    arrowbtn:{
      height:20,
      width:28,
      marginLeft:100
    },
    forgot:{
      color:'#7E7E7E',
      fontSize:17,
      marginRight:35
    },

});

export default styles;