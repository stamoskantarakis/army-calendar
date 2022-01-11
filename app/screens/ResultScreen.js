import React from 'react';
import {StyleSheet, View, ImageBackground, Image, Button, Text, Platform, StatusBar, Modal} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { useSelector} from 'react-redux';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['gr'] = {
    monthNames: [
      'Ιανουάριος',
      'Φεβρουάριος',
      'Μάρτιος',
      'Απρίλιος',
      'Μάιος',
      'Ιούνιος',
      'Ιούλιος',
      'Αύγουστος',
      'Σεπτέμβριος',
      'Οκτώβριος',
      'Νοέμβριος',
      'Δεκέμβριος'
    ],
    monthNamesShort: ['Ιαν.', 'Φεβρ.', 'Μάρτ.', 'Απρ.', 'Μάιος.', 'Ιούνιος.', 'Ιούλ.', 'Αυγ.', 'Σεπτ.', 'Οκτ.', 'Νοέ.', 'Δεκ.'],
    dayNames: ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'],
    dayNamesShort: ['Κυρ.', 'Δευ.', 'Τρι.', 'Τετ.', 'Πέμ.', 'Παρ.', 'Σάβ.'],
    today: "Σημερινή Μέρα"
  };

  LocaleConfig.defaultLocale = 'gr';  

function ResultScreen({ navigation, route  }) {

  
    const daysIn = useSelector(state => state.reducer.daysIn);
    const daysOut = useSelector(state => state.reducer.daysOut);
    const firstDate = useSelector(state => state.reducer.firstDate);
    

    //Loop that creates the logic of the calendar
    let datesOfArmyCalendar = {};
    let numberOfDaysIn = parseInt(daysIn);
    let numberOfDaysOut = parseInt(daysOut);
    let date = new Date(firstDate);
    let newdateOfUser = new Date(date);
    for(let j=0; j<60; j++){
        for(let i=0; i<=numberOfDaysIn; i++){
            if(i===0){
                newdateOfUser.setDate(newdateOfUser.getDate());
            }
            else{
                newdateOfUser.setDate(newdateOfUser.getDate() + 1);
            }
            let temp = newdateOfUser.toISOString().substring(0, 10);
            datesOfArmyCalendar = {...datesOfArmyCalendar,[temp] :{disabled: true, startingDay: true, color: '#323131', endingDay: true}};
        }
        for(let i=0; i<=numberOfDaysOut; i++){
            if(i===0){
                newdateOfUser.setDate(newdateOfUser.getDate());
            }
            else{
                newdateOfUser.setDate(newdateOfUser.getDate() + 1);
            }
            let temp = newdateOfUser.toISOString().substring(0, 10);
            datesOfArmyCalendar = {...datesOfArmyCalendar,[temp] :{disabled: true, startingDay: true, color: '#008cd1', endingDay: true}};
        }

       
    }
   
    return (
        <ImageBackground style={styles.imageStyle} source={require("../assets/background.jpg")}>
            <View >
            <Calendar
                current={date}
                markingType={'period'}
                markedDates={datesOfArmyCalendar}
                style={{
                    borderWidth: 1,
                    borderColor: "#008cd1",
                    height: 380,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)'
                  }}
            />
            <Image
                        style={styles.underHeaderImage}
                        source={require(("../assets/calendar.png"))}
                    />
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
    underHeaderImage:{
        width:"40%", 
        height:"30%",
        left:120,
        marginBottom:20,
        marginTop:40
        
    },
    basicBackground : {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: "column",
        

    },
    backgroundImage:{
        height:1000, 
        width:1000,   
        
    },
    calendar:{
        marginTop: 120,
        height:400,
        borderBottomWidth:2,
        borderBottomColor:'#008cd1',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius : 4,
        opacity:0.8

        
    }
})



export default ResultScreen;