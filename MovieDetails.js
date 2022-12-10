import * as React from 'react';
import {Text,View,Button,StyleSheet,ScrollView,Image} from 'react-native';
import Constants from 'expo-constants';





export default class MovieDetails extends React.Component{

    state={
        movie:'',
        movieDetails:'',
    }
    componentDidMount= async()=>{
        //const URL="https://omdbapi.com/?t=27+dresses&apikey=db87c2b4";
        const URL="https://www.omdbapi.com/?t="+this.props.route.params.line+"&apikey=db87c2b4";
        const resp = await fetch(URL);
        const movieDetails = await resp.json();
        this.setState({movieDetails: movieDetails})
        console.log(this.state.movieDetails)

    }
    fetchMovie = async() => {
        const movieTitle=this.props.route.params.params.line
        //const URL="https://omdbapi.com/?t="movieTitle"Key=db87c2b4";
        const URL="https://omdbapi.com/?t=27+dresses&apikey=db87c2b4";
        const resp = await fetch(URL);
        const movieDetails = await resp.json();
        console.log(movieDetails)
        if (movieDetails.Response == "True")
        {
          this.setState({movieDetails: movieDetails})
        } 

          
    }

    render(){
        return(
            <ScrollView style={styles.container}>
            <Text style={styles.title}> {this.state.movieDetails.Title}</Text>
            <Image
             style={styles.poster}
             source={{uri:this.state.movieDetails.Poster}}
             />
             <View style={styles.centerCont}>
             <Text style={styles.leftCont}>Year:</Text>
             <Text style={styles.rightCont}>{this.state.movieDetails.Year}</Text>
            </View>

            <View style={styles.centerCont}>
       <Text style={styles.leftCont}>Rating:</Text>
       <Text style={styles.rightCont}>{this.state.movieDetails.Rated}</Text>
    </View>

    <View style={styles.centerCont}>
       <Text style={styles.leftCont}>Released:</Text>       
       <Text style={styles.rightCont}>{this.state.movieDetails.Released}</Text>
    </View>

    <View style={styles.centerCont}>
       <Text style={styles.leftCont}>Run Time:</Text>
       <Text style={styles.rightCont}>{this.state.movieDetails.Runtime}</Text>
    </View>

    <View style={styles.centerCont}>
       <Text style={styles.leftCont}>Genre:</Text>
       <Text style={styles.rightCont}>{this.state.movieDetails.Genre}</Text>
    </View>

    <View style={styles.centerCont}>
       <Text style={styles.leftCont}>Director:</Text>
       <Text style={styles.rightCont}>{this.state.movieDetails.Director}</Text>
    </View>
    <View style={styles.centerCont}>
       <Text style={styles.leftCont}>Actors:</Text>
       <Text style={styles.rightCont}>{this.state.movieDetails.Actors}</Text>
    </View>

    <View style={styles.centerCont}>
       <Text style={styles.leftCont}>Plot:</Text>
       <Text style={styles.rightCont}>{this.state.movieDetails.Plot}</Text>
    </View>

    <View style={styles.centerCont}>
       <Text style={styles.leftCont}>Language:</Text>
       <Text style={styles.rightCont}>{this.state.movieDetails.Language}</Text>
    </View>

    <View style={styles.centerCont}>
       <Text style={styles.leftCont}>Country:</Text>
       <Text style={styles.rightCont}>{this.state.movieDetails.Country}</Text>
    </View>

    <View style={styles.centerCont}>
       <Text style={styles.leftCont}>Awards:</Text>
       <Text style={styles.rightCont}>{this.state.movieDetails.Awards}</Text>
    </View>

    <View style={styles.centerCont}>
       <Text style={styles.leftCont}>IMBD Rating:</Text>
       <Text style={styles.rightCont}>{this.state.movieDetails.imdbRating}</Text>
    </View>
    
      
             </ScrollView>
      
      
      
      
      
        )
           
        
    }

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