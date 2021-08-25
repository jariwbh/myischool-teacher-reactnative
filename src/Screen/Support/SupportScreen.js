import AsyncStorage from '@react-native-community/async-storage';
import React,{useEffect,useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Dimensions,
    Text,
    Image,
} from 'react-native';
import { AUTHENTICATE_USER } from '../../context/actions/type';
import { LOGINSCREEN } from '../../context/screens/screenName';

const HEIGHT=Dimensions.get('window').height;
const WIDTH=Dimensions.get('window').width;

const SupportScreen = (props) =>{
    const[contactno,setcontact] = useState(null);
    
    useEffect(()=>{
        getData();
    },[]);

    useEffect(()=>{
       
    },[contactno]);

   
    const getData = async() =>{
        var datavalue = await AsyncStorage.getItem(AUTHENTICATE_USER);
        if(datavalue == null){
            setTimeout(() => {
                props.navigation.navigate(LOGINSCREEN)
            }, 3000);
        }else{

            var data=JSON.parse(datavalue);
            console.log('data',data);
            console.log('data',data.branchid.companyphone); 
            setcontact(data);
        }
    }

    return(
        
        <SafeAreaView style={{flex:1,backgroundColor:'#6487C9'}}>
            <View style={styles.viewBackBody}>
                <Image style={{height:150,width:150,marginTop:-250,alignItems:'center'}} source={require('../../Images/support_.png')}></Image>
                <Text style={{marginTop:20,fontSize:26}}>Get Support</Text>
                <Text style={{color:'#9C9C9C',fontSize:16,marginTop:15,marginLeft:25,marginRight:25,textAlign:'center'}}>For any support request regards your orders and deliveries please feel free to speak with us at below </Text>
                <Text style={{fontSize:17,marginTop:30}}>Call us - {contactno && contactno.branchid && contactno.branchid.companyphone} </Text> 
                <Text style={{fontSize:17}}>Mail us - {contactno && contactno.branchid &&contactno.branchid.supportemail}</Text>
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
        justifyContent:'center',
        alignItems:'center'
    },
});

export default SupportScreen;