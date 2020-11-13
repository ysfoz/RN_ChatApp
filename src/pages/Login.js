import React, {useState} from 'react';
import {
  SafeAreaView,
  Dimensions,
  Alert,
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'


import {authStyle} from './styles';
import {Input, Button} from '../components';
import auth from '@react-native-firebase/auth';
import { resolveAuthError } from '../functions';

const Login = (props) => {
  const [userEmail,setUserEmail] = useState('')
  const[userPass,setUserPass] = useState('')
  
 function login(){
   // if else kismi signuptan sonra denenecek
   if (userEmail && userPass){
    auth()
      .signInWithEmailAndPassword(userEmail,userPass)
      .then(() => props.navigation.navigate('Timeline'))
      .catch((error) => Alert.alert('Gelb-Schawrz',resolveAuthError(error.code)))
 }else{Alert.alert('Gelb-Schwarz','empty values')}
}
// await ile bu sekilde yazilir
// async function login(){  
//   try {
//     await auth().signInWithEmailAndPassword(userEmail,userPass)
//   } catch (error){
//     Alert.alert('Gleb-Schwarz',resolveAuthError(error.code))
//   }
// }
  
    return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView 
      style={{flex: 1, backgroundColor: '#cfd8dc'}}
      behavior = {Platform.OS == 'ios' ? 'padding' : 'height' }>

        <LinearGradient colors={['black','#FCEA1D','black']} style={authStyle.linearGradient} >
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={authStyle.container}>

          <Image
          style={authStyle.logo}
          source ={require('../assets/dortmund.png')}/>
          <Text style={authStyle.logoText}>GELB-SCHWARZ</Text>
          <Text style={authStyle.logoText}>Chat</Text>
          </View>
          <View style={{flex:1}}>
            <Input
            inputProps = {{
              placeholder : 'type your email',
              keyboardType: 'email-address'
            }}
            onType ={(value) => setUserEmail(value)}
            />
            <Input
            inputProps = {{
              placeholder : 'Type your Password',
              secureTextEntry:true
            }}
            onType ={(value) => setUserPass(value)}
            />

            <Button title = 'Sign In' onPress={login}/>
            <Button title = 'Sign Up' noBorder onPress = {()=> props.navigation.navigate('Sign')}
            />
          </View>
         
        </ScrollView>
            </LinearGradient>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export {Login};
