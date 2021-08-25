import React,{useEffect,useState} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Dimensions,
    TextInput,
    ScrollView,
} from 'react-native';
import styles from './MyProfileScreenStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import { AUTHENTICATE_USER } from '../../context/actions/type';
import { LOGINSCREEN } from '../../context/screens/screenName';
import { placeholder } from '@babel/types';

const HEIGHT=Dimensions.get('window').height;
const WIDTH=Dimensions.get('window').width;


const MyprofileScreen = (props) =>{

    const [data,setData] = useState(null);
    const [fullname,setFullname] = useState(null);
    const [mobile_number,setMobile_Number] = useState(null);
    const [email,setEmail] = useState(null);
    const [date_of_birth,set_Date_Of_Birth] = useState(null);
    const [joining_date,setJoin_date] = useState(null);
    const [address,setAddress] = useState(null);
    const [city,setCity] = useState(null);
    const [pincode,setPincode] = useState(null);


    useEffect(()=>{getData()},[]);
    useEffect(()=>[data]);

    //get AsyncStorage current user data

    const getData = async() =>{
        var userData = await AsyncStorage.getItem(AUTHENTICATE_USER);
        if(userData == null){
            setTimeout(()=>{props.navigation.navigate(LOGINSCREEN)},3000);
        }
        var userInfo = JSON.parse(userData);
        console.log('USERData',userInfo);
        setData(userInfo);
        setFullname(userInfo.property.fullname ? userInfo.property.fullname:'- -');
        setMobile_Number(userInfo.property.mobile_number ? userInfo.property.mobile_number : '- -');
        setEmail(userInfo.property.primaryemail ? userInfo.property.primaryemail : '- -');
        set_Date_Of_Birth(userInfo.property.date_of_birth ? userInfo.property.date_of_birth : '- -');
        setJoin_date(userInfo.property.joining_date ? userInfo.property.joining_date : '- -');
        setAddress(userInfo.property.address ? userInfo.property.address : '- -');
        setCity(userInfo.property.city ? userInfo.property.city : '- -');
        setPincode(userInfo.property.pincode ? userInfo.property.pincode : '- -');
    }


    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#6284C8'}}>
                <View style={styles.viewBackBody}>
                <ScrollView style={{marginTop:10}}>
                    <TouchableOpacity>
                        <View style={styles.horizontalRectangle}>
                            <Image source={{uri:data && data.profileimage}} style={styles.profileImage}/>
                            <Text style={{fontSize:20,fontWeight:'bold',marginLeft:15,marginTop:20}}>{fullname}</Text>
                            <Icon name="camera" size={25} color="#B8B8B8" style={{marginLeft:WIDTH/3.5,marginTop:20}}/> 
                        </View>
                    </TouchableOpacity>

                   
                        <View style={styles.viewTextBody}>
                            <Text style={styles.textstyle}>Full Name</Text>
                            <TextInput editable={false}  underlineColorAndroid={'#2A2A2A'} style={styles.textInput}>{fullname}</TextInput>
                            <Icon name='lock' size={25} color='#B8B8B8' style={styles.iconStyle}/>

                            <Text style={styles.textstyle}>Phone Number</Text>
                            <TextInput editable={false}  underlineColorAndroid={'#2A2A2A'} style={styles.textInput}>{mobile_number}</TextInput>
                            <Icon name='lock' size={25} color='#B8B8B8' style={styles.iconStyle}/>

                            <Text style={styles.textstyle}>Email</Text>
                            <TextInput editable={false}  underlineColorAndroid={'#2A2A2A'} style={styles.textInput}>{email}</TextInput>
                            <Icon name='lock' size={25} color='#B8B8B8' style={styles.iconStyle}/>

                            <Text style={styles.textstyle}>Date of Birth</Text>
                            <TextInput editable={false}  underlineColorAndroid={'#2A2A2A'} style={styles.textInput}>{date_of_birth}</TextInput>
                            <Icon name='lock' size={25} color='#B8B8B8' style={styles.iconStyle}/>
                        
                            <Text style={styles.textstyle}>Joining Date</Text>
                            <TextInput editable={false}  underlineColorAndroid={'#2A2A2A'} style={styles.textInput}>{joining_date}</TextInput>
                            <Icon name='lock' size={25} color='#B8B8B8' style={styles.iconStyle}/>

                            <Text style={styles.textstyle}>Address</Text>
                            <TextInput multiline numberOfLines={5} editable={false}  underlineColorAndroid={'#2A2A2A'} style={styles.textInput} >{address}</TextInput>
                            <Icon name='lock' size={25} color='#B8B8B8' style={styles.iconStyle}/>

                            <Text style={styles.textstyle}>City</Text>
                            <TextInput editable={false}  underlineColorAndroid={'#2A2A2A'} style={styles.textInput} >{city}</TextInput>
                            <Icon name='lock' size={25} color='#B8B8B8' style={styles.iconStyle}/>

                            <Text style={styles.textstyle}>Pincode</Text>
                            <TextInput editable={false}  underlineColorAndroid={'#2A2A2A'} style={styles.textInput} >{pincode}</TextInput>
                            <Icon name='lock' size={25} color='#B8B8B8' style={styles.iconStyle}/>

                        </View>
                        </ScrollView>
                </View>
            
        </SafeAreaView>
    );
}

export default MyprofileScreen;