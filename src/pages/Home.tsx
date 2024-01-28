import { Box, Button } from '@mui/material';
import React from 'react'
import HeroBanner from '../components/Herobanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';


type Props = {}

const Home = (props: Props) => {
  return (
    <Box>
        <HeroBanner></HeroBanner>
        <SearchExercises></SearchExercises>
        <Exercises></Exercises>
    </Box>
  )
}

export default Home;