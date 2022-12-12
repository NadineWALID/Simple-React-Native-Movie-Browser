import * as React from 'react';
import {Text,View,Button,StyleSheet,ScrollView,Image,Alert} from 'react-native';
import Constants from 'expo-constants';
import MovieInfo from './MovieInfo';
import { fetchMovie } from './movieApi';





export default class MovieDetails extends React.Component{

    state={
        movie:'',
        movieDetails:'',
    }
    componentDidMount= async()=>{
       
        const movieDetails=await fetchMovie(this.props.route.params.title);
        if (movieDetails.Response == "True")
        {
            this.setState({movieDetails: movieDetails}) 
        } 
        else{
            Alert.alert(
                "Movie Information Doesn't exist",
                [
                  { text: "OK", onPress: () => this.props.navigation.goBack() }
                ]
              );
        }
        
        

    }

    render(){
        return(
            
            <MovieInfo  movie={this.state.movieDetails}/> 
      
        )
           
        
    }

}

