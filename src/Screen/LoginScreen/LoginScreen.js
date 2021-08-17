import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  Dimensions,
  View,
  ImageBackground,
  Image,
  TextInput,
  ScrollView
} from 'react-native';
import styles from './LoginStyle';

const HEIGHT=Dimensions.get('window').height;
const WIDTH=Dimensions.get('window').width;

const LoginScreen = (props) =>{
  return(
    <ScrollView>
       <SafeAreaView style={{flex:1}}>
      <ImageBackground source={require('../../Images/bg.png')} resizeMode='cover' style={styles.imageBackground}>
        <View>
          <ImageBackground source={require('../../Images/vector.png')} resizeMode='contain' style={styles.image}/>
          <View style={styles.textView}>
              <Text style={styles.text}>Hi Teacher</Text>
              <Text style={{color:'#DCDCDC',fontSize:22,marginLeft:10}}>Sign in to continue</Text>
            </View>

            <View style={styles.viewBody}>
                      <Text style={styles.textBody}>Mobile number/Email</Text>
                      <TextInput underlineColorAndroid={'#A9A9A9'} style={{marginLeft:30,marginRight:30}} />

                      <Text style={styles.textBody}>
                        Password
                      </Text>
                      <TextInput underlineColorAndroid={'#A9A9A9'} secureTextEntry={true} style={{marginLeft:30,marginRight:30}} />
                      
                      <TouchableOpacity style={styles.signupButton} onPress={()=>props.navigation.navigate('HomeScreen')}>
                        <Text style={styles.signupButtonText}>SIGN IN</Text>
                        <Image source={require('../../Images/right-arrow.png')} style={styles.arrowbtn}></Image>
                      </TouchableOpacity>

        
                      <TouchableOpacity style={{alignItems:'flex-end',marginTop:10,marginBottom:HEIGHT}}>
                        <Text style={styles.forgot}>Forgot Password ?</Text>
                      </TouchableOpacity>

            </View>
        </View>  
      </ImageBackground>
    </SafeAreaView>
    </ScrollView>
   
  );
}
export default LoginScreen;