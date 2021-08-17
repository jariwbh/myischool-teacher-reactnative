import React from 'react';
import {
    View,
    Image,
    SafeAreaView,
    TouchableOpacity,
    Text,TextInput
} from 'react-native';
import styles from './ChangePasswordStyle';

const ChangePasswordScreen = () =>{
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#6487C9'}}>
                    <View style={styles.viewBackBody}>

                        <Text style={styles.textBody}>Old Password</Text>
                        <TextInput underlineColorAndroid={'#A9A9A9'} style={{marginLeft:30,marginRight:30,fontSize:18}} />

                        <Text style={styles.textBody}>New Password</Text>
                        <TextInput underlineColorAndroid={'#A9A9A9'} style={{marginLeft:30,marginRight:30,fontSize:18}} />

                        <Text style={styles.textBody}>Retype Password</Text>
                        <TextInput  underlineColorAndroid={'#A9A9A9'} style={{marginLeft:30,marginRight:30,fontSize:18}} />

                        <TouchableOpacity style={styles.changePasswordButton} >
                            <Text style={styles.changePasswordButtonText}>CHANGE PASSWORD</Text>
                        </TouchableOpacity>
                        <View>
                            <Image style={styles.bottomImage} source={require('../../Images/1.png')}/>
                        </View>
                    </View>
        </SafeAreaView>
    );
}

export default ChangePasswordScreen;