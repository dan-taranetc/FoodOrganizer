import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';

import {Image as ReactImage} from 'react-native';


export default class Starts extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        // const [number, onChangeNumber] = React.useState(null)
        return (
            <View style={styles.container}>
                <Text style = {styles.headn}>
                    Введите свой возраст, примерный вес и рост
                </Text>
                <TextInput
                    style={styles.input1}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="Возраст"
                    keyboardType="default"
                />
                <TextInput
                    style={styles.input2}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="Вес"
                    keyboardType="default"
                />
                <TextInput
                    style={styles.input3}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="Рост"
                    keyboardType="default"
                />
                <ReactImage source={require('../pngs/tarelochka.png')} style = {styles.image}/>
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
        display: 'flex',
        position: 'relative',
        fontFamily: 'Helvetica',
        fontSize: 24,
        width: 'auto',
        height: 'auto',
        textAlign: 'center',
        top: '5%',
        left: 0,
    },
    input1: {
        height:'5%',
        width: '80%',
        borderBottomWidth: 2,
        fontFamily: 'Helvetica',
        fontSize: 18,
        top: '4%',
        borderColor: '#22A45D',
    },
    input2: {
        height: '5%',
        width: '80%',
        borderBottomWidth: 2,
        fontFamily: 'Helvetica',
        fontSize: 18,
        top: '0%',
        borderColor: '#22A45D',
    },
    input3: {
        height: '5%',
        width: '80%',
        borderBottomWidth: 2,
        fontFamily: 'Helvetica',
        fontSize: 18,
        top: '-4%',
        borderColor: '#22A45D',
    },
    image: {
        top: '0%',
        left: '0%',
        width: 148,
        height: 148,
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
        bottom: '1%',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        alignSelf: "center",
        top: '25%',
    },
});