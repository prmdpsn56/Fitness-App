import { Box, Stack, Typography } from '@mui/material'
import React from 'react'



type Props = {
  exerciseVideos?: any[],
  exerciseName?:string
}

function ExerciseVideos({exerciseVideos,exerciseName}: Props) {
  console.log(exerciseName);
  return (
    <Box sx={{marginTop:{ lg : '200px', xs: '20px'}}} p={'20px'}>
        <Typography variant='h3' mb={'33px'}>
          Watch <span style={{color:"#ff2625", textTransform:'capitalize'}}>{exerciseName}</span> exercise videos         
        </Typography>
        <Stack justifyContent={'flex-start'} flexWrap={'wrap'} alignContent={'center'} sx={{
          flexDirection:{ lg: 'row'},
          gap: {lg: '110px',xs:'0'}
        }}>
          {exerciseVideos?.slice(0,4).map((item,index)=>(
           <a key={index}
           className='exercise-video'
           href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
           target='_blank'
           rel="noreferrer"
           >
              <img src={item.video.thumbnails[0].url}></img>
              <div>
                <Typography variant='h5' color={'#000'}>
                {item.video.title}
                </Typography>
                <Typography variant='h6' color={'#000'}>
                {item.video.channelName}
                </Typography>
              </div>
           </a> 
          ))}
        </Stack>
    </Box>
  )
}

export default ExerciseVideos