import { Box } from '@mui/material'
import {ScrollMenu} from 'react-horizontal-scrolling-menu'
import BodyPart from './BodyPart'



function HorizontalScrollbar({ data }:any) {
  return (<ScrollMenu>
    {data.map((item:any) => (<BodyPart bodyPart={item}/>))}
  </ScrollMenu>

  )
}

export default HorizontalScrollbar