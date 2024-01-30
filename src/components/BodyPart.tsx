import { Stack } from '@mui/material'
import Icon from '../assets/icons/gym.png'


type Props = {
    bodyPart: string
}

const BodyPart = ({bodyPart}: Props) => {
  return (
    <Stack alignItems='center' justifyContent='center' className='bodyPart-card'>
        <img src={Icon} alt={bodyPart} style={{width: '200px' ,height:'200px'}}/>
    </Stack>
  )
}

export default BodyPart