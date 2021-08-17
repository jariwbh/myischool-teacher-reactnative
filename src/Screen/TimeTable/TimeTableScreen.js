import React from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    ImageBackground,
    Dimensions,
    ScrollView
} from 'react-native';
import styles from './TimeTableStyle'

const HEIGHT=Dimensions.get('window').height;
const WIDTH=Dimensions.get('window').width;

const TimeTableScreen = (props) =>{
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#6586C6'}}>
            <View style={styles.viewBackBody}>
                <View style={styles.viewWeekDay}>
                    <View style={{
                        backgroundColor:'#6586C6',
                        borderColor:'#6586C6',
                        borderWidth:1,
                        height:HEIGHT-650,
                        width:WIDTH-310,
                        borderRadius:25,
                        alignItems:'center',justifyContent:'center'
                        }}>
                        <Text style={{fontSize:15,color:'#ffffff',fontWeight:'bold'}}>MON</Text>
                    </View>
                </View>

                <ScrollView style={{marginTop:15}}>
                    <View style={{marginBottom:180}}>

                        <View style={styles.viewPeriods}>
                            <Text style={styles.textSubject}>Computer Science</Text>
                            <Text style={styles.textTime}>08:15am - 9:00am</Text>                           
                            <View style={{height: 1, backgroundColor: '#A9A9A9',margin:15}} />                       
                            <Text style={styles.textName}>Cherise James</Text>
                            <View style={{alignItems:'flex-end',marginTop:-18,marginRight:18}}>
                                <Text style={{fontSize:15,color:'#000000',fontWeight:'bold',marginLeft:20}}>Period 1</Text>
                            </View>
                        </View>

                        <View style={styles.viewPeriods}>
                            <Text style={styles.textSubject}>Mathematics</Text>
                            <Text style={styles.textTime}>9:00am - 9:45am</Text>
                            <View style={{height: 1, backgroundColor: '#A9A9A9',margin:15}} />
                            <Text style={styles.textName}>Revika James</Text>
                            <View style={{alignItems:'flex-end',marginTop:-18,marginRight:18}}>
                                <Text style={{fontSize:15,color:'#000000',fontWeight:'bold',marginLeft:20}}>Period 2</Text>
                            </View>
                        </View>

                        <View style={styles.viewPeriods}>
                            <Text style={styles.textSubject}>English</Text>
                            <Text style={styles.textTime}>9:45am - 10:30am</Text>
                            <View style={{height: 1, backgroundColor: '#A9A9A9',margin:15}} />
                            <Text style={styles.textName}>Revi Jons</Text>
                        <View style={{alignItems:'flex-end',marginTop:-18,marginRight:18}}>
                        <Text style={{fontSize:15,color:'#000000',fontWeight:'bold',marginLeft:20}}>Period 3</Text>
                        </View>
                    </View>

                    <View style={{borderColor:'#A9A9A9',
                                    borderWidth:1,
                                    height:HEIGHT-570,
                                    width:WIDTH-50,
                                    borderRadius:15,
                                    margin:20,
                                    marginBottom:-5,}}>
                        <Text style={styles.textSubject}>Lunch Break</Text>
                        <Text style={styles.textTime}>10:30am - 11:00am</Text>
                        <View style={{alignItems:'flex-end',marginTop:-50,marginRight:18}}>
                            <Image source={require('../../Images/lunch_break.png')} style={{marginLeft:18}}/>
                        </View>
                    </View>

                    <View style={styles.viewPeriods}>
                        <Text style={styles.textSubject}>Mathematics</Text>
                        <Text style={styles.textTime}>11:00am - 12:30pm</Text>
                        <View style={{height: 1, backgroundColor: '#A9A9A9',margin:15}} />
                        <Text style={styles.textName}>Revika James</Text>
                        <View style={{alignItems:'flex-end',marginTop:-18,marginRight:18}}>
                        <Text style={{fontSize:15,color:'#000000',fontWeight:'bold',marginLeft:20}}>Period 4</Text>
                        </View>
                    </View>

                    <View style={styles.viewPeriods}>
                        <Text style={styles.textSubject}>Social Science</Text>
                        <Text style={styles.textTime}>12:30pm - 1:00pm</Text>
                        <View style={{height: 1, backgroundColor: '#A9A9A9',margin:15}} />
                        <Text style={styles.textName}>Oliv Jefrie</Text>
                        <View style={{alignItems:'flex-end',marginTop:-18,marginRight:18}}>
                        <Text style={{fontSize:15,color:'#000000',fontWeight:'bold',marginLeft:20}}>Period 5</Text>
                        </View>
                    </View>
                
                    </View>
                    </ScrollView>
            </View>
            
        </SafeAreaView>
    );
}

export default TimeTableScreen;