import React from 'react';
import { View, Text, TextInput, Button, StyleSheet,ScrollView,Modal,TouchableOpacity } from 'react-native';
import { darkGreen } from '../Constants';

const TermModal = ({ visible, onClose,onOk  }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
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
                    Term & Condtion
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
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        margin:5,
                       
                    }}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() =>onOk()}
                            underlayColor='#fff'>
                            <Text style={styles.loginText}>Accept</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() =>onClose()}
                            underlayColor='#fff'>
                            <Text style={styles.loginText}>Cancel</Text>
                        </TouchableOpacity>

                       
                    </View>
                </ScrollView>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        width: 200,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 8,
    },
    textContent: { color: 'grey', fontSize: 16, paddingRight: 5, paddingLeft: 15, marginTop: 10 },
    scrollView: {
        alignItems: 'center',
      },
      btn:{
        margin:10,
        backgroundColor:darkGreen,
        color:"#fff",
        borderRadius:10,
        borderWidth:1,
        borderColor:darkGreen
      },
      loginText:{
        color:"#fff",
        fontSize: 16,
        padding:10,
       
      }
});

export default TermModal;