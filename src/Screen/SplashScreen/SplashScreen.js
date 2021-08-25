import React,{useEffect} from 'react';
import {
    SafeAreaView,
    Image,
    Dimensions,
    
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { AUTHENTICATE_USER } from '../../context/actions/type';
//import axiosConfig from '../../helpers/axiosConfig';
import * as SCREEN from '../../context/screens/screenName'
import MyPermissionController from '../../helpers/appPermission';

const HEIGHT=Dimensions.get('window').height;
const WIDTH=Dimensions.get('window').width;

const SplashScreen = (props) =>{

    useEffect(()=>{
        async function AuthController(){
            var getUser = await AsyncStorage.getItem(AUTHENTICATE_USER)
            var userData = JSON.parse(getUser);
            if(userData){
                //set authenticate user key
                let token = userData._id;
                //axiosConfig(token);
                return props.navigation.navigate(SCREEN.HOMESCREEN);
            } else {
                props.navigation.navigate(SCREEN.LOGINSCREEN);
            }
        }
        AuthController();
        checkPermission();
    },[]);

    //check permission
    const checkPermission = () =>{
        setTimeout(
            ()=>{
                MyPermissionController.checkAndRequestStoragePermission()
                .then((granted) => console.log('>Storage Permission Granted'))
                .catch((err) => console.log(err))
            },
            500
        );
    }

    return(
        <SafeAreaView style={{flex:1}}>
            <Image source={require('../../Images/splash.png')} style={{width:WIDTH,height:HEIGHT,resizeMode:'stretch'}}/>
        </SafeAreaView>
    );
}

export default SplashScreen;