import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import * as Font from 'expo-font';

let customFonts = {
    'Lato-Black': require('../fonts/Lato/Lato-Black.ttf'),
    'Lato-Bold': require('../fonts/Lato/Lato-Bold.ttf'),
    'Lato-Regular': require('../fonts/Lato/Lato-Regular.ttf'),
    'Lato-Thin': require('../fonts/Lato/Lato-Thin.ttf'),
};

export default class Starts extends Component {
    constructor(props) {
        super(props);
        this.state = {sex: '', name: '', login: '', password: ''};
    }

    state = {
        weight: '',
        fontsLoaded: false,
    };

    async new_user(login, name, sex){
        if(login.length === 0 || name.length === 0 || sex.length === 0){
            alert('Заполните все поля.')
            return
        }
        let response = await fetch(global.url+'/new_user', {
            method: 'POST',
            body: JSON.stringify({
                login: login
            })
        })
        if (response.ok) {
            let text = await response.text();
            if (text === '0'){
                console.log('Login is unique')
                this.props.navigation.navigate('SignupAwh')
            }else{
                console.log('Not unique login')
                alert("Такой логин уже существует.");
            }
        } else {
            console.log('New_user server error')
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
    componentDidUpdate() {
        global.person.Userdata.login = this.state.login;
        global.person.Userdata.password = this.state.password;
        global.person.Userdata.sex = this.state.sex;
    }
    render() {
        // const [number, onChangeNumber] = React.useState(null)
        let weight = 'kkk'
        return (
            <View style={styles.container}>
                <Text style = {styles.headn}>
                    РЕГИСТРАЦИЯ
                </Text>
                <TextInput
                    style={styles.input1}
                    placeholder="Логин"
                    keyboardType="default"
                    onChangeText={login => this.setState({ login })}
                    value={this.state.login}
                />
                <TextInput
                    style={styles.input2}
                    secureTextEntry={true}
                    placeholder="Пароль"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                    keyboardType="default"
                />
                <TextInput
                    style={styles.input3}
                    placeholder="Имя"
                    keyboardType="default"
                    onChangeText={name => this.setState({ name })}
                    value={this.state.name}
                />
                <TextInput
                    style={styles.input4}
                    placeholder="Пол"
                    keyboardType="default"
                    onChangeText={sex => this.setState({ sex })}
                    value={this.state.sex}
                />
                <Text style = {styles.help_text}>
                    Нажимая «продолжить», Вы подтверждаете,что прочитали Политику конфиденциальности и согласны с Условиями оказания услуг
                </Text>
                <TouchableOpacity onPress={() => this.new_user(this.state.login, this.state.name, this.state.sex)} style={styles.button}>
                    <Text style={styles.buttonText}>ПРОДОЛЖИТЬ</Text>
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
    PS: {
        position: 'relative',
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        width: '90%',
        height: 'auto',
        textAlign: 'left',
        top: '-6%',
        left: '7%',
    },
    headn: {
        position: 'relative',
        fontFamily: 'Lato-Bold',
        fontSize: 16,
        width: '90%',
        height: 'auto',
        textAlign: 'center',
        top: '5%',
        left: '0%',
    },
    input1: {
        height:'5%',
        width: '80%',
        borderBottomWidth: 2,
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        top: '5%',
        borderColor: '#22A45D',
    },
    input2: {
        height: '5%',
        width: '80%',
        borderBottomWidth: 2,
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        top: '-1%',
        borderColor: '#22A45D',
    },
    input3: {
        height: '5%',
        width: '80%',
        borderBottomWidth: 2,
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        top: '-6%',
        borderColor: '#22A45D',
    },
    input4: {
        height: '5%',
        width: '80%',
        borderBottomWidth: 2,
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        top: '-11%',
        borderColor: '#22A45D',
    },
    image: {
        top: '0%',
        left: '0%',
        width: 121,
        height: 166,
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
        bottom: '1.5%',
    },
    buttonText: {
        fontFamily: 'Lato-Black',
        fontSize: 14,
        color: '#fff',
        alignSelf: "center",
        top: '30%',
    },
    help_text: {
        top: '5%',
        fontSize: 11,
        textAlign: 'center',
        fontFamily: 'Lato-Thin',
    },

});