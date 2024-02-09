import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExerciseCard from './ExerciseCard';

type Props = {
  setBodyPart?: (value: string)=> void;
  bodyPart?: string[],
  data?: string[],
}

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};


function HorizontalScrollbar({ data,bodyPart,setBodyPart, isBodyPart }:any) {
  // console.log(data);
  return (
    <Box mt={4} sx={{position:'static'}}>
     <ScrollMenu>
    {data.map((item:any) => (
    <Box key={item} m="0 60px" >
      {isBodyPart ? <BodyPart bodyPart={item} selectedBodyPart={bodyPart} selectBodyPart={setBodyPart}/> : <ExerciseCard exercise={item}/>}
    </Box>
    ))}
    </ScrollMenu>
  </Box>
  )
}

export default HorizontalScrollbar