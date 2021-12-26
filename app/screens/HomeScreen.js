import React from 'react';
import {StyleSheet, View, ImageBackground, Image, Text, Platform, StatusBar, ImageBackgroundBase} from 'react-native';
import { Button, Card } from 'react-native-elements';
import { BackgroundImage } from 'react-native-elements/dist/config';
import Icon from 'react-native-vector-icons/FontAwesome';


function HomeScreen({ navigation, route }) {

    return (
        <ImageBackground style={styles.imageStyle} source={require("../assets/background.jpg")}>
                <View style={styles.aboveButton}>
                    <Image
                        style={styles.eagleLogo}
                        source={require(("../assets/calendar.png"))}
                    />
                    <Text style={styles.mainText}> Σκέφτεσαι τις Χριστουγενίατικες Διακοπές σου αλλά δεν γνωρίζεις αν θα έχεις υπηρεσία στο στρατόπεδο?</Text>
                    <Icon name='check-circle'  type='font-awesome'  color='#134c90' style={{textAlign:'center', marginTop:20, fontSize:25}} />
                    <Text style={styles.mainText}> Βαριέσαι να κάνεις τους υπολογίσμους αφού σε παει 3 ΜΕΣΑ και 13 ΕΞΩ?</Text>
                    <Icon name='check-circle'  type='font-awesome'  color='#134c90' style={{textAlign:'center', marginTop:20, fontSize:25}} />
                    <Text style={styles.mainText}> Τότε πάτα το κουμπί, συμπλήρωσε τα κενά και δημιούργησε το δικό σου ημερολόγιο!</Text>
                    <Button  title="Συνέχεια" type="solid" icon={{name: "arrow-right", size: 30, color: "white",}} iconRight="true" buttonStyle={styles.button} titleStyle={styles.titleButton} onPress={() =>
                        navigation.navigate('DatePicker')}/>
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
    eagleLogo:{
        width:"46%", 
        height:"30%",
        left:110,
        marginBottom:20,
        marginTop:20
        
    },
    button:{
        marginTop:50,
        backgroundColor: "#134c90",
        borderBottomWidth: 0,
        borderBottomColor:"#134c90",
        width: 200,
        left:110
        
    },
    titleButton:{
        fontWeight: '600',
        color: '#fff',
        marginLeft: 20,
        fontSize: 15,
        fontFamily: 'Roboto',
        
    },
    aboveButton:{
             marginBottom:50
    },
    mainText:{
        fontWeight: '600',
        fontFamily: 'Roboto',
        textAlign:"center",
        color:"#011f4b",
        marginTop: 10,
        fontSize: 15,
        right:4,
        fontStyle:'italic',
        
    }

})

export default HomeScreen;