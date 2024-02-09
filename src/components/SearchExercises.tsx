import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import ExerciseServices, { ExerciseOptions } from '../services/exerciseServices';
import HorizontalScrollbar from './HorizontalScrollbar';

type Props = {
  setExercises: (value: string[])=> void;
  bodyPart: string,
  setBodyPart: (value: string)=> void;
}

function SearchExercises({setExercises,setBodyPart,bodyPart}: Props) {
const [ search, updateSearch] = useState<string>('');
const [bodyParts, setBodyParts] = useState<any[]>([]);
let bodyPartList: any [] = [];

useEffect(()=>{

  const fetchExercisesData = async () => {
    const result: string[]  = JSON.parse(localStorage.getItem('bodyParts') || '[]');
    if(result.length === 0){
    bodyPartList = await ExerciseServices(`https://exercisedb.p.rapidapi.com/exercises/bodyPartList`,ExerciseOptions);    
    localStorage.setItem('bodyParts',JSON.stringify(bodyPartList));
    setBodyParts([...bodyPartList]);
    }else{
      setBodyParts([...result]);
    }
  }
    
  fetchExercisesData();
},[bodyPart]);

const  handleSearch = async () => {
  if(search){
    setBodyPart(search);
    // can remove the entire code cause we are setting the logic on boay part change.
    // console.log(search);
    // ExerciseServices(`https://exercisedb.p.rapidapi.com/exercises?limit=${ExerciseOptions.params.limit}`,ExerciseOptions).then((response:any[]) => {
    //   let filteredarray = response.filter((exercise) =>
    //   exercise.equipment.includes(search) || 
    //   exercise.name.includes(search) || 
    //   exercise.bodyPart.includes(search) ||
    //   exercise.target.includes(search));
    //   console.log(filteredarray);
    //   setExercises(filteredarray);
    // })
  } else {
    console.log('Please enter a seach parameter')
  }
}

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{fontSize:{ lg: '44px'}}}>
        Awesome Exercises you should know </Typography>
        <Box position="relative" mb="72px">
        <TextField sx={{input : {
          fontWeight: '700',
          border:'none',
          borderRadius:'40px',
          width : {
            lg: '800px'
          }
        },
        width: {lg:'800px',xs : '350px'},
        }} value={search} placeholder='Search Exercises' onChange={(e)=> updateSearch(e.target.value)}/>

      <Button className='search-btn'
        sx={{
        backgroundColor:"#ff2625",
        color:'#fff', 
        textTransform:'none',
        width: { lg: '175px', xs: '80px'},
        fontSize: { lg: '20px',xs: '14px'},
        height:'56px',
        position:'absolute',
        right:0
        }} onClick={handleSearch}>Search</Button>
        </Box>
        <Box sx={{ position:'relative', width: '100%' , p: '20px'}}>
          <HorizontalScrollbar data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} isBodyPart></HorizontalScrollbar>
        </Box>
    </Stack>
  )
}

export default SearchExercises