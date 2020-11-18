import {StyleSheet, Dimensions} from 'react-native';

export const input = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    margin: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  textInput: {
    paddingVertical:10
  },
});

export const button = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    margin: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:20
  },
});

export const button_outline = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    color: '#FDE100',
    fontWeight: 'bold',
    fontSize:20
  },
});

export const postitem = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: 'white',
    width:Dimensions.get('screen').width *0.86,
    borderRadius:10,
    marginLeft:5
  },
  headerContainer: {
    padding: 5,
    backgroundColor: 'rgba(253,225,0,0.5)',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderTopRightRadius:10,
    borderTopLeftRadius:10
  },
  username: {
    fontWeight: 'bold',
    color: 'black',
  },
  bodyContainer: {
     padding: 5
  },
  time: {
    color: 'black',
    fontStyle: 'italic'
  },
  Text:{
    fontSize:18
  }
});

export const post_input = StyleSheet.create({
   container: {
      width: Dimensions.get('window').width * 0.87,
      // alignSelf: 'center',
      bottom: 10,
      position: 'relative',
      backgroundColor: '#e0e0e0',
      borderRadius: 25,
      paddingHorizontal: 10,
      paddingVertical:10,
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: "#b0bec5"
   },  
   inputContainer: {
      flex: 1,
   },
   button: {

   }
});

export const header = StyleSheet.create({
   container: {
      flexDirection: 'row',
      padding: 5,
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: '#90a4ae'
   },  
   textContainer: {
      flex: 1
   },  
   text: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#FDE100'
   },  
});

export const topicModal = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
    padding: 0,
    paddingHorizontal: 10
  },  
  container: {
    paddingTop: 5,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  topicItemContainer: {
     padding: 10,
  },  
  topicItemText: {
     fontSize: 20,
     fontWeight: 'bold',
     color: '#78909c'
  },
  addtopicmodal:{
    
  },
  addtopiccontainer:{
    backgroundColor:'rgba(255,229,204,0.6)',
    borderRadius:10

  },
  touchable:{
    backgroundColor:'rgba(0,0,0,0.6)',
    marginVertical:10,
    borderWidth:2,
    width:160,
    marginHorizontal:13,
    borderRadius:6,
    
  },
  text:{
    fontSize:20,
    padding:10,
    textAlign:'center',
    fontWeight:'bold',
    color:'white'
    
  },
  textinput:{
    fontSize:20,
    padding:10,
    borderBottomWidth:1,
    
   
   
    
  },
  scrollText:{
    fontSize:20,
    marginHorizontal:5,
    padding:10,
    borderWidth:1,
    backgroundColor:'rgba(255,255,51,0.3)',
    borderRadius:6
  },
  scrollButton:{
    backgroundColor:'rgba(255,229,204,0.4)',
    marginBottom:10
    
  }

});
