import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Text, View,Image} from 'react-native';
import movies from './Movies'
import { withSafeAreaInsets } from 'react-native-safe-area-context';

//const renderItem = obj => <Row {...(obj.item)} />

/*export default class HomeScreen extends React.Component{

   render(){
    return(
        <View>
            <Text>Hello this is homesnnd!{this.props.route.params.movies}</Text>
        </View>
    )
   }

}*/
function replacer( value) {
    return value.slice(1,-1);
  }


function MovieInfo({route,navigation,props}) {
  const  movies  = route.params.movies[0];
  const imageUrl = route.params.movies[0].poster;
  
  return (
    <ScrollView style={styles.container}>

      
      <Text style={styles.title}> {replacer(JSON.stringify(movies.title))}</Text>
      <Image
          style={styles.poster}
          source={{uri:imageUrl}}
        />
    <View style={styles.centerCont}>
       <Text style={styles.leftCont}>Year:</Text>
       <Text style={styles.rightCont}>{replacer(JSON.stringify(movies.year))}</Text>
    </View>

    <View style={styles.centerCont}>
       <Text style={styles.leftCont}>Rating:</Text>
       <Text style={styles.rightCont}>{replacer(JSON.stringify(movies.rated))}</Text>
    </View>

    <View style={styles.centerCont}>
       <Text style={styles.leftCont}>Released:</Text>       
       <Text style={styles.rightCont}>{replacer(JSON.stringify(movies.released))}</Text>
    </View>

    <View style={styles.centerCont}>
       <Text style={styles.leftCont}>Run Time:</Text>
       <Text style={styles.rightCont}>{replacer(JSON.stringify(movies.runtime))}</Text>
    </View>

    <View style={styles.centerCont}>
       <Text style={styles.leftCont}>Genre:</Text>
       <Text style={styles.rightCont}>{replacer(JSON.stringify(movies.genre))}</Text>
    </View>

    <View style={styles.centerCont}>
       <Text style={styles.leftCont}>Director:</Text>
       <Text style={styles.rightCont}>{replacer(JSON.stringify(movies.director))}</Text>
    </View>

    <View style={styles.centerCont}>
       <Text style={styles.leftCont}>Actors:</Text>
       <Text style={styles.rightCont}>{replacer(JSON.stringify(movies.actors))}</Text>
    </View>

    <View style={styles.centerCont}>
       <Text style={styles.leftCont}>Plot:</Text>
       <Text style={styles.rightCont}>{replacer(JSON.stringify(movies.plot))}</Text>
    </View>

    <View style={styles.centerCont}>
       <Text style={styles.leftCont}>Language:</Text>
       <Text style={styles.rightCont}>{replacer(JSON.stringify(movies.language))}</Text>
    </View>

    <View style={styles.centerCont}>
       <Text style={styles.leftCont}>Country:</Text>
       <Text style={styles.rightCont}>{replacer(JSON.stringify(movies.country))}</Text>
    </View>

    <View style={styles.centerCont}>
       <Text style={styles.leftCont}>Awards:</Text>
       <Text style={styles.rightCont}>{replacer(JSON.stringify(movies.awards))}</Text>
    </View>

    <View style={styles.centerCont}>
       <Text style={styles.leftCont}>IMBD Rating:</Text>
       <Text style={styles.rightCont}>{replacer(JSON.stringify(movies.imdbRating))}</Text>
    </View>
      
    </ScrollView>
      
      
      
      
      
   
  );
}


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