import * as React from 'react';
import { FlatList, Text, View, StyleSheet,SectionList } from 'react-native';
import Constants from 'expo-constants';
import Row from './MovieRow'
//import PropTypes from 'prop-types';


///A stateless functional component, so it takes some props,
//and it will return ()


const renderItem = obj => <Row {...(obj.item)} />
  
const  renderSectionHeader = obj =>  <Text>{obj.section.title}</Text>

const SearchList = props =>{
  console.log(props.movies);
  
  return props.movies.map((data) => {
    return (
      <Row  movie={data}/>
      
    )
  })

}



export default SearchList