import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home'
import movies from './Movies'



const Stack = createNativeStackNavigator();

export default class App extends React.Component{

  state ={
    movies: movies,
  }

  render(){
    return (
      <View>
         <NavigationContainer>
         <Stack.Navigator initialRouteName="Home" screenOptions={styles.Ncontainer}>
         <Stack.Screen 
         name="Home"
         component={HomeScreen} />
  
   
         </Stack.Navigator>
       
         </NavigationContainer>

      </View>
      
    );



  }
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Ncontainer: {
      title: 'Movie Browser',
      headerStyle: {
        backgroundColor: '#303030',
      },
      alignItems: 'left',
      flex: 1,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  },
});
