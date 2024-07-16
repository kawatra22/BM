import React, { useState, useEffect } from 'react';
import { View, Text, Touchable, StyleSheet, TouchableOpacity, Image,KeyboardAvoidingView ,SafeAreaView,ScrollView } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen } from './Constants';
import Field from './Field';
import { dtoUserLogin, dtoRequest } from './model/seviceModel';
import ApiService from './services/ApiService';


const Login = (props) => {
  const [name, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [dataResponse, setResponseData] = useState([]);

  useEffect(() => {
    setUserName('');
    setPassword('');
    setError('');
    setResponseData([]);
  }, []);

  let userLogin = new dtoUserLogin();
  let request = new dtoRequest();
  const validateForm = () => {
    if (!name.trim() || !password.trim()) {
      setError('Name and Password are required.');
      return false;
    }
    else {
      setError('');
      return true;
    }
  };

  const showError = (message) => {
    Alert.alert('Error', message, [{ text: 'OK' }]);
  };

  const handlePress = () => {
    var self = this;
    if (validateForm()) {
      // Form is valid, proceed with submission
      //alert('Form submitted successfully!');

      if (name.trim() == "admin" && password.trim() == "admin") {
        props.navigation.navigate("Dashboard");
      }
      else {
        ApiService.get('Login/Login?userName=' + name.trim() + "&password=" + password.trim(),)
          .then(response => {
            console.log(response.data.result);
            var result = response.data.result;
            setResponseData(result);
            if (!result.Data) {
              if (result.Message == "NO_RECORD_FOUND") {
                setError("Login failed, either username or password is invalid.");
              }
            }
            else
            {
              props.navigation.navigate("Dashboard");
            }
          })
          .catch(error => {
            console.error('There was an error fetching the data!', error);
          });
      }
    }
  };


  return (
    <SafeAreaView style={styles.container}>
       
    <Background>
    <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
          keyboardVerticalOffset={40}
        >
            <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={{ alignItems: 'center', width: 460 }}>
        <Text
          style={{
            color: 'white',
            fontSize: 50,
            fontWeight: 'bold',
            marginVertical: 20,
            marginRight: 51
          }}>
          Login
        </Text>

        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 425,
            borderTopLeftRadius: 100,
            paddingTop: 100,
            alignItems: 'center',
            marginRight: 35
          }}>
          <View >
            <Image
              source={require('./assets/Title.png')} // Path to your local image
              style={styles.titleImage}
            />
          </View>
          <Text style={{ fontSize: 40, color: darkGreen, fontWeight: 'bold' }}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <Field
            placeholder="Username"
            onChangeText={setUserName}
          />
          <Field placeholder="Password" secureTextEntry={true} onChangeText={setPassword} />
          <View
            style={{ alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 50 }}>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
              Forgot Password ?
            </Text>
          </View>
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <Btn textColor='white' bgColor={darkGreen} btnLabel="Login" Press={() => handlePress()} />
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
              <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </Background>
    </SafeAreaView>
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
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    padding: 1,
  }
});
export default Login;
