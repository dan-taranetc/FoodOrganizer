import React, {Component} from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

let customFonts = {
    'Lato-Black': require('../fonts/Lato/Lato-Black.ttf'),
    'Lato-Bold': require('../fonts/Lato/Lato-Bold.ttf'),
    'Lato-Regular': require('../fonts/Lato/Lato-Regular.ttf'),
};


export default class Starts extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

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
        if (this.state.fontsLoaded) {
            return (
                <View style={styles.container}>
                    <Image source={require('../pngs/logo.jpg')} style={styles.logo}/>
                    <Text style={styles.grit}>
                        ДОБРО ПОЖАЛОВАТЬ В {'\n'} FOOD ORGANIZER!
                    </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Registration')} style={styles.button_registration}>
                        <Text style={styles.buttonText}>РЕГИСТРАЦИЯ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Authorization')} style={styles.button}>
                        <Text style={styles.buttonText}>ВХОД</Text>
                    </TouchableOpacity>
                </View>

            );
        } else {
            return <AppLoading />;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-around',
    },
    logo: {
        width: 305,
        height: 209,
        top : '10%',
        left: '2%'
    },
    instructions: {
        color: '#888',
        fontSize: 20,
        fontFamily: 'Lato-Regular',
        bottom: '0%',
        width: 'auto',
        height: 'auto',
        textAlign: "center",
    },
    grit: {
        color: '#000000',
        top: '10%',
        fontFamily: 'Lato-Black',
        textAlign: "center",
        fontSize: 25,
        width: 'auto',
        height: 'auto',
    },
    button: {
        backgroundColor: "#22A45D",
        borderRadius: 8,
        width: '80%',
        height: '6%',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25,
        bottom: '-1%',
    },
    button_registration:{
        backgroundColor: "#22A45D",
        borderRadius: 8,
        width: '80%',
        height: '6%',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25,
        bottom: '-10%',
    },
    buttonText: {
        fontFamily: 'Lato-Black',
        fontSize: 14,
        color: '#fff',
        alignSelf: "center",
        top: '30%',
    },
});