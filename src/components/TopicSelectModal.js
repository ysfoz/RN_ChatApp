import React,{useState} from "react";
import { View, Text, TouchableOpacity,TextInput,ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Modal from "react-native-modal";

import { topicModal } from "./styles";

const topics = ["SpielTag", "Nachrichten", "Ankündigungen", "AndereZweige", "random"]
const TopicSelectModal = (props) => {


  return (
    <Modal
      isVisible ={props.visibility}
      style ={topicModal.modal}
      onBackdropPress={props.onClose}>
      <View style={topicModal.container}>
        {topics.map((topic, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={topicModal.topicItemContainer}
              onPress={() => props.onTopicSelect(topic)}
              onLongPress = {props.deleteTopic}
            >
              <Text style={topicModal.topicItemText}>#{topic}</Text>
            </TouchableOpacity>
          );
        })}
        <Text></Text>
      </View>
    </Modal>
  );
};

const AddTopic =(props) => {
  const [newTopic,setNewTopic] = useState('')
  
  // const searchText = (value) => {
  //   const filteredList = topics.filter((item) => {
  //     const userText = value.toUpperCase();
  //     const topic = item.toUpperCase();
  //     return topic.indexOf(userText) > -1;
  //   });
  //   setCityList(filteredList);
  // };

  return (
    <Modal
    isVisible ={props.visibility}
    style ={topicModal.addtopicmodal}
    onBackdropPress ={props.onBackdropPress}
    >
      <View style={topicModal.addtopiccontainer}>

      <TextInput
         placeholder = 'Schreiben Sie den Name des Channel'
         placeholderTextColor='rgba(0,0,0,0.7)'
         onChangeText= {(val)=> setNewTopic(val)} 
         style = {topicModal.textinput}
         />
         <View style={{flexDirection:'row'}}>

         <TouchableOpacity 
         style= {topicModal.touchable}
         onPress = {()=> topics.push(newTopic)}
         >
           <Text style={topicModal.text}>Create</Text>
         </TouchableOpacity>
         <TouchableOpacity 
         style= {topicModal.touchable}
         onPress = {()=> topics.push(newTopic)}
         >
           <Text style={topicModal.text}>Delete</Text>
         </TouchableOpacity>
        
         </View>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        >
          {
            topics.map(item => 
            <TouchableOpacity style = {topicModal.scrollButton}>
            <Text style = {topicModal.scrollText}>{item}</Text>
            </TouchableOpacity>
              
            )}
        </ScrollView>
         </View>
    </Modal>
  )
}










export { TopicSelectModal, AddTopic };
