import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


type Props = {
    exercise:any
}

const ExerciseCard = ({exercise}: Props) => {
  return (
    <Link to={`/exercise/${exercise.id}`} style={{textDecoration:"none"}}>
        <img src={exercise.gifUrl} alt="" loading='lazy'/>
        <Stack direction={'row'}>
            <Button sx={{ml: '20px', color:'#fff', background:"#ffa9a9", backgroundColor:"#ffa9a9", fontSize:"14px", borderRadius:"20px", textTransform:"capitalize", textDecoration:"none"}}>
                {exercise.name}
            </Button>
            <Button sx={{ml: '20px', color:'#fff', background:"cyan", backgroundColor:"#fcc757", fontSize:"14px", borderRadius:"20px", textTransform:"capitalize", textDecoration:"none"}}>
                {exercise.target}
            </Button>
        </Stack>
    </Link>
  )
}

export default ExerciseCard