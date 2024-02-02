import React, { useEffect } from 'react'
import ExerciseServices, { ExerciseOptions} from '../services/exerciseServices'
import { Box, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';


type Props = {
  setExercises: (value: string[])=> void;
  exercises: string[],
  bodyPart: string
}


function Exercises({exercises,setExercises,bodyPart}: Props) {
  console.log(exercises,bodyPart);

  const fetchExercises  = async () => {
    if( bodyPart !== 'all'){
      const response = await ExerciseServices(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,ExerciseOptions);
      setExercises(response);
    }
  }

  useEffect(() => {
    fetchExercises();
  },[bodyPart])
  return (
    <Box id="exercises" sx={{mt:{lg: '110px'}}}
      mt={'50px'}
      p={'20px'}
      >
        <Typography variant='h3' mb={'50px'} >Showing Results</Typography>
        <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"center"}
          sx={{gap:{lg:"110px",xs:'50px'}}}
          >
          {exercises.map((exercise:any,index:number)=>(
            <ExerciseCard key={index} exercise={exercise} />
          ))}
        </Stack>
    </Box>
  )
}

export default Exercises