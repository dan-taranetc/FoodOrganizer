import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity,} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import SelectMultiple from 'react-native-select-multiple'

const fruits = ['Гастрит', 'Язва желудка', 'Язва двенадцатиперстной кишки', 'Панкреатит', 'Сахарный диабет',]

let customFonts = {
    'Lato-Black': require('../fonts/Lato/Lato-Black.ttf'),
    'Lato-Bold': require('../fonts/Lato/Lato-Bold.ttf'),
    'Lato-Regular': require('../fonts/Lato/Lato-Regular.ttf'),
    'Lato-Thin': require('../fonts/Lato/Lato-Thin.ttf'),
};


export default class Starts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    state = {
        // fontsLoaded: false,
        selectedFruits: []
    };
    async registration(array){
        if(typeof array != "undefined"){
            array.forEach(function (item) {
                if (item.label.includes('Гастрит')) {
                    global.person.gastritis = '+'
                }
                if (item.label.includes('Язва желудка')) {
                    global.person.stomach_ulcer = '+'
                }
                if (item.label.includes('Язва двенадцатиперстной кишки')) {
                    global.person.intestine_ulcer = '+'
                }
                if (item.label.includes('Панкреатит')) {
                    global.person.pancreatitis = '+'
                }
                if (item.label.includes('Сахарный диабет')) {
                    global.person.diabetes = '+'
                }
            });
        }
        let response = await fetch(global.url+'/reg', {
            method: 'POST',
            body: JSON.stringify(global.person)
        })
        console.log(global.person)
        if (response.ok) {
            console.log('Person\'s data on server')
        } else {
            console.log('Reg server error')
            alert("Ошибка cервера: " + response.status + "\nПриносим извинения");
        }
        this.props.navigation.navigate('MainScreen')
    }

    onSelectionsChange = (selectedFruits) => {
        // selectedFruits is array of { label, value }
        this.setState({ selectedFruits })
    }

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
                            Выберите из списка имеющиеся у Вас заболевания
                        </Text>

                        <View>
                            <SelectMultiple
                                items={fruits}
                                selectedItems={this.state.selectedFruits}
                                onSelectionsChange={this.onSelectionsChange}
                                style = {styles.choice}/>
                        </View>

                        <Text style = {styles.help_text}>
                            Если у Вас нет заболеваний, нажмите "ПРОДОЛЖИТЬ"
                        </Text>
                        <TouchableOpacity onPress={() => this.registration(this.state.selectedFruits)} style={styles.button}>
                            <Text style={styles.buttonText}>ПРОДОЛЖИТЬ</Text>
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
        height: 1000,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // justifyContent: 'space-around',
    },
    headn: {
        position: 'relative',
        fontFamily: 'Lato-Bold',
        fontSize: 17,
        width: '80%',
        height: 'auto',
        textAlign: 'left',
        top: '7%',
        left: 0,
    },
    choice: {
        top: "13%",
        width: 300,
    },
    button1: {
        top: "3%",
        height: "5%",
        width: "20%",
        backgroundColor: '#fff',
        left: "-35%",
    },
    button: {
        backgroundColor: "#22A45D",
        borderRadius: 8,
        width: '80%',
        height: '5.5%',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25,
        top: '-21%',
    },

    buttonText: {
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        color: '#fff',
        alignSelf: "center",
        top: '30%',
    },
    help_text: {
        top: '-23%',
        fontSize: 10,
        fontFamily: 'Lato-Thin',
    },
});

