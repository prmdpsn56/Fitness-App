import React from 'react'


type Props = {
    url: string,
    options:any
}

const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
    params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_KEY_RAPID_API,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

async function exerciseServices({url, options}: Props) {
 const response = await fetch(url,options)
 const data = await response.json()
 return data;
}

export default exerciseServices