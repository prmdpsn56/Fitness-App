import { Stack, Typography } from '@mui/material'
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
    <Stack alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === selectedBodyPart ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
    updateSelectedBodyPart();
    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}>
      <img src={Icon} alt={bodyPart} style={{width: '50px' ,height:'50px', opacity: '0.2'}} onClick={updateSelectedBodyPart}/>
      <Typography fontFamily={'monospace'} mt={'20px'}>{bodyPart}</Typography>
    </Stack>
  )
}

export default BodyPart