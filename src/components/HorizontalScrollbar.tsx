import { Box } from '@mui/material';
import BodyPart from './BodyPart'

type Props = {
  setBodyPart: (value: string)=> void;
  bodyPart: string[],
  data: string[],
}


function HorizontalScrollbar({ data,bodyPart,setBodyPart }:any) {
  return (<>
    {data.map((item:any) => (
    <Box key={item.id} m="0 40px">
      <BodyPart bodyPart={item} selectedBodyPart={bodyPart} selectBodyPart={setBodyPart}/>
    </Box>
    ))}
    </>
  )
}

export default HorizontalScrollbar