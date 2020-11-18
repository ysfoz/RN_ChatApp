import {StyleSheet, Dimensions} from 'react-native';


export const authStyle = StyleSheet.create({
  container: {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  logo: {
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
  },
  logoText: {
      color: 'black',
      fontSize: 30,
      fontWeight: 'bold'
  },
  linearGradient: {
    flex: 1,
    borderRadius: 5
  },
});

export const timelinePage = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
});
