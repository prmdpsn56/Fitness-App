import React from 'react'

type Props = {
  setExercises: (value: string[])=> void;
  exercises: string[],
  setBodyPart: (value: string)=> void;
}

function Exercises({}: Props) {
  return (
    <div>Exercises</div>
  )
}

export default Exercises