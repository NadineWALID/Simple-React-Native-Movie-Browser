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

const SearchList = props =>{
 
  
  return props.movies.map((data) => {
    const navigation = useNavigation(); 
    return (
      <View>
       <Row  movie={data}/>
       <Button onPress={() => navigation.navigate('MovieInfo')} title="View Movie"/>
      </View>
      
    )
  })

}



export default SearchList