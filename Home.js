import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,SectionList} from 'react-native';
import Row from './MovieRow'
import movies from './Movies'

const renderItem = obj => <Row {...(obj.item)} />

export default class HomeScreen extends React.Component{

   render(){
    return(
        <View>
            <Text>Hello this is home!</Text>
        </View>
    )
   }

}