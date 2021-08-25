import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Dimensions,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const HEIGHT=Dimensions.get('window').height;
const WIDTH=Dimensions.get('window').width;

const CircularScreen = (props) =>{
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#6487C9'}}>
            <View style={styles.viewBackBody}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('CircularDetailScreen')}>  
                <View style={styles.viewCircularList}>
                    <Text style={styles.headerText}>Sleepover Night</Text>
                    <View style={{flexDirection:'row'}}>
                        <Image style={styles.image} source={require('../../Images/dp_bg.png')}/>
                        <Icon name='clock' size={20} color='#6487C9'></Icon>
                        <Text style={{color:'#6487C9',fontSize:16,marginLeft:5,marginTop:-2}}>06 Jan 21, 09:00am</Text>
                        <Text multiline style={{marginTop:25,marginLeft:-162,marginRight:300,color:'#727272',}}>Silver sands middle school in port Orange,Florida,offer many special events,</Text>
                    </View>
                </View>
                </TouchableOpacity>
                
                <TouchableOpacity>
                <View style={styles.viewCircularList}>
                    <Text style={styles.headerText}>Fishing Tournament</Text>
                    <View style={{flexDirection:'row'}}>
                        <Image style={styles.image} source={require('../../Images/dp_bg.png')}/>
                        <Icon name='clock' size={20} color='#6487C9'></Icon>
                        <Text style={{color:'#6487C9',fontSize:16,marginLeft:5,marginTop:-2}}>12 Jan 21, 09:00am</Text>
                        <Text multiline style={{marginTop:25,marginLeft:-162,marginRight:300,color:'#727272',textAlign:'justify'}}>Silver sands middle school in port Orange,Florida,offer many special events,</Text>

                    </View>
                </View>
                </TouchableOpacity>

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
    viewCircularList:{
        borderColor:'#727272',
        borderWidth:1,
        height:HEIGHT/4,
        width:WIDTH-50,
        borderRadius:15,
        margin:20,
        marginBottom:-5,
    },
    headerText:{
        alignItems:'flex-start',
        fontSize:15,
        fontWeight:'bold',
        margin:15
    },
    image:{
        height:100,
        width:100,
        margin:15,
        marginTop:-5
    }
});

export default CircularScreen;