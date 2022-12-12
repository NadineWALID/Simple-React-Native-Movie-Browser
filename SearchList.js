import * as React from 'react';
import {View,TouchableOpacity} from 'react-native';
import Row from './MovieRow'






export default class SearchList extends React.Component {
 

  render(){
    return(
         <View>
          {this.props.movies.map((data)=>(
            
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate('MovieDetails',{
                title: data.Title ,
                 })}}>
                <Row  movie={data}/>
              </TouchableOpacity>
            
          )
            
          )}
         </View>
    )
  }
  
 

}



