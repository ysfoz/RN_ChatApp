import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {post_input} from './styles';

const PostInput = (props) => {
  const [postText, setPostText] = React.useState('');

  return (
    <View >
    <View style={post_input.container}>
     <View style ={post_input.inputContainer}>
       <TextInput 
       style={{fontSize:20}}
       multiline
       placeholder = 'Schriebe something...'
       onChangeText= {(val)=> setPostText(val)} 
       clearTextOnFocus= {true}
       autoFocus ={true}
       />
       
     </View>
    
     </View>
     <TouchableOpacity 
     style= {{backgroundColor:'#FDE100',position:'absolute',right:1, bottom:10,borderRadius:30}} 
     onPress = {()=>props.onSendPost(postText)}>
    <Icon name = 'telegram' size={50} color ='black'/>
     </TouchableOpacity>
    </View>
  );
};

export {PostInput};
