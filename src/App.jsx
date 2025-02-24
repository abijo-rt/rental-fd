// import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes'
function App() {

  return (
    <>
      <div className='h-screen w-screen'>
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
