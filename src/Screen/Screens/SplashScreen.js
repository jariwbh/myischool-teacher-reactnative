import React,{useState,useEffect} from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator,
    Image,Text,
    Dimensions
} from 'react-native'

const HEIGHT=Dimensions.get('window').height;
const WIDTH=Dimensions.get('window').width;

const SplashScreen = (props) =>{
    const [animating, setAnimating] = useState(true);
    return(
        <View style={styles.container}>
            <Image source={require('../../Images/splash.png')} style={{width:WIDTH,height:HEIGHT,resizeMode:'stretch'}}
            />
            
            <ActivityIndicator 
                animating={animating}
                color="#FFFFFF"
                size="large"
                style={styles.activityIndicator}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
         flex:1,
    },
    activityIndicator:{
        alignItems:'center', 
    },
});

export default SplashScreen;