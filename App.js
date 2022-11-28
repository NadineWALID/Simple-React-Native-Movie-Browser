import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home'
import movies from './Movies'
import Movies from './Movies';



const Stack = createNativeStackNavigator();



export default class App extends React.Component{

  state ={
    movies: movies,
  }

  render(){
    return (
      
      
        <NavigationContainer>
        <Stack.Navigator screenOptions={styles.Ncontainer}>
        <Stack.Screen name='Home' component={HomeScreen} initialParams={{'movies':this.state.movies}}></Stack.Screen>
        </Stack.Navigator>
        
        </NavigationContainer>

    
      
    );



  }
  
  
}

const styles = StyleSheet.create({
  
  Ncontainer: {
      title: 'Movie Browser',
      headerStyle: {
        backgroundColor: '#303030',
      },
      alignItems: 'left',
      flex: 1,
      headerTintColor: '#fff',
      textAlign:'left',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  },
});