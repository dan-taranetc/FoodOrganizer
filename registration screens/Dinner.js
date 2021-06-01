import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import ScrollContainer from '../special forms/ScrollContainer.js';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
// import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
let customFonts = {
    'Lato-Black': require('../fonts/Lato/Lato-Black.ttf'),
    'Lato-Bold': require('../fonts/Lato/Lato-Bold.ttf'),
    'Lato-Regular': require('../fonts/Lato/Lato-Regular.ttf'),
    'Lato-Light': require('../fonts/Lato/Lato-Light.ttf'),
};

function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
    return arrayOfStrings
}

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

    async breakfast(){
        let response = await fetch(global.url+'/get_diet', {
            method: 'POST',
            body: JSON.stringify({
                time: 1,
                login: global.person.Userdata.login,
            })
        })
        if (response.ok) {
            let text = await response.json();
            console.log(text)
            global.breakfast = text
            this.props.navigation.navigate('Breakfast')
        } else {
            console.log('Authorization server error')
            alert("Ошибка cервера: " + response.status + "\nПриносим извинения");
        }
    }

    async late_dinner(){
        let response = await fetch(global.url+'/get_diet', {
            method: 'POST',
            body: JSON.stringify({
                time: 3,
                login: global.person.Userdata.login,
            })
        })
        if (response.ok) {
            let text = await response.json();
            console.log(text)
            global.breakfast = text
            this.props.navigation.navigate('LateDinner')
        } else {
            console.log('Authorization server error')
            alert("Ошибка cервера: " + response.status + "\nПриносим извинения");
        }
    }

    async getreceipt(text){
        global.receipt = text
        this.props.navigation.navigate('Receipt')
    }

    render() {
        const list = global.breakfast['dishes']
        for(var i = list.length - 1; i >= 0; i--) {
            if(list[i] === 0) {
                list.splice(i, 1);
            }
        }
        const drinks = global.breakfast['drinks']
        for(var j = drinks.length - 1; j >= 0; j--) {
            if(drinks[j] === 0) {
                drinks.splice(j, 1);
            }
        }
        if (this.state.fontsLoaded) {
            return (
                <View style={styles.container}>
                    <Text style = {styles.text}>
                        Выберите время приема пищи:
                    </Text>
                    <View style={styles.but}>
                        <TouchableOpacity onPress={() => this.breakfast()} style={styles.button1}>
                            <Text style={styles.buttonText}>Завтрак</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Dinner')} style={styles.button2}>
                            <Text style={styles.buttonText}>Обед</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.late_dinner()} style={styles.button3}>
                            <Text style={styles.buttonText}>Ужин</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.list}>
                        <ScrollContainer>
                            {list.map((item) => (
                                <View style = {styles.table}>
                                    <TouchableOpacity onPress={() => this.getreceipt(item[6])}>
                                        <Text style = {styles.blud}>{item[0]}</Text><
                                        /TouchableOpacity>
                                    <Text style = {styles.sostav}>{'Состав: '}
                                        {splitString(item[1], ',').map((itm) => (
                                            <Text style = {styles.sostav}>{global.dict[itm]+';'}</Text>
                                        ))}
                                    </Text>
                                    <Text style = {styles.sostav}>{'Белки: '+item[2]+'г.'}</Text>
                                    <Text style = {styles.sostav}>{'Жиры: '+item[3]+'г.'}</Text>
                                    <Text style = {styles.sostav}>{'Углеводы: '+item[4]+'г.'}</Text>
                                    <Text style = {styles.sostav}>{'Калорийность: '+item[5]+' ккал.'}{'\n'}</Text>
                                </View>
                            ))}
                            <Text style={styles.drink_hedn}>Напитки:</Text>
                            {drinks.map((item) => (
                                <View style = {styles.table}>
                                    <Text style = {styles.drink}>{item}</Text>
                                </View>
                            ))}
                        </ScrollContainer>
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
        top: '0%',
        left: '-1%',
        color: '#22A45D'
    },
    drink_hedn: {
        fontSize: 16,
        fontFamily: 'Lato-Bold',
    },
    list: {
        top: '15%',
        left: '0%',
        height: '75%',
    },
    table: {
        width: '90%',
    },
    blud: {
        fontSize: 15,
        fontFamily: 'Lato-Bold',
        left: '0%',

    },
    sostav: {
        fontFamily: 'Lato-Regular',
    },
    drink: {
        fontSize: 16,
        fontFamily: 'Lato-Regular',
    },
    text: {
        position: 'absolute',
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        width: '90%',
        left: '5%',
        height: 'auto',
        textAlign: 'center',
        top: 100,
    },
    but: {
        position: 'absolute',
        flexDirection: 'row',
        left: '10%',
        top: 150,
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
