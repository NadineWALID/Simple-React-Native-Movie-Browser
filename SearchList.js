import * as React from 'react';
import {Text} from 'react-native';
import Constants from 'expo-constants';
import Row from './MovieRow'
//import PropTypes from 'prop-types';


///A stateless functional component, so it takes some props,
//and it will return ()


const renderItem = obj => <Row {...(obj.item)} />
  
const  renderSectionHeader = obj =>  <Text>{obj.section.title}</Text>

const SearchList = props =>{
 
  
  return props.movies.map((data) => {
    return (
      <Row  movie={data}/>
      
    )
  })

}



export default SearchList