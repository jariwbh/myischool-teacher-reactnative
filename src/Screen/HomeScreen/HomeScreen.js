import React from 'react';
import { 
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Image,
    Dimensions,

} from 'react-native';
import styles from '../HomeScreen/HomeScreenStyle'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/Entypo'
import Iconh from 'react-native-vector-icons/FontAwesome'
const HEIGHT=Dimensions.get('window').height;
const WIDTH=Dimensions.get('window').width;

const HomeScreen = (props) =>{
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#6284C8'}}>
            <ScrollView>
                <View style={styles.textView}>
                      <Text style={styles.textHi}>Hi</Text>
                      <Text style={[styles.text,styles.textHi]}>Akshy</Text>
                </View>
                <View style={{flexDirection:'row', height:HEIGHT-600}}>
                    <View style={styles.viewYear}>
                        <Text style={{
                            color:'#7093DB',
                            fontSize:15,fontWeight:'bold',
                            marginLeft:12,
                            marginTop:3}} >2020-2021
                        </Text>
                    </View>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('MyprofileScreen')}>
                    <View style={styles.viewRound}/>
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
                                    <Image source={require('../../Images/rupee.png')}
                                            style={{
                                                height:25,
                                                width:25,
                                                marginTop:20,
                                                marginLeft:15,}}/>
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

                        <View style={{flexDirection:'row'}}>
                        <TouchableOpacity>
                            <View style={styles.viewShortSquare}>
                                <Image resizeMode='contain' source={require('../../Images/ic_event.png')} style={styles.viewShortSquareImage}/>
                                    <Text style={styles.viewShortSquareText}>Events</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('CircularScreen')} >
                            <View style={styles.viewShortSquare}>
                            <Icons name='circular-graph' size={50} color='#2D5AB2' style={{marginTop:25}}/>
                                <Text style={{fontSize:17,marginTop:12,marginLeft:15,}}>Circular</Text>
                            </View>
                        </TouchableOpacity>    
                        </View>

                        <View style={{flexDirection:'row'}}>
                        <TouchableOpacity>
                            <View style={styles.viewShortSquare}>
                            <Iconh name='bullhorn' size={50} color='#2D5AB2' style={{marginTop:25}}/>
                                <Text style={styles.viewShortSquareText}>Announcement</Text>
                            </View>
                        </TouchableOpacity>  
                        <TouchableOpacity onPress={()=>props.navigation.navigate('SupportScreen')}>
                            <View style={styles.viewShortSquare}>
                                <Icon name='support-agent' size={60} color='#2D5AB2' style={{marginTop:25}}/>
                                    <Text style={{fontSize:17,marginTop:5,marginLeft:15,}}>Support</Text>
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
                        
                        <TouchableOpacity onPress={()=>props.navigation.navigate('LoginScreen')}>
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