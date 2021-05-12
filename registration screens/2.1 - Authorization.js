import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import * as Font from 'expo-font';

let customFonts = {
    'Lato-Black': require('../fonts/Lato/Lato-Black.ttf'),
    'Lato-Bold': require('../fonts/Lato/Lato-Bold.ttf'),
    'Lato-Regular': require('../fonts/Lato/Lato-Regular.ttf'),
};

export default class Starts extends Component {
    constructor(props) {
        super(props);
        this.state = {login: '', password: ''};
    }

    state = {
        weight: '',
        fontsLoaded: false,
    };

    async authorizate(login, password){
        let response = await fetch(global.url+'/auth', {
            method: 'POST',
            body: JSON.stringify({
                login: login,
                password: password,
            })
        })
        if (response.ok) {
            let text = await response.text();
            if (text === '0'){
                console.log('Person authorized')
                this.props.navigation.navigate('Settings')
            }else{
                console.log('Person send wrong log/pass')
                alert("Неправильно введен логин или пароль.")
            }
        } else {
            console.log('Authorization server error')
            alert("Ошибка cервера: " + response.status + "\nПриносим извинения");
        }
    }

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync();
    }

    render() {
        // const [number, onChangeNumber] = React.useState(null)
        let weight = 'kkk'
        return (
            <View style={styles.container}>
                <Text style = {styles.headn}>
                    АВТОРИЗАЦИЯ
                </Text>
                <TextInput
                    style={styles.input1}
                    placeholder="Логин"
                    keyboardType="default"
                    onChangeText={login => this.setState({ login })}
                    value={this.state.login}
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.input2}
                    placeholder="Пароль"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                    keyboardType="default"
                />
                <Text style = {styles.pass}>
                    Забыли пароль?
                </Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Registration')} style = {styles.reg_again}>
                    <Text style = {styles.reg_again_text}>Зарегестрироваться заново</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.authorizate(this.state.login, this.state.password)} style={styles.button}>
                    <Text style={styles.buttonText}>ВОЙТИ</Text>
                </TouchableOpacity>
            </View>
        );
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
        width: '70%',
        height: 'auto',
        textAlign: 'center',
        top: '5%',
        left: 0,
    },
    pass: {
        position: 'relative',
        fontFamily: 'Lato-Regular',
        fontSize: 15,
        width: '70%',
        textAlign: 'center',
        top: '-3%',
        left: 0,
        color: '#707070'
    },
    input1: {
        height:'5%',
        width: '80%',
        borderBottomWidth: 2,
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        top: '4%',
        borderColor: '#22A45D',
    },
    input2: {
        height: '5%',
        width: '80%',
        borderBottomWidth: 2,
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        top: '-2%',
        borderColor: '#22A45D',
    },
    image: {
        top: '2%',
        left: '0%',
        width: 90,
        height: 125,
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
        bottom: '0%',
    },
    buttonText: {
        fontFamily: 'Lato-Black',
        fontSize: 14,
        color: '#fff',
        alignSelf: "center",
        top: '30%',
    },
    reg_again: {
        top: '-15%',
    },
    reg_again_text: {
        position: 'relative',
        fontFamily: 'Lato-Bold',
        fontSize: 15,
        width: '70%',
        textAlign: 'center',
        left: 0,
        color: '#22A45D',
    }
});