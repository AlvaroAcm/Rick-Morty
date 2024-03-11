import react from 'react'
import './App.css'
import { Outlet, Route, Router, Routes } from 'react-router-dom'
import {Nav} from "./components"


function App() {

  return (
    <>
    <Nav/>
    <Outlet/>
    </>
  )
}

export default App
