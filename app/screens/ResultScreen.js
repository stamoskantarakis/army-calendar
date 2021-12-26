import React from 'react';
import {StyleSheet, View, ImageBackground, Button, Text, Platform, StatusBar, Modal} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { useSelector} from 'react-redux';

function ResultScreen({ navigation, route  }) {
    const test = useSelector(state => state.reducer.daysIn);
    const test1 = useSelector(state => state.reducer.daysOut);
    const test2 = useSelector(state => state.reducer.firstDate);
    console.log(test);
    console.log(test1);
    console.log(test2);



    return (
        <ImageBackground style={styles.imageStyle} source={require("../assets/background.jpg")}>
            <View >
            <Calendar
                markingType='multi-period'
                markedDates={{
                  '2021-12-14': {
                    periods: [
                      {startingDay: false, endingDay: true, color: '#5f9ea0'},
                      {startingDay: false, endingDay: true, color: '#ffa500'},
                      {startingDay: true, endingDay: false, color: '#f0e68c'}
                    ]
                  },
                  '2021-12-15': {
                    periods: [
                      {startingDay: true, endingDay: false, color: '#ffa500'},
                      {color: 'transparent'},
                      {startingDay: false, endingDay: false, color: '#f0e68c'}
                    ]
                  }
                }}
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