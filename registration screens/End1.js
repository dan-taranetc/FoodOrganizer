import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';


export default class Starts extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style = {styles.headn}>
                    Поздравляем!{'\n'}
                    Вы завершили
                    первый этап регистрации
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
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Endfirst')} style={styles.button}>
                    <Text style={styles.buttonText}>Продолжить</Text>
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
        fontFamily: 'Helvetica',
        fontSize: 24,
        width: 'auto',
        height: 'auto',
        textAlign: 'center',
        top: '5%',
        left: 0,
    },
    text: {
        fontFamily: 'Helvetica',
        fontSize: 20,
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
        fontFamily: 'Helvetica',
        height: '6%',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25,
        bottom: '-1%',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        alignSelf: "center",
        top: '25%',
    },
});