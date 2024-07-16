import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, ScrollView, Button } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen, roleUser } from './Constants';
import Field from './Field';
import ApiService from './services/ApiService';
import TermModal from './dialog/TermModal';

const Signup = props => {
  const [dataResponse, setResponseData] = useState(null);
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [username, setUserName] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const clearForm = () => {
    setFName('');
    setLName('');
    setUserName('');
    setContact('');
    setPassword('');
    setCPassword('');
    setData(null);
  }


  const handleOk = () => {
    setModalVisible(false);
    var singupData = {
      FirstName: fname.trim(),
      LastName: lname.trim(),
      UserName: username.trim(),
      Password: password.trim(),
      Mobile: contact.trim(),
      RoleID: roleUser
    }
    console.log(singupData);
    ApiService.post('Login/UserSignup', singupData)
      .then(response => {
        console.log(response.data.result);
        var result = response.data.result
        setResponseData(result);
        console.log(result);
        if (result.Message == "SUCCESS" || result.Message == "") {
          alert("User registration has been completed successfully.")
          props.navigation.navigate("Login");
        }
        else if (result.Message == "USERNAME_EXISTS") {
          alert("User name is already exists");
        }
        else {
          alert("Signup Failed!");
        }
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  };




  const onSignUp = () => {
    if (validateForm()) {
      handleOpenModal();
      //props.navigation.navigate('Login');
    }
  }



  const validateForm = () => {
    var flag = true;
    var msg = "";
    if (!fname.trim()) {
      msg += "\nFirst Name is Required";
      flag = false
    }
    if (!lname.trim()) {
      msg += "\nLast Name is Required";
      flag = false
    }
    if (!contact.trim()) {
      msg += "\nContact is Required";
      flag = false
    }
    if (!username.trim()) {
      msg += "\nUsername is Required";
      flag = false
    }
    if (!password.trim()) {
      msg += "\nPassword is Required";
      flag = false
    }
    if (!cPassword.trim()) {
      msg += "\nConfirm Password is Required";
      flag = false
    }
    if (password.trim() != cPassword.trim()) {
      msg += "\nPassword and Confirm Password is not Matched";
      flag = false
    }


    if (!flag) {
      alert(msg);
    }
    return flag;

  }


  return (
    <SafeAreaView style={styles.container}>
      <Background>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
          keyboardVerticalOffset={35}
        >
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={{ alignItems: 'center', width: 420 }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 64,
                  fontWeight: 'bold',
                  marginTop: 20,
                }}>
                Register
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 19,
                  fontWeight: 'bold',
                  marginBottom: 20,
                }}>
                Create a new account
              </Text>
              <View
                style={{
                  backgroundColor: 'white',
                  height: 700,
                  width: 420,
                  borderTopLeftRadius: 130,
                  paddingTop: 50,
                  alignItems: 'center',
                }}>
                <Field placeholder="First Name" maxLength={50} onChangeText={setFName} />
                <Field placeholder="Last Name" maxLength={50} onChangeText={setLName} />
                <Field placeholder="Contact Number" boardType="numeric" maxLength={10} onChangeText={setContact} />
                <Field placeholder="Username" boardType="email-address" maxLength={50} onChangeText={setUserName} />
                <Field placeholder="Password" secureTextEntry={true} maxLength={10} onChangeText={setPassword} />
                <Field placeholder="Confirm Password" secureTextEntry={true} maxLength={10} onChangeText={setCPassword} />
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '78%',
                    paddingRight: 16
                  }}>
                  <Text style={{ color: 'grey', fontSize: 16 }}>
                    By signing in, you agree to our{' '}
                  </Text>
                  <TouchableOpacity onPress={() => props.navigation.navigate("Term")}>
                    <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
                      Terms & Conditions
                    </Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: "center",
                    width: '78%',
                    paddingRight: 16,
                    marginBottom: 10
                  }}>
                  <Text style={{ color: 'grey', fontSize: 16 }}>
                    and {" "}
                  </Text>
                  <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
                    Privacy Policy
                  </Text>
                </View>
                <Btn
                  textColor="white"
                  bgColor={darkGreen}
                  btnLabel="Signup"
                  Press={() => onSignUp()}
                />
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    Already have an account ?{' '}
                  </Text>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('Login')}>
                    <Text
                      style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <TermModal visible={modalVisible} onClose={handleCloseModal} onOk={handleOk} />
          </ScrollView>
        </KeyboardAvoidingView>
      </Background>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    padding: 1,
  }
});

export default Signup;
