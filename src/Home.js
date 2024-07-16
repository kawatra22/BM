import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen, green } from './Constants';
import LinearGradient from 'react-native-linear-gradient';

const Home = (props) => {
  return (
    <Background>
      <View style={{  zIndex: 3}}>
      <Image
            source={require('./assets/GoatsFull.png')} // Path to your local image
            style={styles.gImage}
          />
      </View>
      <View style={{
        marginHorizontal: 0,
        // backgroundColor: "#f7f7f7",
        padding: 10,
        // borderTopLeftRadius: 130,
       // borderRadius:20,
       borderBottomLeftRadius: 20,
       borderBottomRightRadius: 20,
        alignItems: "center",
        zIndex: 1,
        // borderColor:"#FFF100",
        // borderTopColor:"#ffffff",
        // borderWidth :3
      }}>
        {/* <View style={styles.row}> */}
        <View style={{alignItems: 'flex-end',width:'100%'}} >
          <Image
            source={require('./assets/Logo.png')} // Path to your local image
            style={styles.image}
          />
          </View>
          <View >
          <Image
            source={require('./assets/Title2.png')} // Path to your local image
            style={styles.titleImage}
          />
          </View>
        {/* </View> */}


        <Btn bgColor={green} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
        <Btn bgColor='#e1ede9' textColor={darkGreen} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover', // Options: 'cover', 'contain', 'stretch', 'repeat', 'center'
    margin: 0,
    marginRight:30
  },
  titleImage: {
    width: 400,
    height: 128,
    resizeMode: 'center', // Options: 'cover', 'contain', 'stretch', 'repeat', 'center'
    marginBottom: 20,
    marginTop:-55
  },
  gImage: {
    width: 412,
    height: 300,
    resizeMode: 'cover', // Options: 'cover', 'contain', 'stretch', 'repeat', 'center'
    marginBottom: 10,
    marginVertical:'10%',
   
  },
  row: {
    flexDirection: 'row', // Align children in a row
    alignItems: 'center', // Align children vertically in the center
    marginBottom: 20,
  },
});

export default Home;
