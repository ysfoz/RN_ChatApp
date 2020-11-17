import React,{useState} from 'react';
import moment from 'moment'
import {SafeAreaView, View, Text, FlatList,Image, KeyboardAvoidingView, Dimensions} from 'react-native';
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {timelinePage} from './styles';
import {PostItem, PostInput, Header, TopicSelectModal} from '../components';

const user = auth().currentUser; // firebase kullanildiginda usestorage yada redux a
// gerek kalmasdan , bu sekilde verilere ulasmamk mumkun.
console.log('buuuu',user.email.split('@')[0])
const Timeline = () => {

  const [topicModalFlag,setTopicModalFlag] = useState(true)
  const [selectedTopic,setSelectedTopic] = useState(null)
  const [postList,setPostList] = useState([])
  const [postItem,setPostItem] =useState({})

  const selectingTopic =(value)=>{
    database().ref(`/${selectedTopic}/`).off('value')

    setSelectedTopic(value);
    setTopicModalFlag(false)

    database()
    .ref(`${value}`)
    // . on yerine .once yazilsa guncelleme yapmaz, yani axios gibi veriyi bir defa alir, .on olunca her degisikligi okur.
    .on('value',(snapshot)=>{
      const data  = snapshot.val();
      let formattedData =[]
      console.log(data)
   
      data == null ?  formattedData = []  : formattedData = Object.keys(data).map((key) =>({...data[key]}))
      formattedData.sort((a,b) =>{
      return new Date(b.time) - new Date(a.time)
      })

      setPostList(formattedData)
    })

  }
  
  const sendingPost = (value)=>{
    const postObject = {
      userMail : user.email,
      postText : value,
      time : moment().toISOString()
    }
    setPostItem(postObject)
    postObject.postText && database().ref(`${selectedTopic}/`).push(postItem)
  }


  const renderPosts = ({item}) => <PostItem post ={item} />

  

  return (
    <SafeAreaView style={timelinePage.container}>
      <KeyboardAvoidingView 
      style={{flex: 1, backgroundColor: '#cfd8dc'}}
      behavior = {Platform.OS == 'ios' ? 'padding' : 'height' }>
  
      <View style={timelinePage.container}>
        <Header
        title ={selectedTopic}
        onTopicModalSelect = {() => setTopicModalFlag(true)}
        onLogOut = {() => auth().signOut()}
        />
        <View style={{flex:1}}>
        <Image 
        source = {require('../assets/1457016.jpg')}
        style={{
          position:'absolute',
          width:Dimensions.get('screen').width,
          height:Dimensions.get('screen').height,
     
        }}
        />
        <FlatList
        keyExtractor = {(_,i) => i.toString()}
        data={postList}
        renderItem ={renderPosts}
        />
        <PostInput
        onSendPost ={sendingPost}
        />
       
        </View>
        <TopicSelectModal
        visibility = {topicModalFlag}
        onClose = {()=> selectedTopic && setTopicModalFlag(false)}
        onTopicSelect ={selectingTopic}
       
        />
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export {Timeline};
