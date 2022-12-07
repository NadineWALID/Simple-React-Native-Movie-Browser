import * as React from 'react';
import {Text,View,Button} from 'react-native';
import Constants from 'expo-constants';
import Row from './MovieRow'
import { useNavigation } from '@react-navigation/native';
//import PropTypes from 'prop-types';


///A stateless functional component, so it takes some props,
//and it will return ()


//<Button onPress={() => navigation.navigate('MovieInfo')} title="View Movie"/>

const FindMovie = async(props) => {
  const URL="https://www.omdbapi.com/?t="+props.title+"&apikey=db87c2b4";
  const resp = await fetch(URL);
  const data = await resp.json();
  console.log(data.Response);
};


export default class SearchList extends React.Component {
  state={
    movies:this.props.movies,
    moviedetails:'',
  }

  handleClick = async(movieTitle) =>{
    const URL="https://www.omdbapi.com/?t="+movieTitle+"&apikey=db87c2b4";
    const resp = await fetch(URL);
    const movieDetails = await resp.json();
    if (movieDetails.Response == "True")
        {
          this.setState({moviedetails: movieDetails})
        } 


  } 

  render(){
    return(
         <View>
          {this.state.movies.map((data)=>(
            
              <View>
                <Row  movie={data}/>
                <Button title="heloo" onPress={() => this.handleClick(data.Title)}/>
              </View>
            
          )
            
          )}
         </View>
    )
  }
  
 /* return props.movies.map((data) => {
    const navigation = useNavigation(); 
    return (
      <View>
       <Row  movie={data}/>
      </View>
      
    )
  })*/

}



