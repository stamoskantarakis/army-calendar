import React from 'react';
import  {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';import { Input } from 'react-native-elements';

function DatePickerScreen({ navigation, route  }) {
    return (
        <View style={styles.basicBackground}><Input  placeholder='INPUT WITH ICON'  leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}/></View>
    );
}

const styles = StyleSheet.create({
    basicBackground : {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: "column",
        backgroundColor: "#3396c1",
        

    },
})

export default DatePickerScreen;