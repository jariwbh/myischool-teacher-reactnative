import React,{Component} from 'react';
import {SafeAreaView,TouchableOpacity,Text,Dimensions,View,ImageBackground,Image,TextInput,ScrollView,ToastAndroid,Platform,BackHandler} from 'react-native';
import styles from './LoginStyle';
import LoginService from '../../services/LoginService/LoginService';
import AsyncStorage from '@react-native-community/async-storage';
import { AUTHENTICATE_USER } from '../../context/actions/type';
import axiosConfig from '../../helpers/axiosConfig';
import Loader from '../../components/loader'
//import HelperSupportService from '../../services/HelpSupportService/HelperSupportService'
import { HOMESCREEN, SUPPORTSCREEN } from '../../context/screens/screenName';


const HEIGHT=Dimensions.get('window').height;
const WIDTH=Dimensions.get('window').width;

export default class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      username : 'jaypatel@gmail.com',
      usererror : null,
      password : 'pass#123',
      passworderror : null,
      loading :false
    };
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.onPressLogIn = this.onPressLogIn.bind(this);
    this._unsubscribFocus=this.props.navigation.addListener('focus', e =>{BackHandler.addEventListener('hardwareBackPress',this.handleBackButton);
  });
    this._unsubscribBlur = this.props.navigation.addListener('blur',e =>{BackHandler.addEventListener('hardwareBackPress',this.handleBackButton);
  });
  }
  //component life cycle
  componentWillUnmount(){
    this._unsubscribFocus();
    this._unsubscribBlur();
    BackHandler.removeEventListener('hardwareBackPress',this.handleBackButton);
  }


  //mobile back press to call
  handleBackButton =()=>{
    BackHandler.exitApp()
    return true;
  }

  //check email validation
  setEmail(email){
    console.log('email',email);
    
    if(!email || email.length <= 0){
      return this.setState({usererror:'Email Id can not be empty', username : null}); 
    }else{
      return this.setState({username : email, usererror : null});
    }
    
  }

  //check password validation
  setPassword(password){
    console.log('password',password);
    if(!password || password.length <= 0){
      return this.setState({passworderror: 'password can not be empty'});
    }
    return this.setState({ password : password, passworderror : null});

  }

  //clear field data
  resetScreen(){
    this.setState({
      username : null,
      usererror : null,
      password : null,
      passworderror : null,
      loading :false
    })
  }

  //add local storage records
  authenticate_user = (user) =>(
    AsyncStorage.setItem(AUTHENTICATE_USER,JSON.stringify(user))
  )

  //Login button onpress
  onPressLogIn = async () =>{
    const {username,password} =this.state;

    if(!username || !password){
      this.setEmail(username);
      this.setPassword(password);
      return;
    }
  
    let user = username.trim();
    const body = {
      username : user,
      password : password
    }
    this.setState({loading:true});
    try{
      const response = await LoginService(body);
      if(response.data!=null && response.data!=undefined && response.status===200){
          let token = response.data.user._id;
          //set header authenticate user key
         axiosConfig(token);
         this.authenticate_user(response.data.user);
          this.setState({loading:false})
          if ( Platform.OS==='android'){
            ToastAndroid.show('Login Sucessfully!',ToastAndroid.LONG);
          }
         this.props.navigation.navigate(HOMESCREEN);
          return;
      }
    }catch(error){
     // console.log('error',error)
      this.setState({loading:false});
      this.resetScreen();
      if(Platform.OS==='android')
      {
        ToastAndroid.show('Username and Password Invalid',ToastAndroid.LONG);
      }
      else{
        alert('Username and Password Invalid!');
      }
    };
  }


  render(){
    const {loading,usererror,passworderror} = this.state;
    return(
      <SafeAreaView style={{flex:1}}>
        <ScrollView>
        <ImageBackground source={require('../../Images/bg.png')} resizeMode='cover' style={styles.imageBackground}>
          <View>
            <ImageBackground source={require('../../Images/vector.png')} resizeMode='contain' style={styles.image}/>
            <View style={styles.textView}>
                <Text style={styles.text}>Hi Teacher</Text>
                <Text style={{color:'#DCDCDC',fontSize:22,marginLeft:10}}>Sign in to continue</Text>
              </View>
  
              <View style={styles.viewBody}>
                     
                        <Text style={styles.textBody}>Mobile number/Email</Text>
                        <TextInput underlineColorAndroid={usererror == null ? '#A9A9A9' : '#FF0000'}
                        style={{marginLeft:30,marginRight:30}}
                        type='clear'
                        returnKeyType='next'
                        defaultValue={this.state.username}
          
                        onChangeText={(email)=>this.setEmail(email)}

                        />
                      <Text style={styles.textBody}>Password</Text>
                        <TextInput underlineColorAndroid={passworderror == null ? '#A9A9A9' : '#FF0000'}
                        secureTextEntry={true}
                        style={{marginLeft:30,marginRight:30}}
                        type='clear'
                        defaultValue={this.state.password}
                        returnKeyType='done'
                        onChangeText={(password)=>this.setPassword(password)} 
                        />
                 
                        
                        
                        <TouchableOpacity style={styles.signupButton} onPress={async()=>{this.onPressLogIn()}} >
                          <Text style={styles.signupButtonText}>SIGN IN</Text>
                        </TouchableOpacity>
  
          
                        <TouchableOpacity style={{alignItems:'flex-end',marginTop:10,marginBottom:HEIGHT}}>
                          <Text style={styles.forgot}>Forgot Password ?</Text>
                        </TouchableOpacity>
  
              </View>
          </View>  
        </ImageBackground>
        </ScrollView>
        {loading ? <Loader /> : null} 
      </SafeAreaView>     
    );
  }
}