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

 
  export const fetchMovie = async (movieTitle) => {
    const URL="https://www.omdbapi.com/?t="+movieTitle+"&apikey=db87c2b4";
    const resp = await fetch(URL);
    const movieDetails = await resp.json();
    return movieDetails
  }

  export const fetchSearchResult = async (search) => {
    const URL="https://www.omdbapi.com/?s="+search+"&apikey=db87c2b4";
    const resp = await fetch(URL);
    const searchResult = await resp.json();
    return searchResult
  }


 // const addKeys = (val, key) => ({key,...val})

  //export Array.from({length: 1},createMovie).map(addKeys)
