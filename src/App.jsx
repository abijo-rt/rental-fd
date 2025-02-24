// import { useState } from 'react'
import Header from './CustomComponents/Header'
import './App.css'
import SearchResult from './CustomComponents/SearchResult'
import HomeBanner from './CustomComponents/HomeBanner'
import VerticalBar from './CustomComponents/VerticalBar'

function App() {

  return (
    <>
      <div className='h-screen w-screen'>
            <Header/>
            <HomeBanner/>
            <VerticalBar/>
            {/* <SearchFilter/>      */}
            <SearchResult/>
      </div>
    </>
  )
}

export default App
