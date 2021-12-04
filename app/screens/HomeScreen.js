import React from 'react';
import {StyleSheet, View, ImageBackground, Image, Text, Platform, StatusBar, Alert} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.basicBackground}>
            <ImageBackground style={styles.backgroundImage} source={require('../assets/backeagle.jpg')}>
                {/* <Image style={styles.logo} source={require('../assets/eagle.png')}/> */}
                <View style={styles.basicBackground}>
                    <View style={styles.textBox}>
                        <Text style={styles.mainText}>Σκέφτεσαι τις Χριστουγενίατικες Διακοπές σου αλλά δεν γνωρίζεις αν θα έχεις υπηρεσία στο στρατόπεδο? </Text>
                        <Text style={styles.mainText}>Βαριέσαι να κάνεις τους υπολογίσμους αφού σε παει 3 ΜΕΣΑ και 13 ΕΞΩ?</Text>
                        <Text style={styles.mainText}>Είμαστε εδώ για εσένα ρε Νέωπα. Πάτα το κουμπι και λύσε ζυγούς!</Text>
                        <Button  title="Συνέχεια" type="solid" buttonStyle={styles.button} titleStyle={styles.titleButton} onPress={() =>
                         navigation.navigate('Result')
                 } />
                    </View>
                </View>
                    {/* <Button title="Ε ΤΟΤΕ ΜΑΘΕ ΡΕ ΒΥΣΜΑΤΙΑ" style={styles.button}></Button>     */}
                
        
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    basicBackground : {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: "column"
        
    },
    backgroundImage:{
        height:1000, 
        width:1000,
        
        
        
    },
    logo:{
        position:"relative",
        top:280,
        left:295,
        height:450, 
        width:400,
    },
    mainText:{
        marginTop:80,
        textAlign:"center",
        fontWeight:"bold",
        color:"black",
	    fontSize: 18, color: '#fdc70a', textShadowColor: 'black', textShadowRadius: 1, textShadowOffset: { 
            width: 3,
            height: 2
        }
        
        
    },
    textBox:{
        flex:1,
        color:"black",
        position:"relative",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        width:250,
        marginTop: 100
        
    },
    button:{
        marginTop: 80,
        backgroundColor: "#20429b",
        borderBottomWidth: 2,
        borderBottomColor:"#fdc70a",
        
    },
    titleButton:{
        fontWeight: 'bold',
        color: '#fdc70a'
    }

})

export default HomeScreen;