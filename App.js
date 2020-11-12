
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Icon  from 'react-native-vector-icons/FontAwesome'

const App: () => React$Node = () => {
  return (
<SafeAreaView>
  <View>
    <Text>deneme</Text>
    <Icon name = 'fire' size = {40} color='red'/>
  </View>
</SafeAreaView>
  )}
export default App;
