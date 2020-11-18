import React,{useState} from 'react';
import {
  SafeAreaView,
  Dimensions,
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth'
import LinearGradient from 'react-native-linear-gradient'

import {authStyle} from './styles';
import {Input, Button} from '../components';

const Sign = (props) => {
// passrepaet kullanmadanyapmayi deneyelim,ona gore bir yapi olusturalim
  const[userEmail,setUserEmail] =useState('')
  const[userPass,setUserPass] =useState('')
  const[passRepeat,setPassRepeat] = useState('')

  async function sign (){
    // gecerli password un girilip girilmedigini kontrol edelim REGEX yada kendi yazdigimiz kod
    // login de oldugu gibi olusan hatalara gore mesajlari kendimiz yazdiralim.
    if (userPass === passRepeat){
      try{
        await auth().createUserWithEmailAndPassword(userEmail,userPass);
        props.navigation.goBack();
      }catch (error){
        Alert.alert('Gelb-Schwarz','Es gibt ein Problem')
      } 
    }else{
      Alert.alert('Gelb-Schwarz','Password are not match')
    }
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#cfd8dc'}}
      behavior = {Platform.OS == 'ios' ? 'padding' : 'height' }>
        <LinearGradient colors={['black','#FDE100','black']} style={authStyle.linearGradient} >
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={authStyle.container}>
            <Image
            style={authStyle.logo}
            source = {require('../assets/dortmund.png')}
            />
            <Text style={authStyle.logoText}>Gelb-Schwarz Chat</Text>
          </View>
          <View style = {{flex:1}}>
            <Input
            inputProps = {{
              placeholder : 'Scrieben Sie Ihre email',
              keyboardType: 'email-address'
            }}
            onType = {(value)=> setUserEmail(value)}
           
            />
            <Input
            inputProps = {{
              placeholder : 'Kreativieren Sie Ihre Pass',
              secureTextEntry: true
            }}
            onType = {(value)=> setUserPass(value)}
            
            /><Input
            inputProps = {{
              placeholder : 'Scrieben Sie  das Pass nochmal',
              secureTextEntry: true
            }}
            onType = {(value)=> setPassRepeat(value)}
          />

            <Button title = 'Kreativieren Konto' onPress = {sign}/>
            <Button
             title = 'Stornieren' 
             noBorder
            onPress={()=> props.navigation.goBack()}
             />
         
          </View>
          
            
        </ScrollView>
        </LinearGradient>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export {Sign};
