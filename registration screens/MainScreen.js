import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
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
    renderElement(){
        if(global.person.Userdata.sex === 'М')
            return Math.round(88.36 + (13.4 * global.person.Userdata.weight) + (4.8 * global.person.Userdata.height) - (5.7 * global.person.Userdata.age))
        if(global.person.Userdata.sex === 'Ж')
            return Math.round(447.6 + (9.2 * global.person.Userdata.weight) + (3.1 * global.person.Userdata.height) - (4.3 * global.person.Userdata.age))
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
                        Здравствуйте
                    </Text>

                    <View
                        style={[styles.box1, { backgroundColor: "rgba(52, 52, 52, 0.2)" }]}
                    />
                    <Text style = {styles.text1}>
                        Потребленные калории: {global.person.Userdata.calories} ккал
                    </Text>
                    <TouchableOpacity onPress={() => alert('Специально для Вас мы рассчитали необходимое число калорий на сегодняшний день')} style = {styles.info}>
                        <ReactImage source={require('../pngs/info.png') } style = {styles.info_png}/>
                    </TouchableOpacity>
                    <View
                        style={[styles.box2, { backgroundColor: "rgba(52, 52, 52, 0.2)" }]}
                    />
                    <Text style = {styles.text2}>
                        Рекомендуемое количество: { this.renderElement() } ккал
                    </Text>
                    <View
                        style={[styles.box3, { backgroundColor: "rgba(52, 52, 52, 0.2)" }]}
                    />
                    <Text style = {styles.text3}>
                        Осталось на сегодня: { this.renderElement() -  global.person.Userdata.calories} ккал
                    </Text>
                    <Text style = {styles.text}>
                        Выберите нужный вариант:
                    </Text>
                    <View style = {styles.but}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('SelfCooking')} style={styles.button1}>
                            <Text style={styles.buttonText}>Самостоятельная готовка</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button2}>
                            <Text style={styles.buttonText2}>Поход в заведение</Text>
                        </TouchableOpacity>
                    </View>
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
        fontFamily: 'Lato-Black',
        fontSize: 20,
        width: '70%',
        height: 'auto',
        textAlign: 'left',
        top: '10%',
        left: '-8%',
        color: '#22A45D'
    },
    info: {
        width: 20,
        height: 20,
        top: '0%',
        right: '-42%',
    },
    info_png: {
        width: 20,
        height: 21,
    },
    but: {
        flexDirection: 'row',
        top: '-25%',
    },
    box1: {
        width: '90%',
        height: '7%',
        left: '0%',
        top: '10%',
        borderRadius: 12,
        borderColor: 'green',
    },
    box2: {
        width: '90%',
        height: '7%',
        left: '0%',
        top: '-5%',
        borderRadius: 12,
        borderColor: 'green',
    },
    box3: {
        width: '90%',
        height: '7%',
        left: '0%',
        top: '-10%',
        borderRadius: 12,
        borderColor: 'green',
    },
    text: {
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        width: '90%',
        left: '0%',
        height: 'auto',
        textAlign: 'center',
        top: '-10%',
    },
    text1: {
        fontFamily: 'Lato-Regular',
        fontSize: 16.5,
        width: '90%',
        left: '4%',
        height: 'auto',
        textAlign: 'left',
        top: '-0.7%',
    },
    text2: {
        fontFamily: 'Lato-Regular',
        fontSize: 16.5,
        width: '90%',
        left: '4%',
        height: 'auto',
        textAlign: 'left',
        top: '-15.7%',
    },
    text3: {
        fontFamily: 'Lato-Regular',
        fontSize: 16.5,
        width: '90%',
        left: '4%',
        height: 'auto',
        textAlign: 'left',
        top: '-20.7%',
    },
    button1: {
        backgroundColor: "#22A45D",
        borderRadius: 8,
        width: '40%',
        height: '200%',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25,
        // bottom: '-1%',
        left: '-23%',
        // top: '14%'
    },
    button2: {
        backgroundColor: "#22A45D",
        borderRadius: 8,
        width: '40%',
        height: '200%',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        // top: '-3%',
        shadowRadius: 10,
        shadowOpacity: 0.25,
        // bottom: '-1%',
        left: '23%'
    },
    buttonText: {
        fontSize: 14,
        width: '90%',
        fontFamily: 'Lato-Bold',
        color: '#fff',
        alignSelf: "center",
        textAlign: 'center',
        top: '30%',
    },
    buttonText2: {
        fontSize: 14,
        width: '90%',
        fontFamily: 'Lato-Bold',
        color: '#fff',
        alignSelf: "center",
        textAlign: 'center',
        top: '38%',
    },
});
