import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
    Thunderstorm : {
        iconName: "weather-lightning-rainy",
        gradient: ['#373B44', '#4286F4'],
        title:'Thunderstorm',
        subtitle:'Oh my god'
    },
    Drizzle : {
        iconName: "weather-lightning-rainy",
        gradient: ['#4DA0B0', '#D39D38'],
        title:'Drizzle',
        subtitle:'Oh my god'
    },
    Rain : {
        iconName: "weather-rainy",
        gradient: ['#4DA0B0', '#D39D38'],
        title:'Rain',
        subtitle:'Oh my god'
    },
    Snow : {
        iconName: "weather-snowy",
        gradient: ['#4DA0B0', '#D39D38'],
        title:'Snow',
        subtitle:'Oh my god'
    },
    Atmosphere : {
        iconName: "weather-hail",
        gradient: ['#4DA0B0', '#D39D38'],
        title:'Atmosphere',
        subtitle:'Oh my god'
    },
    Clear : {
        iconName: "weather-sunny",
        gradient: ['#FF7300', '#FEF253'],
        title:'Sunny',
        subtitle:'Oh my god'
    },
    Clouds : {
        iconName: "weather-cloudy",
        gradient: ['#4DA0B0', '#D39D38'],
        title:'Clouds',
        subtitle:'Oh my god'
    },
    Haze : {
        iconName: "weather-hail",
        gradient: ['#4DA0B0', '#D39D38'],
        title:'Haze',
        subtitle:'Oh my god'
    },
    Mist : {
        iconName: "weather-fog",
        gradient: ['#4DA0B0', '#D39D38'],
        title:'Mist',
        subtitle:'Oh my god'
    },
    Dust : {
        iconName: "weather-cloudy-alert",
        gradient: ['#4DA0B0', '#D39D38'],
        title:'Dust',
        subtitle:'Oh my god'
    }
};

export default function Weather({temp, condition}){
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle='light-content' />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={90}
                    name={weatherOptions[condition].iconName}
                    color='white'
                />
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        'Thunderstorm', 
        'Drizzle', 
        'Rain', 
        'Snow', 
        'Atmosphere', 
        'Clear', 
        'Clouds',
        'Haze',
        'Mist',
        'Dust'
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 36,
        color: 'white'
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 44,
        fontWeight: '300',
        marginBottom: 10,
        textAlign: "left"
    },
    subtitle: {
        color: 'white',
        fontWeight: '600',
        fontSize: 24,
        textAlign: "left"
    },
    textContainer: {
        alignItems: "flex-start",
        paddingHorizontal: 40,
        justifyContent: "center",
        flex: 1
    }
});