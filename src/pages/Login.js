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
 }else{Alert.alert('Gelb-Schwarz','Bitte geben Sie eine gültige E-Mail-Adresse und ein Passwort ein.')}
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

        <LinearGradient colors={['black','#FDE100','black']} style={authStyle.linearGradient} >
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
              placeholder : 'Schreiben Sie Ihre Email',
              keyboardType: 'email-address'
            }}
            onType ={(value) => setUserEmail(value)}
            />
            <Input
            inputProps = {{
              placeholder : 'Schreiben Sie Ihr Passwort',
              secureTextEntry:true
            }}
            onType ={(value) => setUserPass(value)}
            />

            <Button title = 'Einlogen' onPress={login}/>
            <Button title = ' Anmelden ' noBorder onPress = {()=> props.navigation.navigate('Sign')}
            />
          </View>
         
        </ScrollView>
            </LinearGradient>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export {Login};
