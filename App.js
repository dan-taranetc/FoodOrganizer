import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Start from './registration screens/1 - Start.js';
import SignupAwh from './registration screens/3 - SignupAwh.js';
import Registration from './registration screens/2 - Registration.js';
import Authorization from './registration screens/2.1 - Authorization.js';
import Endfirst from './registration screens/4 - End1.js';
import SignupVariaty from './registration screens/5 - SignupVariaty.js';
import Zavtrak from './registration screens/5 - zavtrak.js';
import Fish from './registration screens/5 - fish.js';
import Garnish from './registration screens/5 - garnish.js';
import Meat from './registration screens/5 - meat.js';
import Ovoshi from './registration screens/5 - ovoshi.js';
import Fruits from './registration screens/5 - fruits.js';
import Drinks from './registration screens/5 - drinks.js';
import Desert from './registration screens/5 - desert.js';
import Allergies from './registration screens/6 - Allergies.js';
import Diseases from './registration screens/7 - Diseases.js';
import MainScreen from './registration screens/MainScreen.js';
import Settings from './registration screens/M4 - Settings.js';
import SelfCooking from './registration screens/SelfCooking - 1.js';
import Breakfast from './registration screens/Breakfast.js';
import Dinner from './registration screens/Dinner.js';
import LateDinner from './registration screens/LateDinner.js';
import Receipt from './registration screens/Receipt.js';
import 'react-native-gesture-handler';
const Stack = createStackNavigator();

global.url = 'http://6f9c83d07eab.ngrok.io'
global.breakfast = ''
global.receipt = ''
global.person = {
    "Userdata": {
        "login": "",
        "password": "",
        "sex": "",
        "age": "",
        "weight": "",
        "height": "",
        "calories": "0",
    },
    "Kuritsa": "-",
    "Baranina": "-",
    "Bekon": "-",
    "Farsh": "-",
    "Govyadina": "-",
    "Indeyka": "-",
    "Kolbasa": "-",
    "Pechen'": "-",
    "Sosiski": "-",
    "Svinina": "-",
    "Yajco": "-",

    "Krabovye Palochki": "-",
    "Losos": "-",
    "Seld": "-",
    "Tunec": "-",

    "Inzhir": "-",
    "Grusha": "-",
    "Avokado": "-",
    "Izyum": "-",
    "Banany": "-",
    "CHernosliv": "-",
    "Limon": "-",
    "Kuraga": "-",

    "Brokkoli": "-",
    "CHereshok sel'dereya": "-",
    "CHesnok": "-",
    "Fasol'": "-",
    "Kabachok": "-",
    "Kartofel": "-",
    "Kapusta": "-",
    "Kukuruza": "-",
    "Luk": "-",
    "Morkov'": "-",
    "Ogurec": "-",
    "Ogurec marinovannyj": "-",
    "Ogurec solenyj": "-",
    "Perec": "-",
    "Perec zelenyj": "-",
    "Petrushka": "-",
    "Salat": "-",
    "Shpinat": "-",
    "Sparzha": "-",
    "Svekla": "-",
    "TomPasta": "-",
    "Tomaty": "-",
    "Ukrop": "-",
    "Zel.Goroshek": "-",
    "zelen'": "-",
    "Zelenyj luk": "-",

    "Grechka": "-",
    "Makarony": "-",
    "Manka": "-",
    "Perlovka": "-",
    "Ris": "-",

    "Griby": "-",

    "Jogurt": "-",
    "Moloko": "-",
    "Tvorog": "-",
    "Syr": "-",
    "Smetana": "-",

    "Kesh'yu": "-",

    "Klyukva": "-",

    "Korica": "-",
    "Krahmal": "-",
    "Lavrovyj list": "-",
    "Majonez": "-",
    "Maslo": "-",
    "Maslo olivk.": "-",
    "Maslo pods.": "-",
    "Razryhlitel' testa": "-",
    "Sahar": "-",
    "Sol'": "-",
    "Sous soevyj": "-",
    "Specii": "-",
    "Uksus": "-",
    "Muka": "-",

    "Voda": "-",
    "Juice": "-",
    "Tea": "-",
    "Coffee": "-",
    "Cocoa": "-",
    "Milk": "-",

    "gastritis" : "-",
    "stomach_ulcer":  "-",
    "intestine_ulcer": "-",
    "pancreatitis": "-",
    "diabetes": "-",

    "milk_product": "-",
    "wheat": "-",
    "citrus": "-",
    "meat_product": "-",
    "fish_product": "-",
    "nut": "-"
};

class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode={'none'}>
                    <Stack.Screen name="Start" component={Start}/>
                    <Stack.Screen name="Registration" component={Registration}/>
                    <Stack.Screen name="Authorization" component={Authorization}/>
                    <Stack.Screen name="SignupAwh" component={SignupAwh}/>
                    <Stack.Screen name="Endfirst" component={Endfirst}/>
                    <Stack.Screen name="SignupVariaty" component={SignupVariaty}/>
                    <Stack.Screen name="Zavtrak" component={Zavtrak}/>
                    <Stack.Screen name="Fish" component={Fish}/>
                    <Stack.Screen name="Garnish" component={Garnish}/>
                    <Stack.Screen name="Meat" component={Meat}/>
                    <Stack.Screen name="Ovoshi" component={Ovoshi}/>
                    <Stack.Screen name="Fruits" component={Fruits}/>
                    <Stack.Screen name="Drinks" component={Drinks}/>
                    <Stack.Screen name="Desert" component={Desert}/>
                    <Stack.Screen name="Allergies" component={Allergies}/>
                    <Stack.Screen name="Diseases" component={Diseases}/>
                    <Stack.Screen name="MainScreen" component={MainScreen}/>
                    <Stack.Screen name="Settings" component={Settings}/>
                    <Stack.Screen name="SelfCooking" component={SelfCooking}/>
                    <Stack.Screen name="Breakfast" component={Breakfast}/>
                    <Stack.Screen name="Dinner" component={Dinner}/>
                    <Stack.Screen name="LateDinner" component={LateDinner}/>
                    <Stack.Screen name="Receipt" component={Receipt}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
});
