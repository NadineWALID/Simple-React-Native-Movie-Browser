import * as React from 'react';
import {Text,View,Button,StyleSheet,ScrollView,Image} from 'react-native';
import Constants from 'expo-constants';
import MovieInfo from './MovieInfo';
import { fetchMovie } from './movieApi';





export default class MovieDetails extends React.Component{

    state={
        movie:'',
        movieDetails:'',
    }
    componentDidMount= async()=>{
       
        const movieDetails=await fetchMovie(this.props.route.params.line);
        if (movieDetails.Response == "True")
        {
            this.setState({movieDetails: movieDetails}) 
        } 
        console.log(this.state.movieDetails)
        

    }

    /*fetchMovie = async() => {
        const URL="https://www.omdbapi.com/?t="+this.props.route.params.line+"&apikey=db87c2b4";
        const resp = await fetch(URL);
        const movieDetails = await resp.json();
        if (movieDetails.Response == "True")
        {
            this.setState({movieDetails: movieDetails}) 
        } 
        console.log(this.state.movieDetails)

          
    }*/

    render(){
        return(
            
            <MovieInfo  movie={this.state.movieDetails}/>
      
      
      
      
        )
           
        
    }

}

