import React,{useEffect,useState} from 'react';
import { 
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Image,
    Dimensions,
    ToastAndroid,
    Platform,
    BackHandler
} from 'react-native';
import styles from '../HomeScreen/HomeScreenStyle'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/Entypo'
import Iconh from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-community/async-storage';
import { AUTHENTICATE_USER} from '../../context/actions/type';
import { LOGINSCREEN } from '../../context/screens/screenName';

const HEIGHT=Dimensions.get('window').height;
const WIDTH=Dimensions.get('window').width;

const HomeScreen = (props) =>{
    const [data,setData] = useState(null);

    useEffect(()=>{
        getData(),
        props.navigation.addListener('focus', e => {
            BackHandler.addEventListener('hardwareBackPress', handleBackButton);
        });
        props.navigation.addListener('blur', e => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
        });
    },[]);

    useEffect(()=>{
    },[data]);

    //get AsyncStorage current user data
    const getData = async()=>{ 
        var username = await AsyncStorage.getItem(AUTHENTICATE_USER);
        if(username == null){
            setTimeout(()=>{
                props.navigation.navigate(LOGINSCREEN)
            },3000);
        }else{
            var user=JSON.parse(username);
            // console.log('data',user);
            // console.log('data',user.fullname); 
            // console.log('data',user.profileimage);
            setData(user);       
        }
    }

    //logout function
    const onpressLogout = async() =>{
        AsyncStorage.removeItem(AUTHENTICATE_USER);
        if(Platform.OS === 'android'){
            ToastAndroid.show("Logout Sucessfully!",ToastAndroid.SHORT);
            }
            props.navigation.replace(LOGINSCREEN);
    }

    //mobile backpress
    const handleBackButton = () => {
        BackHandler.exitApp()
        return true;
    }
 
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#6284C8'}}>
            <ScrollView>
                <View style={styles.textView}>
                      <Text style={styles.textHi}>Hi</Text>
                      <Text style={[styles.text,styles.textHi]}>{data && data.fullname}</Text>
                </View>
                <View style={{flexDirection:'row', height:HEIGHT-600}}>
                    {/* <View style={styles.viewYear}>
                        <Text style={{
                            color:'#7093DB',
                            fontSize:15,fontWeight:'bold',
                            marginLeft:12,
                            marginTop:3}} >2020-2021
                        </Text>
                    </View> */}
                    <TouchableOpacity onPress={()=>props.navigation.navigate('MyprofileScreen')}>
                    <View style={styles.viewRound}>
                        <Image source={{uri:data && data.profileimage}} style={styles.roundImage}></Image>
                    </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewBackBody}>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('AttendanceScreen')}>
                        <View style={styles.viewSquare}>
                            <Image source={require('../../Images/ic_attendance.png')}
                                style={styles.viewSquareImage}/>
                            <Text style={styles.viewSquareNumeric}>80.39%</Text>
                            <Text style={styles.viewSquareText}>Attendance</Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.viewSquare}>
                            <Image source={require('../../Images/ic_fees_due.png')}
                                style={styles.viewSquareImage}/>
                                <View style={{flexDirection:'row'}}>
                                    <Iconh name='rupee' size={26} style={{marginTop:15}} />
                                    {/* <Image source={require('../../Images/rupee.png')}
                                            style={{
                                                height:20,
                                                width:20,
                                                marginTop:20,
                                                marginLeft:15,}}/> */}
                                        <Text style={styles.viewSquareNumeric}>6400</Text>
                                </View>                           
                                <Text style={styles.viewSquareText}>Salary</Text>
                            </View>
                        </TouchableOpacity>
                        
                    </View> 
                        
                    {/* <View style={{flexDirection:'row'}}>
                        <TouchableOpacity>
                            <View style={styles.viewShortSquare}>
                                <Image resizeMode='contain' source={require('../../Images/ic_quiz.png')} style={styles.viewShortSquareImage}/>
                                    <Text style={styles.viewShortSquareText}>Play Quiz</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.viewShortSquare}>
                                <Image resizeMode='contain' source={require('../../Images/ic_assignment.png')} 
                                style={styles.viewShortSquareImage}/>
                                <Text style={styles.viewShortSquareText}>Assignment</Text>
                            </View>
                        </TouchableOpacity>    
                        </View>   */}

                        <View style={{flexDirection:'row'}}>
                        <TouchableOpacity>
                            <View style={styles.viewShortSquare}>
                                <Image resizeMode='contain' source={require('../../Images/ic_holiday.png')} style={styles.viewShortSquareImage}/>
                                    <Text style={styles.viewShortSquareText}>School Holiday</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('TimeTableScreen')}>
                            <View style={styles.viewShortSquare}>
                                <Image resizeMode='contain' source={require('../../Images/ic_calendra.png')} 
                                style={styles.viewShortSquareImage}/>
                                <Text style={styles.viewShortSquareText}>Class Schedule</Text>
                            </View>
                        </TouchableOpacity>    
                        </View>  

                        {/* <View style={{flexDirection:'row'}}>
                        <TouchableOpacity>
                            <View style={styles.viewShortSquare}>
                                <Image resizeMode='contain' source={require('../../Images/ic_results.png')} style={styles.viewShortSquareImage}/>
                                    <Text style={styles.viewShortSquareText}>Result</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('AskDoubtScreen')} >
                            <View style={styles.viewShortSquare}>
                                <Image resizeMode='contain' source={require('../../Images/ic_doubts.png')} style={styles.viewShortSquareImage}/>
                                    <Text style={styles.viewShortSquareText}>Ask Doubts</Text>
                            </View>
                        </TouchableOpacity>
                         
                        </View> */}

                        <View style={{flexDirection:'row'}}>
                        <TouchableOpacity>
                            <View style={styles.viewShortSquare}>
                                <Image resizeMode='contain' source={require('../../Images/ic_date_sheet.png')} 
                                style={styles.viewShortSquareImage}/>
                                <Text style={styles.viewShortSquareText}>Exam Sheet</Text>
                            </View>
                        </TouchableOpacity>   
                        <TouchableOpacity onPress={()=>props.navigation.navigate('SchoolGalleryScreen')}>
                            <View style={styles.viewShortSquare}>
                                <Image resizeMode='contain' source={require('../../Images/ic_gallery.png')} 
                                style={styles.viewShortSquareImage}/>
                                <Text style={styles.viewShortSquareText}>School Gallery</Text>
                            </View>
                        </TouchableOpacity>    
                        </View>

                        <View style={{flexDirection:'row'}}>
                        <TouchableOpacity>
                            <View style={styles.viewShortSquare}>
                                <Image resizeMode='contain' source={require('../../Images/ic_leave.png')} style={styles.viewShortSquareImage}/>
                                    <Text style={styles.viewShortSquareText}>Leave Application</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('ChangePasswordScreen')} >
                            <View style={styles.viewShortSquare}>
                                <Image resizeMode='contain' resizeMode='contain' source={require('../../Images/ic_password.png')} 
                                style={styles.viewShortSquareImage}/>
                                <Text style={styles.viewShortSquareText}>Change Password</Text>
                            </View>
                        </TouchableOpacity>    
                        </View>

                        {/* <View style={{flexDirection:'row'}}>
                        <TouchableOpacity>
                            <View style={styles.viewShortSquare}>
                                <Image resizeMode='contain' source={require('../../Images/ic_event.png')} style={styles.viewShortSquareImage}/>
                                    <Text style={styles.viewShortSquareText}>Events</Text>
                            </View>
                        </TouchableOpacity>
                         <TouchableOpacity>
                            <View style={styles.viewShortSquare}>
                            <Iconh name='bullhorn' size={HEIGHT/15} color='#2D5AB2' style={{marginTop:30}}/>
                                <Text style={{fontSize:17,marginTop:20,marginLeft:15}}>Announcement</Text>
                                
                            </View>
                        </TouchableOpacity>  
                          
                        </View> */}

                        <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('CircularScreen')} >
                            <View style={styles.viewShortSquare}>
                            <Icons name='circular-graph' size={HEIGHT/15} color='#2D5AB2' style={{marginTop:30}}/>
                                <Text style={{fontSize:17,marginTop:20,marginLeft:15}}>Circular</Text>
                            </View>
                        </TouchableOpacity> 
                       
                        <TouchableOpacity onPress={()=>props.navigation.navigate('SupportScreen')}>
                            <View style={styles.viewShortSquare}>
                                <Icon name='support-agent' size={HEIGHT/15} color='#2D5AB2' style={{marginTop:35}}/>
                                    <Text style={{fontSize:17,marginTop:20,marginLeft:15}}>Support</Text>
                            </View>
                        </TouchableOpacity> 
                        </View>

                        <View style={{flexDirection:'row'}}>
                        {/* <TouchableOpacity onPress={()=>props.navigation.navigate('SchoolGalleryScreen')}>
                            <View style={styles.viewShortSquare}>
                                <Image resizeMode='contain' source={require('../../Images/ic_gallery.png')} 
                                style={styles.viewShortSquareImage}/>
                                <Text style={styles.viewShortSquareText}>School Gallery</Text>
                            </View>
                        </TouchableOpacity>     */}
                        
                        <TouchableOpacity onPress={()=> onpressLogout()}>
                            <View style={styles.viewShortSquare}>
                                <Image resizeMode='contain' source={require('../../Images/ic_logout.png')} 
                                style={styles.viewShortSquareImage}/>
                                <Text style={styles.viewShortSquareText}>Logout</Text>
                            </View>
                        </TouchableOpacity>    
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
        
    );
}

export default HomeScreen;