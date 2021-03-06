import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity,} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import SelectMultiple from 'react-native-select-multiple'

const fruits = ['Молочные продукты', 'Пшеница и пшеничная мука', 'Цитрусовые', 'Мясные изделия', 'Рыбные изделия', 'Орехи']

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
    async allerg(array){
        if(typeof array == "undefined"){
            this.props.navigation.navigate('Diseases')
        }
        array.forEach(function (item) {
            if (item.label.includes('Молочные продукты')) {
                global.person.milk_product = '+'
            }
            if (item.label.includes('Пшеница и пшеничная мука')) {
                global.person.wheat = '+'
            }
            if (item.label.includes('Цитрусовые')) {
                global.person.citrus = '+'
            }
            if (item.label.includes('Мясные изделия')) {
                global.person.meat_product = '+'
            }
            if (item.label.includes('Рыбные изделия')) {
                global.person.fish_product = '+'
            }
            if (item.label.includes('Орехи')) {
                global.person.nut = '+'
            }
        });
        this.props.navigation.navigate('Diseases')
    }
    render() {
        if (this.state.fontsLoaded) {
            return (
                    <View style={styles.container}>

                        <Text style = {styles.headn}>
                            Выберите из списка пункты, на которые у Вас есть аллергия
                        </Text>

                        <View>
                            <SelectMultiple
                                items={fruits}
                                selectedItems={this.state.selectedFruits}
                                onSelectionsChange={this.onSelectionsChange}
                                style = {styles.choice}/>
                        </View>

                        <Text style = {styles.help_text}>
                            Если у Вас нет аллергий, нажмите "ПРОДОЛЖИТЬ"
                        </Text>
                        <TouchableOpacity onPress={() => this.allerg(this.state.selectedFruits)} style={styles.button}>
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
        height: '6%',
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

