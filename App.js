import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './registration screens/Start.js';
import SignupNM from './registration screens/SignupNM.js';
import SignupAwh from './registration screens/SignupAwh.js';
import Endfirst from './registration screens/End1.js';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode={'none'}>
                    <Stack.Screen
                        name="Start"
                        component={Start}
                    />
                    <Stack.Screen
                        name="SignupNM"
                        component={SignupNM}

                    />
                    <Stack.Screen
                        name="SignupAwh"
                        component={SignupAwh}

                    />
                    <Stack.Screen
                        name="Endfirst"
                        component={Endfirst}

                    />
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