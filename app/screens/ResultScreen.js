import React from 'react';
import {StyleSheet, View, ImageBackground, Button, Text, Platform, StatusBar, Modal} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { useSelector} from 'react-redux';

function ResultScreen({ navigation, route  }) {

  
    const daysIn = useSelector(state => state.reducer.daysIn);
    const daysOut = useSelector(state => state.reducer.daysOut);
    const firstDate = useSelector(state => state.reducer.firstDate);
    

    //Loop that creates the logic of the calendar

    let numberOfDaysToAdd = parseInt(daysIn);
    let date = new Date(firstDate);
    let newdateOfUser = new Date(date);
    newdateOfUser.setDate(newdateOfUser.getDate() + numberOfDaysToAdd);
    console.log(newdateOfUser.toString);
    
    const temp = newdateOfUser.toISOString().substring(0, 10);
    console.log(temp);



    //Helpful Logic
    const test = {
        [temp] :{disabled: true, startingDay: true, color: 'green', endingDay: true}
    };
    const test1 = {
        "2021-12-20" :{disabled: true, startingDay: true, color: 'red', endingDay: true}
    };
    const datesOfArmyCalendar = Object.assign({},test,test1)
    //

    return (
        <ImageBackground style={styles.imageStyle} source={require("../assets/background.jpg")}>
            <View >
            <Calendar
                markingType={'period'}
                markedDates={datesOfArmyCalendar}
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
        borderBottomColor:'#011f4b',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius : 4,
        opacity:0.8

        
    }
})



export default ResultScreen;