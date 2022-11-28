import * as React from 'react';
import Constants from 'expo-constants';
import {movie} from './mockData';

const createMovie = () => ({
    title: movie.Title,
    rated: movie.Rated,
    year: movie.Year,
    poster: movie.Poster,
    released: movie.Released,
    runtime:movie.Runtime,
    genre:movie.Genre,
    director: movie.Director,
    writer: movie.Writer,
    actors: movie.Actors,
    plot: movie.Plot,
    language: movie.Language,
    country: movie.Country,
    awards: movie.Awards,
    imdbRating: movie.imdbRating,
    
  })


  const addKeys = (val, key) => ({key,...val})

  export default Array.from({length: 1},createMovie).map(addKeys)
