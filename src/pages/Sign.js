import React from 'react';
import {
  SafeAreaView,
  Dimensions,
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import {authStyle} from './styles';
import {Input, Button} from '../components';

const Sign = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#cfd8dc'}}>
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
           
            />
            <Input
            inputProps = {{
              placeholder : 'Kreativieren Sie Ihre Pass',
              secureTextEntry: true
            }}
            
            /><Input
            inputProps = {{
              placeholder : 'Scrieben Sie  das Pass nochmal',
              secureTextEntry: true
            }}
          />

            <Button title = 'Kreativieren Konto'/>
            <Button
             title = 'Stornieren' 
             noBorder
            onPress={()=> props.navigation.goBack()}
             />
         
          </View>
          
            
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export {Sign};
