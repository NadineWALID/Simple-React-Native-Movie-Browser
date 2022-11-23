import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

styles = StyleSheet.create({
  row:{
    padding: 20,
  }
})

const Row = props =>(
    <View style={styles.row}>
    <Text>{props.title}</Text>
    <Text>{props.rated}</Text>
    <Text>{props.released}</Text>
    <Text>{props.poster}</Text>
    </View>
  )
  
  
export default Row