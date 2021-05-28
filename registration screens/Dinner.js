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
    async dinner(login){
        let response = await fetch(global.url+'/get_diet', {
            method: 'POST',
            body: JSON.stringify({
                time: 2,
                login: login,
            })
        })
        if (response.ok) {
            let text = await response.json();
            console.log(text)
            // if (text.length !== 0){
            //     console.log('Person authorized')
            //     global.person = JSON.parse(JSON.stringify(text))
            //     this.props.navigation.navigate('MainScreen')
            // }else{
            //     console.log('Person send wrong log/pass')
            //     alert("Неправильно введен логин или пароль.")
            // }
        } else {
            console.log('Authorization server error')
            alert("Ошибка cервера: " + response.status + "\nПриносим извинения");
        }
    }

    componentDidMount() {
        this.dinner(global.person.Userdata.login)
        this._loadFontsAsync();
    }

    render() {
        if (this.state.fontsLoaded) {
            return (
                <View style={styles.container}>
                    <Text style = {styles.text}>
                        Выберите время приема пищи:
                    </Text>
                    <View style={styles.but}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Breakfast')} style={styles.button1}>
                            <Text style={styles.buttonText}>Завтрак</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Dinner')} style={styles.button2}>
                            <Text style={styles.buttonText}>Обед</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('LateDinner')} style={styles.button3}>
                            <Text style={styles.buttonText}>Ужин</Text>
                        </TouchableOpacity>
                    </View>
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
        fontSize: 20,
        width: '90%',
        left: '0%',
        height: 'auto',
        textAlign: 'center',
        top: '-10%',
    },
    but: {
        flexDirection: 'row',
        top: '-110%',
    },
    button1: {
        backgroundColor: "#22A45D",
        borderRadius: 8,
        width: '30%',
        height: '270%',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25,
        // bottom: '-1%',
        left: '-32%',
        // top: '-11%'
    },
    button2: {
        backgroundColor: "#0F713B",
        borderRadius: 8,
        width: '30%',
        height: '270%',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        // top: '-37.3%',
        shadowRadius: 10,
        shadowOpacity: 0.25,
        // bottom: '-1%',
        left: '0%'
    },
    button3: {
        backgroundColor: "#22A45D",
        borderRadius: 8,
        width: '30%',
        height: '270%',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        // top: '-63.5%',
        shadowRadius: 10,
        shadowOpacity: 0.25,
        // bottom: '-1%',
        left: '32%'
    },
    buttonText: {
        fontSize: 17,
        fontFamily: 'Lato-Bold',
        color: '#fff',
        alignSelf: "center",
        textAlign: 'center',
        top: '30%',
    },
});
