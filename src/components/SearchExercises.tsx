import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import ExerciseServices, { ExerciseOptions } from '../services/exerciseServices';
import HorizontalScrollbar from './HorizontalScrollbar';

type Props = {}

function SearchExercises({}: Props) {
const [ search, updateSearch] = useState<string>('');
const [bodyParts, setBodyParts] = useState<any[]>([]);


useEffect(()=>{
  const fetchExercisesData = async () => {
    const bodyPartList: any [] = await ExerciseServices(`https://exercisedb.p.rapidapi.com/exercises/bodyPartList`,ExerciseOptions);    
    console.log(bodyPartList);
    setBodyParts([...bodyPartList]);
  }


  fetchExercisesData();
},[])

const  handleSearch = async () => {
  if(search){
    ExerciseServices(`https://exercisedb.p.rapidapi.com/exercises?limit=${ExerciseOptions.params.limit}`,ExerciseOptions).then((response:any[]) => {
      let filteredarray = response.filter((exercise) =>
      exercise.equipment.includes(search) || 
      exercise.name.includes(search) || 
      exercise.bodyPart.includes(search) ||
      exercise.target.includes(search));
      console.log(filteredarray);
    })
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
          <HorizontalScrollbar data={bodyParts}></HorizontalScrollbar>
        </Box>
    </Stack>
  )
}

export default SearchExercises