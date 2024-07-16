import React from 'react';
import {TextInput} from 'react-native';
import {darkGreen} from './Constants';

const Field =  ({ boardType, ...props }) => {
  return (
    <TextInput
      {...props}
      style={{borderRadius: 100, color: darkGreen, paddingHorizontal: 15, width: '78%', 
              backgroundColor: 'rgb(220,220, 220)', marginVertical: 10,fontSize:17}}
      placeholderTextColor={darkGreen}
      keyboardType={boardType} 
      ></TextInput>
  );
};

export default Field;
