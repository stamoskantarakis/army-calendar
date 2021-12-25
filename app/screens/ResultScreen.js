import React from 'react';
import {StyleSheet, View, ImageBackground, Button, Text, Platform, StatusBar, Modal} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


function ResultScreen({ navigation, route  }) {
    return (
        <View style={styles.basicBackground}>
            <ImageBackground style={styles.backgroundImage} source={require('../assets/backeagle.jpg')}>
                
            <Calendar
             style={styles.calendar}
             current={'2021-03-01'}
             // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
             minDate={'2021-05-10'}
             // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
             maxDate={'2022-05-30'}
             // Handler which gets executed on day press. Default = undefined
             onDayPress={(day) => {console.log('selected day', day)}}
             // Handler which gets executed on day long press. Default = undefined
             onDayLongPress={(day) => {console.log('selected day', day)}}
             // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
             monthFormat={'yyyy MM'}
             // Handler which gets executed when visible month changes in calendar. Default = undefined
             onMonthChange={(month) => {console.log('month changed', month)}}
             // Hide month navigation arrows. Default = false
             hideArrows={true}
             // Replace default arrows with custom ones (direction can be 'left' or 'right')
             renderArrow={(direction) => (<Arrow/>)}
             // Do not show days of other months in month page. Default = false
             hideExtraDays={false}
             // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
             // day from another month that is visible in calendar page. Default = false
             disableMonthChange={false}
             // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
             firstDay={1}
             // Hide day names. Default = false
             hideDayNames={false}
             // Show week numbers to the left. Default = false
             showWeekNumbers={false}
             // Handler which gets executed when press arrow icon left. It receive a callback can go back month
             onPressArrowLeft={subtractMonth => subtractMonth()}
             // Handler which gets executed when press arrow icon right. It receive a callback can go next month
             onPressArrowRight={addMonth => addMonth()}
             // Disable left arrow. Default = false
             disableArrowLeft={true}
             // Disable right arrow. Default = false
             disableArrowRight={true}
             // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
             disableAllTouchEventsForDisabledDays={true}
             // Replace default month and year title with custom one. the function receive a date as parameter
             renderHeader={(date) => {/*Return JSX*/}}
             // Enable the option to swipe between months. Default = false
             enableSwipeMonths={true}
             theme={{
                backgroundColor: '#011f4b',
                calendarBackground: '#011f4b',
                textSectionTitleColor: 'red',
                textSectionTitleDisabledColor: 'red',
                selectedDayBackgroundColor: 'red',
                selectedDayTextColor: 'red',
                todayTextColor: 'red',
                dayTextColor: 'red',
                textDisabledColor: 'red',
                dotColor: '#00adf5',
                selectedDotColor: 'red',
                arrowColor: 'orange',
                disabledArrowColor: '#d9e1e8',
                monthTextColor: '#011f4b',
                indicatorColor: '#011f4b',
                textDayFontFamily: 'monospace',
                textMonthFontFamily: 'monospace',
                textDayHeaderFontFamily: 'monospace',
                textDayFontWeight: '300',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: '300',
                textDayFontSize: 16,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 16,
                

              }}
 
/>
                
        
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
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