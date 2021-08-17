import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Dimensions,
    SafeAreaView,
    Text
} from 'react-native';
import { Icon } from 'react-native-vector-icons/Feather';
import {
    Calendar,
    CalendarList,
    Agenda,
    LocaleConfig
 } from 'react-native-calendars'

 const date = new Date().getDate(); //To get the Current Date
 const month = new Date().getMonth() + 1; //To get the Current Month
 const year = new Date().getFullYear();
 const setCurrentDate=(year + '/' + month + '/' + date);

const HEIGHT=Dimensions.get('window').height;
const WIDTH=Dimensions.get('window').width;

const AttendanceScreen = () =>{
//<Icon name='angle-right'/>
    // const _renderArrow = (direction) => {
    //     if(direction === 'left') {
    //         return <Icon name='angle-right'/>
    //     } else {
    //         return <Icon name='angle-left'/>
    //     }
    // }
    
    return(
       
        <SafeAreaView style={{flex:1,backgroundColor:'#6487C9'}}>
            <View style={styles.viewBackBody}>
                <View style={{ paddingTop:20, flex: 1 }}>
                {/* <Icon name='angle-right' size={30}/> */}
                    <Calendar style={styles.calendarViwe}
                    current={setCurrentDate}
                    hideExtraDays={true}
                    //markingType={'custom'}
                   // renderArrow={_renderArrow}
                    />
                    <Image style={styles.bottomImage} source={require('../../Images/1.png')}/>
                </View>
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
    },
    bottomImage:{
      width: WIDTH, 
      height: HEIGHT-540, 
      justifyContent: 'center', 
      alignItems: 'center',
      marginTop:80
    },
    calendarViwe:{
        backgroundColor:'#ffffff',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
    }
});

export default AttendanceScreen;
