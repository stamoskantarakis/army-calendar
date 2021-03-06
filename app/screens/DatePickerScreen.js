import React, {useState} from 'react';
import  {View, Text, ImageBackground, StyleSheet, TextInput} from 'react-native';
import { Button, } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { daysInInput, daysOutInput, firstDateInput } from '../../Actions.js';


import DateTimePicker from '@react-native-community/datetimepicker';


function DatePickerScreen({ navigation, route  }) {
    const dispatch = useDispatch()
    const [date, setDate] = useState(new Date());
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

    return (
        <ImageBackground style={styles.imageStyle} source={require("../assets/background.jpg")}>
            <View style={{marginBottom: 50}}>
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
            <Button onPress={showDatepicker} title="Συνέχεια" type="solid" icon={{name: "arrow-right",type: 'font-awesome', size: 10, color: "white",}} iconRight="true" buttonStyle={styles.nextButton} titleStyle={styles.titleButton}
              onPress={() =>
                        onFinalButtonPress()}/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imageStyle:{
        display:"flex",
        textAlign:"center",
        justifyContent: 'center',
        width:"100%", 
        height:"100%",
        backgroundColor:"#008cd1",
        alignSelf: 'center',
        
    },
    basicBackground : {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: "column",
        backgroundColor: "#008cd1",
        
        
    },
    mainText:{
        display:"flex",
        justifyContent: "center",
        textAlign:"center",
        fontWeight: '700',
        fontFamily: 'Roboto',
        color:"white",
        marginTop: 40,
        fontSize: 15,
        fontStyle:'italic',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 3,
        alignSelf: 'center',
        
        
    },
    button:{
        marginTop:20,
        backgroundColor: "#008cd1",
        borderWidth: 1,
        borderColor:"black",
        width: 120,
        height:42,
        // display:"flex",
        // textAlign:"center",
        // justifyContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      
        

        
    },
    nextButton:{
        display:"flex",
        justifyContent: 'center',
        marginTop:30,
        backgroundColor: "#008cd1",
        borderWidth: 1,
        borderColor:"black",
        width: 120,
        height:42,
        justifyContent: 'center',
        alignSelf: 'center',

        
    },
    titleButton:{
        fontWeight: '600',
        color: '#fff',
        marginLeft: 12,
        fontSize: 14,
        fontFamily: 'Roboto',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 3,
        display:"flex",
        textAlign:"center",
        justifyContent: 'center',
        
        
    },
    input:{
        textAlign:"center",
        marginTop:20,
        color:"white",
        fontWeight:"bold",
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 3,
        justifyContent: 'center',
        alignSelf: 'center',
    },

})

export default DatePickerScreen;