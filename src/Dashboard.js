import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert, FlatList, SafeAreaView } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen } from './Constants';
import Field from './Field';
import { dtoUserLogin, dtoRequest } from './model/seviceModel';
import ApiService from './services/ApiService';
import { Card, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Dashboard = (props) => {
    const username = 'User';
    const products = [
        { id: '1', name: 'Product 1', price: 'INR10000', image: require('./assets/b1.jpg') },
        { id: '2', name: 'Product 2', price: 'INR30000', image: require('./assets/b2.jpg') },
        { id: '3', name: 'Product 3', price: 'INR40000', image: require('./assets/b3.jpg') },
        { id: '4', name: 'Product 4', price: 'INR60000', image: require('./assets/b4.jpg') },
        // Add more products here
    ];

    const renderItem = ({ item }) => (
        <Card style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Card.Content>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </Card.Content>
            <Card.Actions>
                <Button onPress={() => props.navigation.navigate('ProductDetail', { product: item })}>View</Button>
            </Card.Actions>
        </Card>
    );
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
                        <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.profileImage} />
                    </TouchableOpacity>
                    <Text style={styles.username}>Hello, {username}</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                        <Icon name="logout" size={24} color="#fff" style={styles.logoutIcon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.search}>
                    <TextInput style={styles.searchInput} placeholder="Search products" />
                </View>

                <FlatList
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.list}
                    style={{ width: '90%', marginTop: 5, height: "80%" }}
                />



            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('ContactUs')} style={styles.footerButton}>
                    <Icon name="contact-mail" size={24} color="#fff" />
                    <Text style={styles.footerButtonText}>Contact Us</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AboutUs')} style={styles.footerButton}>
                    <Icon name="info" size={24} color="#fff" />
                    <Text style={styles.footerButtonText}>About Us</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AddProduct')} style={styles.footerButton}>
                    <Icon name="add-circle-outline" size={24} color="#fff" />
                    <Text style={styles.footerButtonText}>Add Product</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Report')} style={styles.footerButton}>
                    <Icon name="report-problem" size={24} color="#fff" />
                    <Text style={styles.footerButtonText}>Report</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        paddingBottom: 10
    },
    header: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#006A42',
        flexDirection: 'row',
        alignItems: 'center',
    },
    search:
    {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#fffff',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',

    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    username: {
        flex: 1,
        marginLeft: 16,
        color: '#fff',
        fontSize: 18,
    },
    searchInput: {
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 40,
        flex: 1,
        borderWidth: 2,
        borderColor: "#ccc"
    },
    list: {
        padding: 16,
    },
    card: {
        marginBottom: 16,
        borderRadius: 8,
        overflow: 'hidden',
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 8,
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#333',
    },
    price: {
        fontSize: 16,
        marginBottom: 8,
        color: '#666',
    },
    button: {
        alignSelf: 'flex-start',
        backgroundColor: '#6200ea',
    },
    buttonLabel: {
        color: '#fff',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#006A42',
    },
    footerButton: {
        alignItems: 'center',
    },
    footerButtonText: {
        color: '#fff',
        fontSize: 12,
        marginTop: 4,
    },
});

export default Dashboard;