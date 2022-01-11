import React from 'react';
import {StyleSheet, View, ImageBackground, Image, Text, Platform, StatusBar, ImageBackgroundBase} from 'react-native';
import { Button, Card } from 'react-native-elements';

function HomeScreen({ navigation, route }) {

    return (
        <ImageBackground style={styles.backgroundImageStyle} source={require("../assets/background.jpg")}>
                <View style={styles.aboveButton}>
                    <Image
                        style={styles.underHeaderImage}
                        source={require(("../assets/calendar.png"))}
                    />
                    <Text style={styles.mainText}> Δημιούργησε με το πάτημα ενος κουμπιού το προσωπικό σου ημερολόγιο και προγραμμάτισε τις επόμενες σου διακοπές!</Text>
                    <Button  title="Συνέχεια" type="solid" icon={{name: "arrow-right", size: 25, color: "white",}} iconRight="true" buttonStyle={styles.button} titleStyle={styles.titleButton} onPress={() =>
                        navigation.navigate('DatePicker')}/>
                        
                </View>
        </ImageBackground>       
    );
}

const styles = StyleSheet.create({
    backgroundImageStyle:{
        width:"100%", 
        height:"100%",
        justifyContent: 'center',
        backgroundColor:"#134c90",
        
    },
    underHeaderImage:{
        width:"100%", 
        height:"45%",
        left:0,
        marginBottom:20,
        marginTop:20
        
    },
    button:{
        marginTop:50,
        backgroundColor: "#008cd1",
        borderWidth: 1,
        borderColor:"black",
        width: 120,
        left:60
        
    },
    titleButton:{
        fontWeight: '600',
        color: '#fff',
        marginLeft: 20,
        fontSize: 15,
        fontFamily: 'Roboto',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 3
        
    },
    aboveButton:{
             width:"60%",
             left:80
             
    },
    mainText:{
        fontWeight: '700',
        fontFamily: 'Roboto',
        textAlign:"center",
        color:"white",
        marginTop: 10,
        fontSize: 15,
        right:4,
        fontStyle:'italic',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 3
        
        
    }

})

export default HomeScreen;