//import React, {Component} from 'react';
//import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
//import {Image as ReactImage} from 'react-native';
//import * as Font from 'expo-font';
//
//let customFonts = {
//    'Lato-Black': require('../fonts/Lato/Lato-Black.ttf'),
//    'Lato-Bold': require('../fonts/Lato/Lato-Bold.ttf'),
//    'Lato-Regular': require('../fonts/Lato/Lato-Regular.ttf'),
//};
//export default class Starts extends Component {
//
//    constructor(props) {
//        super(props);
//        this.state = { text: ''
//        };
//    }
////    const [value, onChangeText] = React.useState('click to add reminder.')
//    state = {
//        fontsLoaded: false,
//        weight:'',
////        currentDate: new Date(),
////        markedDate: moment(new Date()).format("YYYY-MM-DD")
//    };
//
//    async _loadFontsAsync() {
//        await Font.loadAsync(customFonts);
//        this.setState({ fontsLoaded: true });
//    }
//
//    componentDidMount() {
//        this._loadFontsAsync();
//    }
//
//
//    render() {
//        // const [number, onChangeNumber] = React.useState(null)
//        return (
//            <View style={styles.container}>
//                <Text style = {styles.headn}>
//                    ВВЕДИТЕ СВОИ ПОЛ, ИМЯ И АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ
//                </Text>
//                <TextInput
//                    style={styles.input0}
//                    // onChangeText={onChangeNumber}
//                    // value={number}
//                    placeholder="Пол"
//                    keyboardType="default"
//                />
//                <TextInput
//                    style={styles.input1}
//                    // onChangeText={onChangeNumber}
//                    // value={number}
//                    placeholder="Имя"
//                    keyboardType="default"
//                />
//                <TextInput
//                    style={styles.input2}
//                    // onChangeText={onChangeNumber}
//                    // value={number}
//                    placeholder="Email"
//                    keyboardType="email-address"
//                />
//                <ReactImage source={require('../pngs/vinograd_2.png')} style = {styles.image}/>
//                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignupAwh')} style={styles.button}>
//                    <Text style={styles.buttonText}>ПРОДОЛЖИТЬ</Text>
//                </TouchableOpacity>
//            </View>
//        );
//    }
//}
//
//const styles = StyleSheet.create({
//    container: {
//        flex: 1,
//        backgroundColor: '#fff',
//        alignItems: 'center',
//        justifyContent: 'center',
//        justifyContent: 'space-around',
//    },
//    headn: {
//        position: 'relative',
//        fontFamily: 'Lato-Bold',
//        fontSize: 17,
//        width: '70%',
//        height: 'auto',
//        textAlign: 'center',
//        top: '5%',
//        left: 0,
//    },
//    input0:{
//        height:'5%',
//        width: '80%',
//        borderBottomWidth: 2,
//        fontFamily: 'Lato-Regular',
//        fontSize: 14,
//        top: '4%',
//        borderColor: '#22A45D',
//    },
//    input1: {
//        height:'5%',
//        width: '80%',
//        borderBottomWidth: 2,
//        fontFamily: 'Lato-Regular',
//        fontSize: 14,
//        top: '0%',
//        borderColor: '#22A45D',
//    },
//    input2: {
//        height: '5%',
//        width: '80%',
//        borderBottomWidth: 2,
//        fontFamily: 'Lato-Regular',
//        fontSize: 14,
//        top: '-4%',
//        borderColor: '#22A45D',
//    },
//    image: {
//        top: '0%',
//        left: '0%',
//        width: 121,
//        height: 166,
//    },
//    button: {
//        backgroundColor: "#22A45D",
//        borderRadius: 8,
//        width: '80%',
//        height: '6%',
//        shadowColor: '#000000',
//        shadowOffset: {
//            width: 0,
//            height: 3
//        },
//        shadowRadius: 10,
//        shadowOpacity: 0.25,
//        bottom: '0%',
//    },
//    buttonText: {
//        fontFamily: 'Lato-Black',
//        fontSize: 14,
//        color: '#fff',
//        alignSelf: "center",
//        top: '30%',
//    },
//
//});
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
        this.state = { name: '', email: ''

        };
    }

    state = {
        weight:'',
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
        // const [number, onChangeNumber] = React.useState(null)
        let weight = 'kkk'
        return (
            <View style={styles.container}>
                <Text style = {styles.headn}>
                    ВВЕДИТЕ СВОЕ ИМЯ И АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ
                </Text>
                <TextInput
                    style={styles.input1}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="Имя"
                    keyboardType="default"
                    onChangeText={name => this.setState({ name })}
                    value={this.state.name}
                />
                <TextInput
                    style={styles.input2}
                    placeholder="Email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    keyboardType="email-address"
                />
                <ReactImage source={require('../pngs/vinograd_2.png')} style = {styles.image}/>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignupAwh')} style={styles.button}>
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
        top: '0%',
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
        bottom: '0%',
    },
    buttonText: {
        fontFamily: 'Lato-Black',
        fontSize: 14,
        color: '#fff',
        alignSelf: "center",
        top: '30%',
    },

});
