import React, { useState, useEffect } from 'react';
import { View, Text, Touchable, StyleSheet, TouchableOpacity, Image, Alert,ScrollView } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen } from './Constants';
import Field from './Field';
import { dtoUserLogin, dtoRequest } from './model/seviceModel';
import ApiService from './services/ApiService';


const Term = (props) => {
    return (
        <Background>
            <View style={{ alignItems: 'center', width: 410 }}>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 40,
                        fontWeight: 'bold',
                        marginVertical: 20,
                        marginLeft: 20
                    }}>
                    Term & Conditions
                </Text>
                <View
                    style={{
                        backgroundColor: 'white',
                        height: 800,
                        width: 410,
                        borderTopLeftRadius: 130,
                        paddingTop: 50,
                        alignItems: 'center',
                    }}>

                    <Text style={{ fontSize: 25, color: darkGreen, fontWeight: 'bold' }}>
                        Welcome to Bakra Market
                    </Text>
                    <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={{ ...styles.textContent, ...styles.marginTop }}>
                            Bakra Market App provides you the facility to buy and sell only goat, sheep, sheep animals.
                        </Text>
                        <Text style={styles.textContent}>
                            Please read the terms and conditions of Bakra App carefully before using the app.
                        </Text>

                        <Text style={styles.textContent}>
                            1. You can only post advertisements of sheep, goat or buck in Bakra App, advertisements of any other animal will not be valid.
                        </Text>

                        <Text style={styles.textContent}>
                            2. Users must enter correct information related to the animal in the advertisement.
                        </Text>

                        <Text style={styles.textContent}>
                            3. If you make any kind of purchase or sale from any other user using Bakra Market App, you will do it on your own responsibility.
                        </Text>

                        <Text style={styles.textContent}>
                            4. Bakra Market App only provides a platform to buyers and sellers of sheep and goat.
                        </Text>
                        <Text style={styles.textContent}>
                            5. Bakra App team will have the full right to remove any advertisement.
                        </Text>

                        <Text style={styles.textContent}>
                            6. If you face any kind of fraud or cheating during or after any kind of purchase or sale through the app, then Bakra Market App will not be responsible for any kind.
                        </Text>
                        <Text style={styles.textContent}>
                            7. There is no provision in Bakra Market App  Do not post information related to lost or stolen animals. Such advertisement will not be valid.
                        </Text>
                        <Text style={styles.textContent}>
                            8. You should do any kind of payment transaction on your own responsibility. Bakra Market App will not take any kind of responsibility of any user.
                        </Text>
                        <Text style={styles.textContent}>
                            9. You should enter your own information and phone number correctly in your profile.
                        </Text>
                    </View>
                    </ScrollView>
                </View>
            </View>
        </Background>
    );
};

const styles = StyleSheet.create({
    titleImage: {
        width: 385,
        height: 128,
        resizeMode: 'cover', // Options: 'cover', 'contain', 'stretch', 'repeat', 'center'
        marginBottom: 20,
        marginTop: -65
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
    marginTop20: { marginTop: 20 },
    textContent: { color: 'grey', fontSize: 16, paddingRight: 5, paddingLeft: 15, marginTop: 10 },
    scrollView: {
        alignItems: 'center',
      }
});
export default Term;