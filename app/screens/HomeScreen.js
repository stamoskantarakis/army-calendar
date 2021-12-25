import React from 'react';
import {StyleSheet, View, ImageBackground, Image, Text, Platform, StatusBar, ImageBackgroundBase} from 'react-native';
import { Button } from 'react-native-elements';
import { BackgroundImage } from 'react-native-elements/dist/config';
import Icon from 'react-native-vector-icons/FontAwesome';


function HomeScreen({ navigation, route }) {

    return (
        <ImageBackground style={styles.imageStyle} source={require("../assets/backeagle.jpg")}>
                <View style={styles.aboveButton}>
                    <Text style={styles.mainText}> Σκέφτεσαι τις Χριστουγενίατικες Διακοπές σου αλλά δεν γνωρίζεις αν θα έχεις υπηρεσία στο στρατόπεδο?</Text>
                    <Icon name='check-circle'  type='font-awesome'  color='#011f4b' style={{textAlign:'center', marginTop:30, fontSize:20}} />
                    <Text style={styles.mainText}> Βαριέσαι να κάνεις τους υπολογίσμους αφού σε παει 3 ΜΕΣΑ και 13 ΕΞΩ?</Text>
                    <Icon name='check-circle'  type='font-awesome'  color='#011f4b' style={{textAlign:'center', marginTop:30, fontSize:20}} />
                    <Text style={styles.mainText}> Εαν βρίσκεσαι σε μονάδα στην οποία οι υπηρεσίες ειναί σταθερές όλων τον χρόνο τοτε πάτε το κουμπί συμπλήρωσε τα κατάλληλα κενά και βρές αυτό που ψάχνεις!</Text>
                    <Icon name='arrow-down'  type='font-awesome'  color='#011f4b' style={{textAlign:'center', marginTop:30, fontSize:20}} />
                    <Button  title="Συνέχεια" type="solid" icon={{name: "arrow-right", size: 30, color: "white",}} iconRight="true" buttonStyle={styles.button} titleStyle={styles.titleButton} onPress={() =>
                        navigation.navigate('DatePicker')}/>

                </View>
        </ImageBackground>       
    );
}

const styles = StyleSheet.create({
    imageStyle:{
        flex:1,
        
        width:415, 
        height:800,
        justifyContent: 'center',
        flexDirection: "column",
        backgroundColor:"#134c90"
    },
    button:{
        marginTop:250,
        backgroundColor: "#011f4b",
        borderBottomWidth: 2,
        borderBottomColor:"#011f4b",
        width: 400
        
    },
    titleButton:{
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 20
        
    },
    aboveButton:{
        position:"absolute",
        left:5
        
    },
    mainText:{
        fontWeight: 'bold',
        textAlign: "center",
        color:"#011f4b",
        marginTop: 30,
        fontSize: 16,
        right:8,
        fontStyle:'italic'
    }

})

export default HomeScreen;