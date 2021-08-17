import React from 'react';
import {
    View,
    Image,
    SafeAreaView,
    ImageBackground,
    Dimensions,
    ScrollView
} from 'react-native';
import styles from './SchoolGalleryStyle'

const SchoolGalleryScreen = () =>{
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#6487C9'}}>
                <View style={styles.viewBackBody}>
                <ScrollView style={{marginTop:10}}>
                    <View style={{flexDirection:'row',marginBottom:150}}>
                    <View style={{margin:5}}>
                        <Image source={require('../../Images/galleryimage2.png')} style={styles.horizontalImage}/>
                        <Image source={require('../../Images/galleryimage1.png')} style={styles.verticalImage}/>
                        <Image source={require('../../Images/galleryimage2.png')} style={styles.horizontalImage}/>
                        <Image source={require('../../Images/galleryimage2.png')} style={styles.horizontalImage}/>
                    </View>
                    <View style={{margin:5,marginRight:30}}>
                        <Image source={require('../../Images/galleryimage1.png')} style={styles.verticalImage}/>
                        <Image source={require('../../Images/galleryimage2.png')} style={styles.horizontalImage}/>
                        <Image source={require('../../Images/galleryimage1.png')} style={styles.verticalImage}/>
                    </View>
                    </View>
                    
                </ScrollView>
                </View>
           
        </SafeAreaView>
    );
}

export default SchoolGalleryScreen;