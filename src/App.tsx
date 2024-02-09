import React from 'react'
import { Navigate, Route, Routes,} from 'react-router-dom';
import { Box } from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';


const App = () => {
  return (
    <Box width="400px" sx={{width: {x1:'1488px'}}} m="auto">
    <Navbar/>
    <Routes>  
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/exercise/:id' element={<ExerciseDetail/>} />
      <Route
      path="/"
      element={<Navigate to="/home" replace={true} />}
    />
      {/* <Route
      path="*"
      element={<Navigate to="/home" replace={true} />}
    /> */}
    </Routes>
    {/* <Footer></Footer> */}
    </Box>
  )
}

export default App