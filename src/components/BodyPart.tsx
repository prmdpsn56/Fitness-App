import { Stack } from '@mui/material'
import Icon from '../assets/icons/gym.png'


type Props = {
    bodyPart: string,
    selectedBodyPart: string,
    selectBodyPart: (value:string) => void;
}

const BodyPart = ({bodyPart,selectedBodyPart,selectBodyPart}: Props) => {

  const updateSelectedBodyPart = () => {
    selectBodyPart(bodyPart)
  }
  return (
    <Stack alignItems='center' justifyContent='center' className='bodyPart-card'>
      <img src={Icon} alt={bodyPart} style={{width: '200px' ,height:'200px'}} onClick={updateSelectedBodyPart}/>
    </Stack>
  )
}

export default BodyPart