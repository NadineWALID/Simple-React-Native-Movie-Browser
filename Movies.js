import * as React from 'react';
import Constants from 'expo-constants';
import {movie} from './mockData';

const createMovie = () => ({
    title: movie.Title,
    rated: movie.Rated,
    year: movie.Year,
    poster: movie.Poster,
    
  })


  const addKeys = (val, key) => ({key,...val})

  export default Array.from({length: 1},createMovie).map(addKeys)
