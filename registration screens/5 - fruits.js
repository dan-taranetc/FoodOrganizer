import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity,} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import SelectMultiple from 'react-native-select-multiple'

const fruits = ['Яблоки', 'Груши', 'Бананы', 'Апельсины', 'Лимоны', 'Авокадо', 'Сухофрукты',]

let customFonts = {
    'Lato-Black': require('../fonts/Lato/Lato-Black.ttf'),
    'Lato-Bold': require('../fonts/Lato/Lato-Bold.ttf'),
    'Lato-Regular': require('../fonts/Lato/Lato-Regular.ttf'),
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

    // async _loadFontsAsync() {
    //     await Font.loadAsync(customFonts);
    //     this.setState({ fontsLoaded: true });
    // }
    //
    // componentDidMount() {
    //     this._loadFontsAsync();
    // }
    componentWillUnmount() {
        if(this.state.selectedFruits) {
            this.state.selectedFruits.forEach(function (item) {
                if (item.label.includes('Яблоки')) {
                    // global.person.Tomaty = '+';
                }
                if (item.label.includes('Груши')) {
                    global.person.Grusha = '+';
                }
                if (item.label.includes('Бананы')) {
                    global.person.Banany = '+';
                }
                if (item.label.includes('Апельсины')) {
                    global.person["Apel'sin"] = '+';
                }
                if (item.label.includes('Лимоны')) {
                    global.person.Limon = '+';
                }
                if (item.label.includes('Авокадо')) {
                    global.person.Avokado = '+';
                }
                if (item.label.includes('Сухофрукты')) {
                    global.person.Izyum = '+';
                    global.person.CHernosliv = '+';
                    global.person.Kuraga = '+';
                }
            });
        }
    }
    render() {
        // if (this.state.fontsLoaded) {
            return (
                    <View style={styles.container}>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignupVariaty')} style = {styles.button1}>
                            <Text style={styles.buttonText}>Готово</Text>
                        </TouchableOpacity>

                        <Text style = {styles.headn}>
                            Какие фрукты Вы бы хотели
                            исключить из своего рациона?
                        </Text>

                        <View>
                            <SelectMultiple
                                items={fruits}
                                selectedItems={this.state.selectedFruits}
                                onSelectionsChange={this.onSelectionsChange}
                                style = {styles.choice}/>
                        </View>
                    </View>
            );
        // } else {
        //     return <AppLoading />;
        // }
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
    buttonText: {
        fontSize: 14,
        textAlign: 'center',
        top: '25%',
        textDecorationLine: 'underline',
        fontFamily: 'Lato-Bold',
        color: '#22A45D',
        alignSelf: "auto",
    },
});

