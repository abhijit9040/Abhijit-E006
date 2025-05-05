import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Login from './login'
import RecipeManage from './recipeManage'

function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Navigate to="/signup" />} />
     <Route path="/signup" element={<Signup />} />
     <Route path="/login" element={<Login />} />
     <Route path="/recipeManage" element={<RecipeManage/>}/>
   </Routes>
   </BrowserRouter>
  )
}
export default App;
