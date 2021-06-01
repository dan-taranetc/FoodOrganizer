import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput,TouchableOpacity, Keyboard, TouchableWithoutFeedback} from 'react-native';
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
        this.state = {age: '', weight: '', height: ''};
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
    async age_weight_height(age, weight, height){
        if(age.length === 0 || weight.length === 0 || height.length === 0){
            alert('Заполните все поля.')
            return
        }
        this.props.navigation.navigate('Endfirst')
    }
    componentDidUpdate() {
        global.person.Userdata.age = this.state.age;
        global.person.Userdata.weight = this.state.weight;
        global.person.Userdata.height = this.state.height;
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style = {styles.headn}>
                    ВВЕДИТЕ СВОЙ ВОЗРАСТ, ПРИМЕРНЫЙ ВЕС И РОСТ
                </Text>
                <TextInput
                    style={styles.input1}
                    placeholder="Возраст"
                    keyboardType="numeric"
                    onChangeText={age => this.setState({ age })}
                    value={this.state.age}
                />
                <TextInput
                    style={styles.input2}
                    placeholder="Вес                                                                                         (кг.)"
                    keyboardType="numeric"
                    onChangeText={weight => this.setState({ weight })}
                    value={this.state.weight}
                />
                <TextInput
                    style={styles.input3}
                    placeholder="Рост                                                                                     (см.)"
                    keyboardType="numeric"
                    onChangeText={height => this.setState({ height })}
                    value={this.state.height}
                />

                <ReactImage source={require('../pngs/tarelochka.png')} style = {styles.image}/>
                <TouchableOpacity onPress={() => this.age_weight_height(this.state.age, this.state.weight, this.state.height)} style={styles.button}>
                    <Text style={styles.buttonText}>ПРОДОЛЖИТЬ</Text>
                </TouchableOpacity>
            </View>
            </TouchableWithoutFeedback>
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
        fontFamily: 'Lato-Bold',
        fontSize: 17,
        width: '70%',
        height: 'auto',
        textAlign: 'center',
        top: '5%',
        left: 0,
    },
    input1_view: {
        flex: 1,
        width: '80%',
        left: '0%',
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        top: '15%',
        borderColor: '#22A45D',

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
    input2_view: {
        flex: 1,
        height: '5%',
        width: '80%',
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        top: '0%',
        borderColor: '#22A45D',
    },
    input2: {
        height: '5%',
        width: '80%',
        borderBottomWidth: 2,
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        top: '0%',
        borderColor: '#22A45D',
    },
    input3: {
        height: '5%',
        width: '80%',
        borderBottomWidth: 2,
        fontFamily: 'Lato-Regular',
        fontSize: 14,
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
        height: '6%',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25,
        bottom: '4%',
    },
    buttonText: {
        fontSize: 14,
        color: '#fff',
        fontFamily: 'Lato-Bold',
        alignSelf: "center",
        top: '30%',
    },
});