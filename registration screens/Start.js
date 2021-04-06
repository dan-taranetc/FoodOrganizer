import React, {Component} from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class Starts extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../pngs/logo.jpg')} style={styles.logo}/>
                <Text style={styles.grit}>
                    Добро пожаловать в {'\n'} Food Organizer!
                </Text>
                <Text style={styles.instructions}>
                    Давайте пройдем регистрацию
                </Text>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignupNM')} style={styles.button}>
                    <Text style={styles.buttonText}>Начать</Text>
                </TouchableOpacity>
            </View>

        );
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
        bottom: '0%',
        width: 'auto',
        height: 'auto',
        textAlign: "center",
    },
    grit: {
        color: '#000000',
        top: '10%',
        fontFamily: 'Helvetica',
        textAlign: "center",
        fontSize: 25,
        width: 'auto',
        height: 'auto',
    },
    button: {
        backgroundColor: "#22A45D",
        borderRadius: 8,
        width: '80%',
        fontFamily: 'Helvetica',
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
    buttonText: {
        fontSize: 20,
        color: '#fff',
        alignSelf: "center",
        top: '25%',
    },
});