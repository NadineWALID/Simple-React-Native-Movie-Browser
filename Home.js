import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Text, View,TextInput,Pressable} from 'react-native';
import Row from './MovieRow'
import SearchList from './SearchList'
import { withSafeAreaInsets } from 'react-native-safe-area-context';




  

export default class HomeScreen extends React.Component {
    state={
        title:'',
        isFormValid:false,
        //movies: [{"Poster": "https://m.media-amazon.com/images/M/MV5BMmFjZjllZTQtZjQ0ZS00Y2M1LWI1NjYtYjQ2YzczOTQyMjJjXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg", "Title": "Devil in a Blue Dress", "Type": "movie", "Year": "1995", "imdbID": "tt0112857"}, {"Poster": "https://m.media-amazon.com/images/M/MV5BMzkyYWY3NTEtYzBkNC00Zjc3LThmY2UtZWU3MTRkMTgwODU5XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX300.jpg", "Title": "My Dress-Up Darling", "Type": "series", "Year": "2022–", "imdbID": "tt15765670"}, {"Poster": "https://m.media-amazon.com/images/M/MV5BYmM3MGEyMzItYzg4NS00YjlmLWFhNDQtNTU1ZGEwMGE5NGU3XkEyXkFqcGdeQXVyMTk3NDAwMzI@._V1_SX300.jpg", "Title": "Eddie Izzard: Dress to Kill", "Type": "movie", "Year": "1999", "imdbID": "tt0184424"}, {"Poster": "https://m.media-amazon.com/images/M/MV5BMGI1NmY3NjYtZjJkMC00NTZmLTgwNjktMDExYmViODc5NTU5XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg", "Title": "The Dress", "Type": "movie", "Year": "1996", "imdbID": "tt0116729"}, {"Poster": "https://m.media-amazon.com/images/M/MV5BMzY1MTgyYTAtYTgyMS00NTAxLTk3MjEtYzUxMjRlNGE2OWJiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg", "Title": "Say Yes to the Dress", "Type": "series", "Year": "2007–", "imdbID": "tt1166709"}, {"Poster": "https://m.media-amazon.com/images/M/MV5BMTYxOTAxNjY1Ml5BMl5BanBnXkFtZTcwNTA0MjM5NA@@._V1_SX300.jpg", "Title": "Little Black Dress", "Type": "movie", "Year": "2009", "imdbID": "tt1270771"}, {"Poster": "https://m.media-amazon.com/images/M/MV5BOTRiYWFlNzktZTNiZS00Y2FkLThmNjMtYTk4ZWVjMWYzYTQ4XkEyXkFqcGdeQXVyMTEwMTY3NDI@._V1_SX300.jpg", "Title": "The Dress", "Type": "movie", "Year": "2020", "imdbID": "tt12299764"}, {"Poster": "https://m.media-amazon.com/images/M/MV5BNDE2MjU4MTM5M15BMl5BanBnXkFtZTgwODk4MTUwNDE@._V1_SX300.jpg", "Title": "The Boy in the Dress", "Type": "movie", "Year": "2014", "imdbID": "tt4307924"}, {"Poster": "https://m.media-amazon.com/images/M/MV5BNmM3NTY1ZTktMjVkZi00ODRiLTg5MGItNjRjNDM4MzNmZmE5XkEyXkFqcGdeQXVyNjg5MzE4NTA@._V1_SX300.jpg", "Title": "Garage Sale Mystery: The Wedding Dress", "Type": "movie", "Year": "2015", "imdbID": "tt4658324"}, {"Poster": "https://m.media-amazon.com/images/M/MV5BNjdhZDUwYzEtMzE3My00NzNjLThiOTUtMjY4NTcyZDM4MjcxXkEyXkFqcGdeQXVyNTI4MDA2NDE@._V1_SX300.jpg", "Title": "Wedding Dress", "Type": "movie", "Year": "2010", "imdbID": "tt1754866"}],
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
     
        await this.fetchMovie()
      

    
      } 
      fetchMovie = async() => {
        const URL="https://www.omdbapi.com/?s="+this.state.title+"&apikey=db87c2b4";
        const resp = await fetch(URL);
        const data = await resp.json();
        console.log(data.Response)
        console.log(data.Search)
        if (data.Response == "True")
        {
          this.setState({movies: data.Search})
          this.setState({showSearchResults: true})
          
          
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

