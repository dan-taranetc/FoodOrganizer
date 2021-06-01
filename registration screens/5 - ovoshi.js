import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity,} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import SelectMultiple from 'react-native-select-multiple'

const fruits = ['Помидор', 'Огурец', 'Морковь', 'Капуста', 'Кабачок', 'Перец', 'Брокколи', 'Лук и чеснок', 'Зелень']

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
                if (item.label.includes('Помидор')) {
                    global.person.Tomaty = '+';
                    global.person.TomPasta = '+';
                }
                if (item.label.includes('Огурец')) {
                    global.person.Ogurec = '+';
                    global.person["Ogurec marinovannyj"] = '+';
                    global.person["Ogurec solenyj"] = "+";
                }
                if (item.label.includes('Морковь')) {
                    global.person["Morkov'"] = '+';
                }
                if (item.label.includes('Капуста')) {
                    global.person.Kapusta = '+';
                }
                if (item.label.includes('Кабачок')) {
                    global.person.Kabachok = '+';
                }
                if (item.label.includes('Перец')) {
                    global.person.Perec = '+';
                    global.person["Perec zelenyj"] = '+';
                }
                if (item.label.includes('Брокколи')) {
                    global.person.Brokkoli = '+';
                }
                if (item.label.includes('Лук и чеснок')) {
                    global.person.CHesnok = '+';
                    global.person["CHereshok sel'dereya"] = '+';
                    global.person.Luk = '+';
                    global.person["Zelenyj luk"] = '+';
                }
                if (item.label.includes('Зелень')) {
                    global.person["zelen'"] = '+';
                    global.person.Ukrop = '+';
                    global.person.Salat = '+';
                    global.person.Shpinat = '+';
                    global.person.Petrushka = '+';
                    global.person["Zelenyj luk"] = '+';
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
                            Какие овощи Вы бы хотели
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

