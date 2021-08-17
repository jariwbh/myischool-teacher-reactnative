import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';

import SplashScreen from '../Screen/Screens/SplashScreen'
import LoginScreen from '../Screen/LoginScreen/LoginScreen';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import MyprofileScreen from '../Screen/MyProfile/MyprofileScreen';
import AttendanceScreen from '../Screen/Attendance/AttendanceScreen';
import TimeTableScreen from '../Screen/TimeTable/TimeTableScreen';
import SchoolGalleryScreen from '../Screen/SchoolGallery/SchoolGalleryScreen';
import AskDoubtScreen from '../Screen/AskDoubts/AskDoubtScreen';
import ChangePasswordScreen from '../Screen/ChangePassword/ChangePasswordScreen';
import CircularScreen  from '../Screen/CircularScreen/CircularScreen';
import CircularDetailScreen from '../Screen/CircularScreen/CircularDetailScreen';
import SupportScreen from '../Screen/Support/SupportScreen';

const Stack = createStackNavigator();

function NavigationScreen(){
    return(      
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HomeScreen'> 
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>  
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name="MyprofileScreen" component={MyprofileScreen} options={{title:'My Profile',headerTintColor:'#ffffff',headerTransparent:'true'}}/>
                <Stack.Screen name="AttendanceScreen" component={AttendanceScreen} options={{title:'Attendance',headerTintColor:'#ffffff',headerTransparent:'true'}}/>
                <Stack.Screen name="TimeTableScreen" component={TimeTableScreen} options={{title:'Time Table',headerTintColor:'#ffffff',headerTransparent:'true'}}/>
                <Stack.Screen name="SchoolGalleryScreen" component={SchoolGalleryScreen} options={{title:'School Gallery',headerTintColor:'#ffffff',headerTransparent:'true'}}/>
                <Stack.Screen name="AskDoubtScreen" component={AskDoubtScreen} options={{title:'Ask Doubts',headerTintColor:'#ffffff',headerTransparent:'true'}}/>
                <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} options={{title:'Change Password',headerTintColor:'#ffffff',headerTransparent:'true'}}/>
                <Stack.Screen name="CircularScreen" component={CircularScreen} options={{title:'Circular',headerTintColor:'#ffffff',headerTransparent:'true'}}/>
                <Stack.Screen name="CircularDetailScreen" component={CircularDetailScreen} options={{title:'',headerTintColor:'#ffffff',headerTransparent:'true'}}/>
                <Stack.Screen name="SupportScreen" component={SupportScreen} options={{title:'Support' ,headerTintColor:'#ffffff',headerTransparent:'true'}}/>
                      
        </Stack.Navigator>
    </NavigationContainer>
    );
}

export default NavigationScreen;