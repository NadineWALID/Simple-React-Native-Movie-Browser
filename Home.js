import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Text, View,Button,SectionList,Image,TextInput,Pressable} from 'react-native';
import Row from './MovieRow'
import movies from './Movies'
import { withSafeAreaInsets } from 'react-native-safe-area-context';



/*export default class HomeScreen extends React.Component{

   render(){
    return(
        <View>
            <Text>Hello this is homesnnd!{this.props.route.params.movies}</Text>
        </View>
    )
   }

}*/




export default class HomeScreen extends React.Component {
    state={
        title:'',
        isFormValid:false,
      }

      handleTitleChange = title => {
        this.setState({title},this.validateForm)
      }

      validateForm =()=>{
        if (this.state.title.length >= 1)
        {
          this.setState({isFormValid: true})
        }
        
        else 
        {this.setState({isFormValid: false})}
        
      }

      handleSubmit = () =>{
     
        //this.props.onSubmit({title: this.state.title})
       
      } 
   
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.searchContainer}>
          <TextInput placeholder='Movie Title....' style={styles.input} onChangeText={this.handleTitleChange} value={this.state.title}/>
          <Pressable  style={styles.searchButton} onPress={this.handleSubmit} disabled={!this.state.isFormValid} >
          <Text style={styles.searchButtonText}> Search </Text>
          </Pressable>
          </View>
          
           
        </View>
      );
    }
  }


const styles = StyleSheet.create({
   container:{
     padding:20,
     flex: 1,
     backgroundColor:'#404040', 
    },
    input:{
       
        borderColor:'black',
        borderWidth:'1',
        marginTop: 16,
        width:300,
        height: 50,
        backgroundColor:'#B8B8B8',
        color:'white', 
        borderRadius: 4,
        padding:5,
        
      },
    searchContainer:{
        flexDirection: 'row'
    },
    searchButton:{
      paddingTop:30,
      paddingVertical: 12,
        
    },
    searchButtonText:{
        fontSize: 20,
        color: '#B8B8B8',
       

    },

})

