import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar'
import { Box, Stack, Typography } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Loader from './Loader';


type Props = {
  similarMuscle:any[],
  similarEquipment:any[]
}

function SimilarExercises({similarMuscle,similarEquipment}: Props) {
  console.log('similarexercise');
  // console.log(similarMuscle);
  // console.log(similarEquipment);
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px',mt:'100px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>

    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {similarEquipment.length !== 0 ? <ScrollMenu><HorizontalScrollbar data={similarEquipment}/></ScrollMenu>: <Loader/>}
    </Stack>

    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>

    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
       <HorizontalScrollbar data={similarMuscle}/>
    </Stack>
  </Box> 
  )
}

export default SimilarExercises