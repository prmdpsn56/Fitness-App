import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons//target.png'
import EquipmentImage from '../assets/icons/equipment.png'

type Exercise = {
  bodyPart?: string,
  equipment?:string,
  gifUrl?:string,
  id?:string,
  instructions?: string[],
  name?: string,
  secondaryMuscles?: string[],
  target?: string
}


type Props = {
  exerciseDetails : Exercise;
}

function Detail({exerciseDetails}: Props) {
  console.log(exerciseDetails);

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: exerciseDetails.bodyPart,
    },
    {
      icon: TargetImage,
      name: exerciseDetails.target,
    },
    {
      icon: EquipmentImage,
      name: exerciseDetails.equipment,
    },
  ];
  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
    <img src={exerciseDetails.gifUrl} alt={exerciseDetails.name} className="detail-image" />
    <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
          {exerciseDetails.name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{exerciseDetails.name}</span> bup is one
          of the best <br /> exercises to target your {exerciseDetails.target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        </Typography>
        {extraDetail?.map((item,index) => (
          <Stack key={`${item.name}+${index}`} direction="row" gap="24px" alignItems="center">
            <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt={exerciseDetails.bodyPart} style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
        </Stack>
    </Stack>
  )
}

export default Detail