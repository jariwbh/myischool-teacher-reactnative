import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,
} from 'react-native';
import Icons from '../../components/Icons';
import styles from './MyProfileScreenStyle';

const MyprofileScreen = () =>{
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#6284C8'}}>
            <ScrollView>
                <View style={styles.viewBackBody}>
                    <TouchableOpacity>
                        <View style={styles.horizontalRectangle}>
                            <Image source={require('../../Images/dp_bg.png')} style={styles.profileImage}/>
                            <Text style={{fontSize:20,fontWeight:'bold',marginLeft:15,marginTop:20}}>Akshy Syal</Text>
                            <Icons/> 
                        </View>
                    </TouchableOpacity>
                    
                        <View style={styles.viewTextBody}>
                            <Text style={styles.textstyle}>Adhar No</Text>
                            <TextInput underlineColorAndroid={'#A9A9A9'} style={styles.textInput} />

                            <Text style={styles.textstyle}>Academic Year</Text>
                            <TextInput underlineColorAndroid={'#A9A9A9'} style={styles.textInput} />

                            <Text style={styles.textstyle}>Date of Birth</Text>
                            <TextInput underlineColorAndroid={'#A9A9A9'} style={styles.textInput} />

                            <Text style={styles.textstyle}>Parent Mail ID</Text>
                            <TextInput underlineColorAndroid={'#A9A9A9'} style={styles.textInput} />
                        
                            <Text style={styles.textstyle}>Mother Name</Text>
                            <TextInput underlineColorAndroid={'#A9A9A9'} style={styles.textInput} />

                            <Text style={styles.textstyle}>Father Name</Text>
                            <TextInput underlineColorAndroid={'#A9A9A9'} style={styles.textInput} />

                            <Text style={styles.textstyle}>Permanent Address</Text>
                            <TextInput underlineColorAndroid={'#A9A9A9'} style={styles.textInput} />
                        </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default MyprofileScreen;