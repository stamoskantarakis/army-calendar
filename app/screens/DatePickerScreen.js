import React from 'react';
import  {View, Text, ImageBackground, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

function DatePickerScreen({ navigation, route  }) {
    return (
        <ImageBackground style={styles.imageStyle} source={require("../assets/background.jpg")}>
            <View >
                <Input  placeholder='INPUT WITH ICON'  leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imageStyle:{
        width:"100%", 
        height:"100%",
        justifyContent: 'center',
        backgroundColor:"#134c90",
        
    },
    basicBackground : {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: "column",
        backgroundColor: "#3396c1",
        

    },
})

export default DatePickerScreen;