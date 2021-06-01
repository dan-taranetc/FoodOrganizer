import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

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
                        ПОЗДРАВЛЯЕМ!{'\n'}
                        ВЫ ЗАВЕРШИЛИ ПЕРВЫЙ ЭТАП РЕГИСТРАЦИИ
                    </Text>
                    <Text style = {styles.text}>Чтобы правильно подобрать
                        рационы питания
                        нам необходимо подробнее
                        узнать о ваших предпочтениях
                        и вкусах,
                        а также о врачебных
                        противопоказаниях,
                        чтобы исключить возможность
                        аллергических реакций. </Text>
                    <ReactImage source={require('../pngs/another_tarelochka.png')} style = {styles.image}/>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SignupVariaty')} style={styles.button}>
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-around',
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
    image: {
        top: '0%',
        left: '0%',
        width: 185,
        height: 129,
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
        bottom: '2%',
    },
    buttonText: {
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        color: '#fff',
        alignSelf: "center",
        top: '30%',
    },
});