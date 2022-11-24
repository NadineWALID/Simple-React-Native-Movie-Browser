import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,SectionList} from 'react-native';
import Row from './MovieRow'
import movies from './Movies'
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const renderItem = obj => <Row {...(obj.item)} />

/*export default class HomeScreen extends React.Component{

   render(){
    return(
        <View>
            <Text>Hello this is homesnnd!{this.props.route.params.movies}</Text>
        </View>
    )
   }

}*/
function replacer( value) {
    return value.slice(1,-1);
  }


function HomeScreen({route,navigation,props}) {
  const  movies  = route.params.movies[0];
  
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}> {replacer(JSON.stringify(movies.title))}</Text>
      <Text style={styles.year}><Text style={styles.header}>Year:</Text>  {replacer(JSON.stringify(movies.year))}
      <Text style={[styles.header,styles.paddingRightHeader]}>Rating:</Text>  {replacer(JSON.stringify(movies.rated))}</Text>
      <Text> {JSON.stringify(movies.poster)}</Text>
      
    </View>
  );
}


const styles = StyleSheet.create({
   container:{
     padding:50,
     flex: 1,
     backgroundColor:'#404040', 
    },
   title:{
       fontSize:20,
       fontWeight:'bold',
       textAlign:'center',
       color:'white',
   },
   year:{
    flexDirection: 'row',
    padding:10,
    fontSize:15,
    textAlign:'center',
    color:'white',
    
},
header:{
    
    fontSize:15,
    fontWeight:'bold',
    color:'#A9A9A9',
    
},
paddingRightHeader:{
    textAlign:'right',
},

})

export default HomeScreen