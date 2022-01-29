import React from 'react';
import {StyleSheet, View, ImageBackground, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';
import { useSelector} from 'react-redux';
import { Button} from 'react-native-elements';
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
    let loops = 365/(numberOfDaysOut+numberOfDaysIn);

    for(let j=0; j<loops; j++){
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
            <Text style={styles.mainText}>Με μαύρο εμφανίζονται οι μέρες που βρίσκεσαι μέσα στο στρατόπεδο ενώ με μπλε αυτές που είσαι εκτός!</Text>
            <Calendar
                current={date}
                markingType={'period'}
                markedDates={datesOfArmyCalendar}
                style={{
                    height: 400,
                    backgroundColor: "white",
                    marginBottom:30,
                    borderBottomColor:"#011f4b",
                    borderBottomWidth:2,
                    borderTopColor:"#011f4b",
                    borderTopWidth:2
                    
                    
                  }}
            />
             <Button  title="Πίσω στην αρχική" type="solid" icon={{name: "arrow-left", size: 25, color: "white",}} iconLeft="true" buttonStyle={styles.button} titleStyle={styles.titleButton} onPress={() =>
                        navigation.navigate('Home')}/>
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
    button:{
        marginTop:10,
        marginBottom:20,
        backgroundColor: "#008cd1",
        borderWidth: 1,
        borderColor:"black",
        width: 200,
        marginHorizontal: 105,
        
    },
    titleButton:{
        fontWeight: '600',
        color: '#fff',
        marginRight:20,
        fontSize: 15,
        fontFamily: 'Roboto',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 3
        
    },
    mainText:{
        fontWeight: '700',
        fontFamily: 'Roboto',
        textAlign:"center",
        color:"white",
        marginBottom: 30,
        fontSize: 15,
        fontStyle:'italic',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 3
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
})



export default ResultScreen;