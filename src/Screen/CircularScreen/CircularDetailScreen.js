import React from 'react';
import {
    SafeAreaView,
    Dimensions,
    View,
    Image,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

const HEIGHT=Dimensions.get('window').height;
const WIDTH=Dimensions.get('window').width;

const CircularDetailScreen = () =>{
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
                <Image source={require('../../Images/galleryimage1.png')} style={{width:WIDTH,height:HEIGHT/2-10}}/>
            </View>

            <View style={{flex:1}}>
                <View style={{flexDirection:'row',marginTop:30,marginLeft:20,marginBottom:15}}>
                    <Icon name='clock' size={20} color='#6487C9'></Icon>
                    <Text style={{color:'#6487C9',fontSize:16,marginLeft:5,marginTop:-2}}>06 Jan 21, 09:00am</Text>
                </View>
                <View style={{marginLeft:20,marginBottom:30,marginRight:20}}>
                    <Text style={{fontSize:18,fontWeight:'bold',marginBottom:5}}>In Lionel Messi’s Move,</Text>
                    <Text style={{alignItems:'center',fontSize:16,color:'#727272',}}>a Dim Portrait of Modern Soccer He could not stay where he wanted; few teams could afford him. Even one of the best players of all time was not able to resist the economic forces that carry the game along</Text>
                </View>
            </View> 

        </SafeAreaView>
    );
}

export default CircularDetailScreen;