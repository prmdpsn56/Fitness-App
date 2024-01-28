import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'

type Props = {}

function SearchExercises({}: Props) {

const [ search, updateSearch] = useState('');

const handleSearch = () => {
  console.log(search)
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
    </Stack>
  )
}

export default SearchExercises