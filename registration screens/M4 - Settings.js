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
                    <Text style = {styles.headn}>
                        НАСТРОЙКИ
                    </Text>
                    <View
                        style={[styles.box1, { backgroundColor: "rgba(52, 52, 52, 0.2)" }]}
                    />
                    <Text style = {styles.text1}>
                        Имя:
                    </Text>
                    <View
                        style={[styles.box2, { backgroundColor: "rgba(52, 52, 52, 0.2)" }]}
                    />
                    <Text style = {styles.text2}>
                        Рост:
                    </Text>

                    <View
                        style={[styles.box3, { backgroundColor: "rgba(52, 52, 52, 0.2)" }]}
                    />
                    <Text style = {styles.text3}>
                        Вес:
                    </Text>

                    <View
                        style={[styles.box4, { backgroundColor: "rgba(52, 52, 52, 0.2)" }]}
                    />
                    <Text style = {styles.text4}>
                        Email:
                    </Text>
                    <Text style = {styles.text}>
                        Вас не устраивает выбор исключенных продуктов?
                    </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SignupVariaty')} style={styles.button}>
                        <Text style={styles.buttonText}>ПРОЙТИ РЕГИСТРАЦИЮ ЗАНОВО</Text>
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
        top: '11%',
        left: '1%',
        color: '#22A45D'
    },
    box1: {
        width: '70%',
        height: '7%',
        left: '0%',
        top: '10%',
        borderRadius: 12,
        borderColor: 'green',
    },
    box2: {
        width: '70%',
        height: '7%',
        left: '0%',
        top: '1%',
        borderRadius: 12,
        borderColor: 'green',
    },
    box3: {
        width: '70%',
        height: '7%',
        left: '0%',
        top: '-8%',
        borderRadius: 12,
        borderColor: 'green',
    },
    box4: {
        width: '70%',
        height: '7%',
        left: '0%',
        top: '-17%',
        borderRadius: 12,
        borderColor: 'green',
    },
    text: {
        fontFamily: 'Lato-Light',
        fontSize: 22,
        width: '90%',
        left: '0%',
        height: 'auto',
        textAlign: 'center',
        top: '-15%',
    },
    text1: {
        fontFamily: 'Lato-Regular',
        fontSize: 20,
        width: '90%',
        left: '12%',
        height: 'auto',
        textAlign: 'left',
        top: '1%',
    },
    text2: {
        fontFamily: 'Lato-Regular',
        fontSize: 20,
        width: '90%',
        left: '12%',
        height: 'auto',
        textAlign: 'left',
        top: '-8%',
    },
    text3: {
        fontFamily: 'Lato-Regular',
        fontSize: 20,
        width: '90%',
        left: '12%',
        height: 'auto',
        textAlign: 'left',
        top: '-17%',
    },
    text4: {
        fontFamily: 'Lato-Regular',
        fontSize: 20,
        width: '90%',
        left: '12%',
        height: 'auto',
        textAlign: 'left',
        top: '-26%',
    },
    button: {
        backgroundColor: "#22A45D",
        borderRadius: 8,
        width: '35%',
        height: '10%',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        top: '-15%',
        shadowRadius: 10,
        shadowOpacity: 0.25,
        bottom: '-1%',
    },
    buttonText: {
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        color: '#fff',
        alignSelf: "center",
        textAlign: 'center',
        top: '20%',
    },
});
