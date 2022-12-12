import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Text, View,TextInput,Pressable,Alert} from 'react-native';
import SearchList from './SearchList'
import { fetchSearchResult } from './movieApi';




  

export default class HomeScreen extends React.Component {
    state={
        title:'',
        isFormValid:false,
        showSearchResults: false,
        movies:[],
      }

      handleTitleChange = title => {
        this.setState({title},this.validateForm)
        this.setState({showSearchResults: false})
      }

      validateForm =()=>{
        if (this.state.title.length >= 1)
        {
          this.setState({isFormValid: true})
        }
        
        else 
        {this.setState({isFormValid: false})}
        
      }

      handleSubmit = async() =>{
     
       const searchResult = await fetchSearchResult(this.state.title)
       if (searchResult.Response == "True")
        {
          this.setState({movies: searchResult.Search})
          this.setState({showSearchResults: true})   
        } 
        else{
          Alert.alert(
            "Movie Doesn't Exist",
            "Please try again",
            [
              {  text: "Ok",},
            ])
          
        }
         
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
          <ScrollView style={{paddingTop:20,}}>
          { this.state.showSearchResults ? (
          
            <SearchList  movies={this.state.movies} navigation={this.props.navigation}/>
          
         
          ):null
        
 
          }

          </ScrollView>
       
          
           
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

