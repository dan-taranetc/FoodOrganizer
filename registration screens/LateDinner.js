import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
// import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
let customFonts = {
    'Lato-Black': require('../fonts/Lato/Lato-Black.ttf'),
    'Lato-Bold': require('../fonts/Lato/Lato-Bold.ttf'),
    'Lato-Regular': require('../fonts/Lato/Lato-Regular.ttf'),
    'Lato-Light': require('../fonts/Lato/Lato-Light.ttf'),
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
                    <Text style = {styles.text}>
                        Выберите время приема пищи:
                    </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Breakfast')} style={styles.button1}>
                        <Text style={styles.buttonText}>Завтрак</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Dinner')} style={styles.button2}>
                        <Text style={styles.buttonText}>Обед</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('LastDinner')} style={styles.button3}>
                        <Text style={styles.buttonText}>Ужин</Text>
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
    headn: {
        position: 'relative',
        fontFamily: 'Lato-Black',
        fontSize: 20,
        width: '70%',
        height: 'auto',
        textAlign: 'left',
        top: '13%',
        left: '-1%',
        color: '#22A45D'
    },
    text: {
        fontFamily: 'Lato-Bold',
        fontSize: 22,
        width: '90%',
        left: '0%',
        height: 'auto',
        textAlign: 'center',
        top: '0%',
    },
    button1: {
        backgroundColor: "#22A45D",
        borderRadius: 8,
        width: '30%',
        height: '8%',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25,
        bottom: '-1%',
        left: '-32%',
        top: '-11%'
    },
    button2: {
        backgroundColor: "#22A45D",
        borderRadius: 8,
        width: '30%',
        height: '8%',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        top: '-37.3%',
        shadowRadius: 10,
        shadowOpacity: 0.25,
        bottom: '-1%',
        left: '0%'
    },
    button3: {
        backgroundColor: "#0F713B",
        borderRadius: 8,
        width: '30%',
        height: '8%',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        top: '-63.5%',
        shadowRadius: 10,
        shadowOpacity: 0.25,
        bottom: '-1%',
        left: '32%'
    },
    buttonText: {
        fontSize: 22,
        fontFamily: 'Lato-Bold',
        color: '#fff',
        alignSelf: "center",
        textAlign: 'center',
        top: '38%',
    },
});
