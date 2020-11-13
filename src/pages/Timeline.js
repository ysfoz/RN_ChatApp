import React,{useState} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'

import {timelinePage} from './styles';
import {PostItem, PostInput, Header, TopicSelectModal} from '../components';

const user = auth().currentUser; // firebase kullanildiginda usestorage yada redux a
// gerek kalmasdan , bu sekilde verilere ulasmamk mumkun.
const Timeline = () => {

  const [topicModalFlag,setTopicModalFlag] = useState(true)
  const [selectedTopic,setSelectedTopic] = useState(null)

  const selectingTopic =(value)=>{
    setSelectedTopic(value);
    setTopicModalFlag(false)

    database()
    .ref()
    // . on yerine .once yazilsa guncelleme yapmaz, yani axios gibi veriyi bir defa alir, .on olunca her degisikligi okur.
    .on('value',(snapshot)=>{
      console.log(snapshot.val())
    })

  }
  
  const sendingPost = (value)=>{
    console.log(value)
  }

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
        onSendPost ={sendingPost}
        />
        <TopicSelectModal
        visibility = {topicModalFlag}
        onClose = {()=> selectedTopic && setTopicModalFlag(false)}
        onTopicSelect ={selectingTopic}
       
        />
      </View>
    </SafeAreaView>
  );
};

export {Timeline};
