import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity,} from 'react-native';
import {Image as ReactImage} from 'react-native';
import ScrollContainer from '../special forms/ScrollContainer.js';
// import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

let customFonts = {
    'Lato-Black': require('../fonts/Lato/Lato-Black.ttf'),
    'Lato-Bold': require('../fonts/Lato/Lato-Bold.ttf'),
    'Lato-Regular': require('../fonts/Lato/Lato-Regular.ttf'),
};


export default class Starts extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    // state = {
    //     fontsLoaded: false,
    // };
    //
    // async _loadFontsAsync() {
    //     await Font.loadAsync(customFonts);
    //     this.setState({ fontsLoaded: true });
    // }
    //
    // componentDidMount() {
    //     this._loadFontsAsync();
    // }

    render() {
        // if (this.state.fontsLoaded) {
            return (
                <ScrollContainer>
                    <View style={styles.container}>
                        <Text style = {styles.headn}>
                            КАТЕГОРИИ ПРОДУКТОВ, ИЗ КОТОРЫХ БУДЕТ СОСТОЯТЬ ВАШ РАЦИОН
                        </Text>
                        <View style = {styles.zavtr_fish}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Zavtrak')}>
                                <ReactImage source={require('../pngs/variaty/zavtrak.png')} style = {styles.image_zavtr}/>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Fish')}>
                                <ReactImage source={require('../pngs/variaty/fish.png')} style = {styles.image_fish}/>
                            </TouchableOpacity>
                        </View>

                        <View style = {styles.garn_meat}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Garnish')}>
                                <ReactImage source={require('../pngs/variaty/garnish.png')} style = {styles.image_garnish}/>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Meat')}>
                                <ReactImage source={require('../pngs/variaty/meat.png')} style = {styles.image_meat}/>
                            </TouchableOpacity>
                        </View>

                        <View style = {styles.ovoshi_fruits}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Ovoshi')}>
                                <ReactImage source={require('../pngs/variaty/ovoshi.png')} style = {styles.image_ovoshi}/>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Fruits')}>
                                <ReactImage source={require('../pngs/variaty/frukti.png')} style = {styles.image_fruits}/>
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.des}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Drinks')}>
                                <ReactImage source={require('../pngs/variaty/drink.png')} style = {styles.image_drink}/>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Desert')}>
                                <ReactImage source={require('../pngs/variaty/desert.png')} style = {styles.image_desert}/>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Allergies')} style={styles.button}>
                            <Text style={styles.buttonText}>ПРОДОЛЖИТЬ</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollContainer>
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
    scrollView: {
        flex : 1,
        backgroundColor: 'pink',
    },
    headn: {
        position: 'relative',
        fontFamily: 'Lato-Bold',
        fontSize: 17,
        width: '80%',
        height: 'auto',
        textAlign: 'center',
        top: '5%',
        left: 0,
    },
    text: {
        fontFamily: 'Lato-Light',
        fontSize: 17,
        width: '90%',
        left: '0%',
        height: 'auto',
        textAlign: 'center',
        top: '2%',
    },
    zavtr_fish: {
        flexDirection: 'row',
        top: '30%',
    },
    image_zavtr: {
        top: '0%',
        left: '-10%',
        width: 136,
        height: 136,
    },
    image_fish: {
        top: '0%',
        left: '10%',
        width: 136,
        height: 136,
    },
    garn_meat: {
        flexDirection: 'row',
        top: '35%',
    },
    image_garnish: {
        left: '-10%',
        width: 136,
        height: 136,
    },
    image_meat: {
        left: '10%',
        width: 136,
        height: 136,
    },
    ovoshi_fruits: {
        flexDirection: 'row',
        top: '40%',
    },
    image_ovoshi: {
        left: '-10%',
        width: 136,
        height: 136,
    },
    image_fruits: {
        left: '10%',
        width: 136,
        height: 136,
    },
    des: {
        flexDirection: 'row',
        top: "45%",
    },
    image_drink: {
        left: '-10%',
        width: 136,
        height: 136,
    },
    image_desert: {
        left: '10%',
        width: 136,
        height: 136,
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
        top: '30%',
    },
    buttonText: {
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        color: '#fff',
        alignSelf: "center",
        top: '30%',
    },
});
