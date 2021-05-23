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

    renderElement(){
        if(global.person.sex== 'М')
            return 88.36 + (13.4 * global.person.weight) + (4.8 * global.person.height) - (5.7 * global.person.age)
        if(global.person.sex== 'Ж')
            return 447,6 + (9.2 * global.person.weight) + (3.1 * global.person.height) - (4.3 * global.person.age)
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
                        Здравствуйте
                    </Text>

                    <View
                        style={[styles.box1, { backgroundColor: "rgba(52, 52, 52, 0.2)" }]}
                    />
                    <Text style = {styles.text1}>
                        Потребленные каллории: {global.person.calories}
                    </Text>
                    <View
                        style={[styles.box2, { backgroundColor: "rgba(52, 52, 52, 0.2)" }]}
                    />
                    <Text style = {styles.text2}>
                        Рекомендуемое количество: { this.renderElement() }
                    </Text>
                    <Text style = {styles.text}>
                        Выберите нужный вариант:
                    </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SelfCooking')} style={styles.button1}>
                        <Text style={styles.buttonText}>Самостоятельная готовка</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SignupVariaty')} style={styles.button2}>
                        <Text style={styles.buttonText}>Самостоятельная готовка</Text>
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
    box1: {
        width: '90%',
        height: '7%',
        left: '0%',
        top: '10%',
        borderRadius: 12,
        borderColor: 'green',
    },
    box2: {
        width: '90%',
        height: '7%',
        left: '0%',
        top: '-5%',
        borderRadius: 12,
        borderColor: 'green',
    },
    text: {
        fontFamily: 'Lato-Bold',
        fontSize: 22,
        width: '90%',
        left: '0%',
        height: 'auto',
        textAlign: 'center',
        top: '19%',
    },
    text1: {
        fontFamily: 'Lato-Regular',
        fontSize: 20,
        width: '90%',
        left: '4%',
        height: 'auto',
        textAlign: 'left',
        top: '-2%',
    },
    text2: {
        fontFamily: 'Lato-Regular',
        fontSize: 20,
        width: '90%',
        left: '4%',
        height: 'auto',
        textAlign: 'left',
        top: '-17%',
    },
    button1: {
        backgroundColor: "#22A45D",
        borderRadius: 8,
        width: '40%',
        height: '10%',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25,
        bottom: '-1%',
        left: '-23%',
        top: '14%'
    },
    button2: {
        backgroundColor: "#22A45D",
        borderRadius: 8,
        width: '40%',
        height: '10%',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        top: '-3%',
        shadowRadius: 10,
        shadowOpacity: 0.25,
        bottom: '-1%',
        left: '23%'
    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'Lato-Bold',
        color: '#fff',
        alignSelf: "center",
        textAlign: 'center',
        top: '30%',
    },
});
