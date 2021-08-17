import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Dimensions,
    Text,
    Image,
} from 'react-native';

const HEIGHT=Dimensions.get('window').height;
const WIDTH=Dimensions.get('window').width;

const SupportScreen = () =>{
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#6487C9'}}>
            <View style={styles.viewBackBody}>
                <Image style={{height:HEIGHT-555,width:WIDTH-285,marginTop:-250,alignItems:'center'}} source={require('../../Images/support_.png')}></Image>
                <Text style={{marginTop:20,fontSize:26}}>Get Support</Text>
                <Text style={{color:'#9C9C9C',fontSize:16,marginTop:15,marginLeft:25,marginRight:25,textAlign:'center'}}>For any support request regards your orders and deliveries please feel free to speak with us at below </Text>
                <Text style={{fontSize:17,marginTop:30}}>Call us - +91 7838XXXXXXX</Text>
                <Text style={{fontSize:17}}>Mail us - aaabhhj@gmail.com</Text>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    viewBackBody:{
        backgroundColor:'#ffffff',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        marginTop:100,
        height:HEIGHT, 
        justifyContent:'center',
        alignItems:'center'
    },
});

export default SupportScreen;