import React, {useState} from 'react';
import  {View, Text, ImageBackground, StyleSheet, TextInput} from 'react-native';
import { Button, } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { daysInInput, daysOutInput, firstDateInput } from '../../Actions.js';


import DateTimePicker from '@react-native-community/datetimepicker';


function DatePickerScreen({ navigation, route  }) {
    const dispatch = useDispatch()
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [daysIn, onChangeDaysIn] = React.useState(null);
    const [daysOut, onChangeDaysOut] = React.useState(null);

    const onFinalButtonPress= () => {
        navigation.navigate('Result');
        dispatch(daysInInput(daysIn));
        dispatch(daysOutInput(daysOut));
        dispatch(firstDateInput(date));
    }
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };

   

    return (
        <ImageBackground style={styles.imageStyle} source={require("../assets/background.jpg")}>
            <View >
            <Text style={styles.mainText}> Πότε μπήκες στο στρατόπεδο?</Text>
            <Button onPress={showDatepicker} title="Επιλογή" type="solid" icon={{name: "calendar",type: 'font-awesome', size: 15, color: "white",}} iconRight="true" buttonStyle={styles.button} titleStyle={styles.titleButton}/>
            {show && (
            <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
            />
            )}
            <Text style={styles.mainText}> Πόσες μέρες θα είσαι μέσα?</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeDaysIn}
                value={daysIn}
                placeholder="Συμπλήρωσε"
                keyboardType="numeric"
            />
            <Text style={styles.mainText}> Πόσες μέρες θα είσαι έξω?</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeDaysOut}
                value={daysOut}
                placeholder="Συμπλήρωσε"
                keyboardType="numeric"
            />
             <Button onPress={showDatepicker} title="Συνέχεια" type="solid" icon={{name: "arrow-right",type: 'font-awesome', size: 10, color: "white",}} iconRight="true" buttonStyle={styles.button} titleStyle={styles.titleButton}
              onPress={() =>
                        onFinalButtonPress()}/>
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
    mainText:{
        fontWeight: '700',
        fontFamily: 'Roboto',
        textAlign:"center",
        color:"#0c62c9",
        marginTop: 15,
        fontSize: 15,
        right:4,
        fontStyle:'italic',
        
        
    },
    button:{
        marginTop:20,
        backgroundColor: "#0c62c5",
        borderBottomWidth: 0,
        borderBottomColor:"#0c62c5",
        width: 120,
        height:42,
        left:140,

        
    },
    titleButton:{
        fontWeight: '600',
        color: '#fff',
        marginLeft: 15,
        fontSize: 14,
        fontFamily: 'Roboto',
        
    },
    input:{
        marginTop:20,
        textAlign: "center",
        color:"#0c62c5"
    },

})

export default DatePickerScreen;