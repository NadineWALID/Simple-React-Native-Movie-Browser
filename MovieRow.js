import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import Constants from 'expo-constants';

styles = StyleSheet.create({
  row:{
    flexDirection: 'row',
    paddingRight:15,
    borderStyle:'solid',
    borderColor:'black',
    borderWidth:1,
  },
  poster: {
    width: 75,
    height: 110,
  },
  title:{
    paddingTop:30,
    fontSize:20,
    textAlign:'center',
    paddingRight:60,
    paddingLeft:50,
    color:'white',
    paddingBottom:10,
},
ViewButton:{
  width:400,
  backgroundColor:'black',
  height:30,
  justifyContent:'center',
  textAlign:'center',

},
ViewButtonText:{
 color:'white',
 textAlign:'center',
}

})

//const imageUrl = route.params.movies[0].poster;

const Row = (props) =>(
    
      <View style={styles.row}>
      <Image
          style={styles.poster}
          source={{uri:props.movie.Poster}}
        />
    <Text style={styles.title}>      {props.movie.Title}(<Text>{props.movie.Year}</Text>)</Text>
    

      </View>
    
   
  )
  
  
export default Row