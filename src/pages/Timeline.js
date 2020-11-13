import React,{useState} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import auth from '@react-native-firebase/auth'


import {timelinePage} from './styles';
import {PostItem, PostInput, Header, TopicSelectModal} from '../components';

const Timeline = () => {
  const user = auth().currentUser; // firebase kullanildiginda usestorage yada redux a
  // gerek kalmasdan , bu sekilde verilere ulasmamk mumkun.

  const [topicModalFlag,setTopicModalFlag] = useState(true)
  const [selectedTopic,setSelectedTopic] = useState(null)
  return (
    <SafeAreaView style={timelinePage.container}>
      <View style={timelinePage.container}>
        <Header
        title ={selectedTopic}
        onTopicModalSelect = {() => setTopicModalFlag(true)}
        />
        <FlatList
        keyExtractor = {null}
        data={[]}
        renderItem ={()=> null}
        />
        <PostInput
        onSendPost ={(value) =>console.log(value)}
        />
        <TopicSelectModal
        visibility = {topicModalFlag}
        onClose = {()=> selectedTopic ? setTopicModalFlag(false):null}
        onTopicSelect ={(value)=>{
          setSelectedTopic(value);
          setTopicModalFlag(false)
        } }
        />
      </View>
    </SafeAreaView>
  );
};

export {Timeline};
