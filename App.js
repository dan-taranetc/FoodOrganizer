import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import Start from './registration screens/1 - Start.js';
import Registration from './registration screens/2 - Registration.js';
import Authorization from './registration screens/2.1 - Authorization.js';
import SignupNM from './registration screens/2 - SignupNM.js';
import SignupAwh from './registration screens/3 - SignupAwh.js';
import Endfirst from './registration screens/4 - End1.js';
import Settings from './registration screens/10 - Settings.js';
import SignupVariaty from './registration screens/5 - SignupVariaty.js';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

class App extends React.Component {
    state = {
        fontsLoaded: false,
    };

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync();
    }

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode={'none'}>
                    <Stack.Screen
                        name="Start"
                        component={Start}
                    />
                    <Stack.Screen
                        name="Registration"
                        component={Registration}
                    />
                    <Stack.Screen
                        name="Authorization"
                        component={Authorization}
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
                    <Stack.Screen
                        name="SignupVariaty"
                        component={SignupVariaty}
                    />
                    <Stack.Screen
                        name="Settings"
                        component={Settings}
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
