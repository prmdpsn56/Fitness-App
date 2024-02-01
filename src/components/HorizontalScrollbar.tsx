import React from 'react';
import { Box } from '@mui/material';
import BodyPart from './BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
// import 'react-horizontal-scrolling-menu/dist/styles.css';

type Props = {
  setBodyPart: (value: string)=> void;
  bodyPart: string[],
  data: string[],
}


function HorizontalScrollbar({ data,bodyPart,setBodyPart }:any) {
  return (
    <Box mt={4} sx={{position:'static'}}>
    <ScrollMenu>
    {data.map((item:any) => (
    <Box key={item} m="0 40px">
      <BodyPart bodyPart={item} selectedBodyPart={bodyPart} selectBodyPart={setBodyPart}/>
    </Box>
    ))}
    </ScrollMenu>
  </Box>
  )
}

export default HorizontalScrollbar