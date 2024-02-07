import React, { useEffect, useState } from 'react'
import ExerciseServices, { ExerciseOptions} from '../services/exerciseServices'
import { Box, Pagination, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';


type Props = {
  setExercises: (value: string[])=> void;
  exercises: string[],
  bodyPart: string
}


function Exercises({exercises,setExercises,bodyPart}: Props) {

  //Variables
  //state change happend twice in this component thus the component is also executed twice.
  // console.log(exercises,bodyPart);
  const [pageNumber, setPageNumber] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastItem = pageNumber * exercisesPerPage;
  const indexOfFirstItem = indexOfLastItem - exercisesPerPage;
  const contentOfCurrentPage = exercises.slice(indexOfFirstItem,indexOfLastItem);

  const fetchExercises  = async () => {
    let fromStorage = JSON.parse(localStorage.getItem(bodyPart) || '[]');
    if(fromStorage.length === 0){
      if( bodyPart !== 'all'){
        const fromApiResponse = await ExerciseServices(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=${ExerciseOptions.params.limit}`,ExerciseOptions);
        localStorage.setItem(bodyPart,JSON.stringify(fromApiResponse));
        setExercises(fromApiResponse);
      }
      else {
        const fromApiResponse = await ExerciseServices(`https://exercisedb.p.rapidapi.com/exercises?limit=${ExerciseOptions.params.limit}`,ExerciseOptions);
          localStorage.setItem(bodyPart,JSON.stringify(fromApiResponse));
          setExercises(fromApiResponse);
      }
    }else{
      setExercises(fromStorage);
    }
  }

  const paginate = (e:any, value:any) => {
    setPageNumber(value);
    console.log(value);
    window.scroll({top:1100, behavior:'smooth' })
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
          {contentOfCurrentPage.map((exercise:any,index:number)=>(
            <ExerciseCard key={index} exercise={exercise} />
          ))}
        </Stack>
        <Stack mt="100px" alignItems={"center"}>
            {exercises.length >= 9 && (<Pagination shape='rounded' 
            defaultPage={1} 
            count={Math.ceil(exercises.length/exercisesPerPage)}
            page={pageNumber}
            onChange={paginate}
            size='large'
            />)}
        </Stack>
    </Box>
  )
}

export default Exercises