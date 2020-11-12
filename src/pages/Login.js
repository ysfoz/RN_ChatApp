import React from 'react';
import {
  SafeAreaView,
  Dimensions,
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {authStyle} from './styles';
import {Input, Button} from '../components';
import auth from '@react-native-firebase/auth';

const Login = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView 
      style={{flex: 1, backgroundColor: '#cfd8dc'}}
      behavior = {Platform.OS == 'ios' ? 'padding' : 'height' }>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={authStyle.container}>

          <Image
          style={authStyle.logo}
          source ={require('../assets/dortmound.png')}/>
          <Text style={authStyle.logoText}>GELB-SCHWARZ</Text>
          <Text style={authStyle.logoText}>Chat</Text>
          </View>
          <View style={{flex:1}}>
            <Input
            inputProps = {{
              placeholder : 'type your email',
              keyboardType: 'email-address'
            }}
            />
            <Input
            inputProps = {{
              placeholder : 'Type your Password',
              secureTextEntry:true
            }}
            />

            <Button title = 'Sign In'/>
            <Button title = 'Sign Up' noBorder/>
          </View>
         
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export {Login};
