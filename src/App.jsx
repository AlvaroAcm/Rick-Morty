import react, { useEffect, useState } from 'react'
import './App.css'
import { Outlet, Route, Router, Routes } from 'react-router-dom'
import {Home, Nav} from "./components"


function App() {
  useEffect(()=>{
  const canvas = document.getElementById("particlesCanvas")


  const ctx = canvas.getContext("2d")

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  
  const createParticle = () =>{
    return{

      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      dx: Math.random() * 4 - 2,
      dy: Math.random() *4 -2,
    }
  }

  let particles = []

  for (let i = 0; i < 100; i++) {
    particles.push(createParticle());
  }

  const animate = () =>{
    requestAnimationFrame(animate)
    ctx.clearRect(0,0, canvas.width, canvas.height)

    particles.forEach((particle)=> {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
      ctx.fillStyle = "#fff",
      ctx.fill();

      particle.x += particle.dx
      particle.y += particle.dy

      if(particle.x < 0 || particle.x > canvas.width){
        particle.dx = -particle.dx
      }
      if(particle.y < 0 || particle.y > canvas.width){
        particle.dy = -particle.dy
      }
    })
  }
animate()

const handleResize = () =>{
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}
handleResize()

window.addEventListener("resize" , handleResize)

return () =>{
  window.removeEventListener("resize", handleResize)
}

  },[]);

  const [isOutletEmpty , setIsOutletEmpty] = useState(true)
return (
    <div className='app__container'>
    <canvas id='particlesCanvas'></canvas>
    <Nav/>
    <Outlet/>
    <script src="./canvas.js"></script>
    </div>
  )
}

export default App
