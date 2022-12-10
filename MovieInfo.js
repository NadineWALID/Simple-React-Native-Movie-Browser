import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Text, View,Image} from 'react-native';



const MovieInfo = (props) =>(

   <ScrollView style={styles.container}>

     <Text style={styles.title}> {props.movie.Title}</Text>
     <Image
       style={styles.poster}
       source={{uri:props.movie.Poster}}
     />
      <View style={styles.centerCont}>
         <Text style={styles.leftCont}>Year:</Text>
         <Text style={styles.rightCont}>{props.movie.Year}</Text>
      </View>

      <View style={styles.centerCont}>
         <Text style={styles.leftCont}>Rating:</Text>
         <Text style={styles.rightCont}>{props.movie.Rated}</Text>
      </View>

      <View style={styles.centerCont}>
         <Text style={styles.leftCont}>Released:</Text>       
         <Text style={styles.rightCont}>{props.movie.Released}</Text>
      </View>

      <View style={styles.centerCont}>
         <Text style={styles.leftCont}>Run Time:</Text>
         <Text style={styles.rightCont}>{props.movie.Runtime}</Text>
      </View>

      <View style={styles.centerCont}>
         <Text style={styles.leftCont}>Genre:</Text>
         <Text style={styles.rightCont}>{props.movie.Genre}</Text>
      </View>

      <View style={styles.centerCont}>
         <Text style={styles.leftCont}>Director:</Text>
         <Text style={styles.rightCont}>{props.movie.Director}</Text>
      </View>

      <View style={styles.centerCont}>
         <Text style={styles.leftCont}>Actors:</Text>
         <Text style={styles.rightCont}>{props.movie.Actors}</Text>
      </View>

      <View style={styles.centerCont}>
         <Text style={styles.leftCont}>Plot:</Text>
         <Text style={styles.rightCont}>{props.movie.Plot}</Text>
      </View>

      <View style={styles.centerCont}>
         <Text style={styles.leftCont}>Language:</Text>
         <Text style={styles.rightCont}>{props.movie.Language}</Text>
      </View>

      <View style={styles.centerCont}>
         <Text style={styles.leftCont}>Country:</Text>
         <Text style={styles.rightCont}>{props.movie.Country}</Text>
      </View>

      <View style={styles.centerCont}>
         <Text style={styles.leftCont}>Awards:</Text>
         <Text style={styles.rightCont}>{props.movie.Awards}</Text>
      </View>

      <View style={styles.centerCont}>
         <Text style={styles.leftCont}>IMBD Rating:</Text>
         <Text style={styles.rightCont}>{props.movie.imdbRating}</Text>
      </View>
         
      </ScrollView>
   
   




)





const styles = StyleSheet.create({
   container:{
     padding:50,
     flex: 1,
     backgroundColor:'#404040', 
    },
   title:{
       fontSize:25,
       fontWeight:'bold',
       textAlign:'center',
       color:'white',
       paddingBottom:10,
   },
 
poster: {
    width: 300,
    height: 500,
  },
  rowContainer:{
    fontSize:20,
    textAlign:'center',
    color:'white',
    width:300,

  },
  centerCont:{
    paddingTop:20,
    flexDirection: 'row'
  },
  rightCont:{
    fontSize:17,
    color:'white',
    width:150,
    
  },
  leftCont:{
    fontSize:20,
    fontWeight:'bold',
    color:'#A9A9A9',
    width:150,
  },
  


})

export default MovieInfo