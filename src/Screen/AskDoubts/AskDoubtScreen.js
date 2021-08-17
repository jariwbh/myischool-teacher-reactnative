import React from 'react';
import {
    View,
    Image,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Text,TextInput
} from 'react-native';
import styles from './AskDoubtStyle'

const HEIGHT=Dimensions.get('window').height;
const WIDTH=Dimensions.get('window').width;

const AskDoubtScreen = () =>{
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#6586C6'}}>
                    <View style={styles.viewBackBody}>

                        <Text style={styles.textBody}>Class Teacher</Text>
                        <TextInput underlineColorAndroid={'#A9A9A9'} style={{marginLeft:30,marginRight:30,fontSize:18}} />

                        <Text style={styles.textBody}>Application Title</Text>
                        <TextInput underlineColorAndroid={'#A9A9A9'} style={{marginLeft:30,marginRight:30,fontSize:18}} />

                        <Text style={styles.textBody}>Description</Text>
                        <TextInput multiline  underlineColorAndroid={'#A9A9A9'} style={{marginLeft:30,marginRight:30,fontSize:18}} />

                        <TouchableOpacity style={styles.sendRequestButton} >
                            <Text style={styles.sendRequestButtonText}>SEND REQUEST</Text>
                        </TouchableOpacity>
                        <View>
                            <Image style={styles.bottomImage} source={require('../../Images/1.png')}/>
                        </View>
                    </View>
        </SafeAreaView>
    );
}

export default AskDoubtScreen;