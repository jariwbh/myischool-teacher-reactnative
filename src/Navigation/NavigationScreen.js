import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';

import SPLASHSCREEN from '../Screen/SplashScreen/SplashScreen'
import LOGINSCREEN from '../Screen/LoginScreen/LoginScreen';
import HOMESCREEN from '../Screen/HomeScreen/HomeScreen';
import MYPROFILESCREEN from '../Screen/MyProfile/MyprofileScreen';
import ATTENDANCESCREEN from '../Screen/Attendance/AttendanceScreen';
import TIMETABLESCREEN from '../Screen/TimeTable/TimeTableScreen';
import SCHOOLGALLERYSCREEN from '../Screen/SchoolGallery/SchoolGalleryScreen';
import ASKDOUBTSCREEN from '../Screen/AskDoubts/AskDoubtScreen';
import CHANGEPASSWORDSCREEN from '../Screen/ChangePassword/ChangePasswordScreen';
import CIRCLUARSCREEN  from '../Screen/CircularScreen/CircularScreen';
import CIRCLUARDETAILSCREEN from '../Screen/CircularScreen/CircularDetailScreen';
import SUPPORTSCREEN from '../Screen/Support/SupportScreen';

const Stack = createStackNavigator();

function NavigationScreen(){
    return(      
        <NavigationContainer>
            <Stack.Navigator initialRouteName={SPLASHSCREEN}> 
                <Stack.Screen name="SplashScreen" component={SPLASHSCREEN} options={{headerShown: false}}/>
                <Stack.Screen name="LoginScreen" component={LOGINSCREEN} options={{headerShown: false}}/>  
                <Stack.Screen name="HomeScreen" component={HOMESCREEN} options={{headerShown: false}}/>
                <Stack.Screen name="MyprofileScreen" component={MYPROFILESCREEN} options={{title:'My Profile',headerTintColor:'#ffffff',headerTransparent:'true'}}/>
                <Stack.Screen name="AttendanceScreen" component={ATTENDANCESCREEN} options={{title:'Attendance',headerTintColor:'#ffffff',headerTransparent:'true'}}/>
                <Stack.Screen name="TimeTableScreen" component={TIMETABLESCREEN} options={{title:'Time Table',headerTintColor:'#ffffff',headerTransparent:'true'}}/>
                <Stack.Screen name="SchoolGalleryScreen" component={SCHOOLGALLERYSCREEN} options={{title:'School Gallery',headerTintColor:'#ffffff',headerTransparent:'true'}}/>
                <Stack.Screen name="AskDoubtScreen" component={ASKDOUBTSCREEN} options={{title:'Ask Doubts',headerTintColor:'#ffffff',headerTransparent:'true'}}/>
                <Stack.Screen name="ChangePasswordScreen" component={CHANGEPASSWORDSCREEN} options={{title:'Change Password',headerTintColor:'#ffffff',headerTransparent:'true'}}/>
                <Stack.Screen name="CircularScreen" component={CIRCLUARSCREEN} options={{title:'Circular',headerTintColor:'#ffffff',headerTransparent:'true'}}/>
                <Stack.Screen name="CircularDetailScreen" component={CIRCLUARDETAILSCREEN} options={{title:'',headerTintColor:'#ffffff',headerTransparent:'true'}}/>
                <Stack.Screen name="SupportScreen" component={SUPPORTSCREEN} options={{title:'Support' ,headerTintColor:'#ffffff',headerTransparent:'true'}}/>
                      
        </Stack.Navigator>
    </NavigationContainer>
    );
}

export default NavigationScreen;