import * as React from 'react';
import Constants from 'expo-constants';
import { StyleSheet,ScrollView, Text, View,Image} from 'react-native';


function MovieDetails({route,navigation}) {
    const  data  = route.params.movie.data;

    const [movies, setMovies] = React.useState(null);
    
    const FindMovie = async() => {
        const URL="https://www.omdbapi.com/?t="+data.Title+"&apikey=db87c2b4";
        const resp = await fetch(URL);
        const movie = await resp.json();
        setMovies(movie);
        
      };

      console.log(movies)
   
    
    
   return(
    <View>
        <Text>Helllo from details screen</Text>
    </View>
   )
}


export default MovieDetails;