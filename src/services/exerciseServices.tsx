import React from 'react'



export const ExerciseOptions = {
    method: 'GET',
    params: {limit: '100'},
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_KEY_RAPID_API,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const videoOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
  params: {
    id: 'UCE_M8A5yxnLfW0KghEeajjw'
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_KEY_RAPID_API_YOUTUBE,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
}

async function ExerciseServices(url:string, options: any) {
 const response = await fetch(url,options)
 const data = await response.json()
 return data;
}

export default ExerciseServices