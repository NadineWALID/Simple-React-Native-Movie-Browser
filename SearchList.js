import * as React from 'react';
import {Text,View,Button} from 'react-native';
import Constants from 'expo-constants';
import Row from './MovieRow'
import { useNavigation } from '@react-navigation/native';






export default class SearchList extends React.Component {
 

  render(){
    return(
         <View>
          {this.props.movies.map((data)=>(
            
              <View>
                <Row  movie={data}/>
                <Button title="heloo" onPress={()=>{this.props.navigation.navigate('MovieDetails',{
                  line: data.Title ,
                })}}/>
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



