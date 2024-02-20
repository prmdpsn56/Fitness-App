import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ExerciseServices, { ExerciseOptions, videoOptions } from '../services/exerciseServices'
import { Box } from '@mui/material'
import Detail from './Detail'
import ExerciseVideos from './ExerciseVideos'
import SimilarExercises from './SimilarExercises'
import Loader from './Loader'


type Props = {}

interface Exercise {
        bodyPart?: string,
        equipment?:string,
        gifUrl?:string,
        id?:string,
        instructions?: string[],
        name?: string,
        secondaryMuscles?: string[],
        target?: string
      }

type Videos = {
    contents?: any[],
    estimatedResults?: string,
    next?: string
}


type RouteParams ={
    id: string; 
  }

const ExersiseDetails = (props: Props) => {
   const [exerciseInformation,setExerciseInformation] = useState<Exercise>({})
   const [exerciseVideos, setExerciseVideos] = useState<Videos>({})
   const [targetMuscleExercises, setTargetMuscleExercises] = useState<any[]>([]);
   const [equipmentExercises, setEquipmentExercises] = useState<any[]>([]);
   
   const [state,setState] = useState(false);
   const [anotherState,setAnotherState] = useState("");
   const {id} = useParams<RouteParams>();
    console.log(id);

   useEffect(()=>{
        const fetchExercisesdate = async () => {
            const exerciseDbUrl = `https://exercisedb.p.rapidapi.com`
            const youtubeSearchUrl = `https://youtube-search-and-download.p.rapidapi.com`;
            

            // setTimeout(()=>{
            //     console.log('setState Running');
            //     setState(true);
            //     setAnotherState("true")
            // },4000)
            //Store logic to be updated

            let exercisesFromStorage = JSON.parse(localStorage.getItem(id) || '{}');
            console.log(exercisesFromStorage);
            let videosFromStorage = JSON.parse(localStorage.getItem(`${id}_video`) || '{}');
            let similarFromStorage = JSON.parse(localStorage.getItem(`${id}_muscle`) || '{}');
            let equipmentFromStorage = JSON.parse(localStorage.getItem(`${id}_equipment`) || '{}');
            

            if(exercisesFromStorage.bodyPart && videosFromStorage.contents && similarFromStorage && equipmentFromStorage){
                setExerciseInformation(exercisesFromStorage);
                setExerciseVideos(videosFromStorage);
                setTargetMuscleExercises(similarFromStorage);
                setEquipmentExercises(equipmentFromStorage);
            }else{
                console.log(!!exerciseInformation.bodyPart);
                const exerciseDetailData  = await ExerciseServices(`${exerciseDbUrl}/exercises/exercise/${id}`,ExerciseOptions);
                const exerciseVideosData = await ExerciseServices(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,videoOptions);
                const targetMuscleExerciseData = await ExerciseServices(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,ExerciseOptions);
                const equipmentExerciseData = await ExerciseServices(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,ExerciseOptions);

                console.log(exerciseDetailData);
                console.log(exerciseVideosData);
                console.log(targetMuscleExerciseData);
                console.log(equipmentExerciseData);
                localStorage.setItem(`${id}`,JSON.stringify(exerciseDetailData));
                localStorage.setItem(`${id}_video`,JSON.stringify(exerciseVideosData));
                localStorage.setItem(`${id}_muscle`,JSON.stringify(targetMuscleExerciseData));
                localStorage.setItem(`${id}_equipment`,JSON.stringify(equipmentExerciseData));

                setExerciseVideos(exerciseVideosData)
                setExerciseInformation(exerciseDetailData);


                console.log(!!exerciseInformation);
                setTargetMuscleExercises(targetMuscleExerciseData);
                setEquipmentExercises(equipmentExerciseData);
                // REMOVE CONSOLE
                // console.log(exerciseDetailData)
            }
            
        }
        fetchExercisesdate();
   },[])
   
  return (
    <div>
        {/* {state && <p>Hello</p>} */}
        <p>{anotherState}</p>
        {!!exerciseInformation.bodyPart ? <Detail exerciseDetails={exerciseInformation} ></Detail>: <Loader/>}
        {exerciseInformation.bodyPart ? <ExerciseVideos exerciseVideos={exerciseVideos.contents} exerciseName={exerciseInformation.name}/>: <Loader/>}
        {exerciseInformation.bodyPart && <SimilarExercises similarMuscle={targetMuscleExercises} similarEquipment={equipmentExercises} />}
    </div>

  )
}

export default ExersiseDetails