import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import HeroBanner from '../components/Herobanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';


type Props = {}

const Home = (props: Props) => {
   const [bodyPart, setBodyPart]= useState('all')
   const [exercises, setExercises]= useState<string[]>([])


   const updateBodyPart = (part: string) =>{
    setBodyPart(part);
   }

   const updateExercises = (exercise: string[]) =>{
    setExercises(exercise);
   }


  return (
    <Box>
        <HeroBanner></HeroBanner>
        <SearchExercises bodyPart={bodyPart} setExercises={updateExercises} setBodyPart={updateBodyPart}></SearchExercises>
        <Exercises exercises={exercises} setExercises={updateExercises} bodyPart={bodyPart}></Exercises>
    </Box>
  )
}

export default Home;