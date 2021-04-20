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
import Soup from './registration screens/5 - soup.js';
import Drinks from './registration screens/5 - drinks.js';
import Desert from './registration screens/5 - desert.js';
import Allergies from './registration screens/6 - Allergies.js';
import Diseases from './registration screens/7 - Diseases.js';

import Settings from './registration screens/M4 - Settings.js';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

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
                    <Stack.Screen name="Soup" component={Soup}/>
                    <Stack.Screen name="Drinks" component={Drinks}/>
                    <Stack.Screen name="Desert" component={Desert}/>
                    <Stack.Screen name="Allergies" component={Allergies}/>
                    <Stack.Screen name="Diseases" component={Diseases}/>

                    <Stack.Screen name="Settings" component={Settings}/>
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