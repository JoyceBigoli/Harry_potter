import React from 'react'
import {Routes, Route } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { Home } from '../components/pages/Home'
import { NotFound } from '../components/pages/NotFound'
import { ResultSearch } from '../components/pages/ResultSearch'

export function Approutes() {
  return (
         <Routes>
      <Route path='/' element= {<Layout/>}>
         <Route path='/' element={<Home/>}/>
         <Route path='*' element={<NotFound/>} />
         <Route path='/pequisa' element={<ResultSearch/>} /> 
      </Route>  
    </Routes>   
  )
};