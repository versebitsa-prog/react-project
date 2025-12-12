import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Header({name,year}) {
    return (<header>
    <h1>{name}'s Kitchen</h1>
    <p>Copyright {year}</p>
  </header>)
}

function Footer() {
  return (<footer>
    <p>All rights reserved.Bitsaverse</p>
  </footer>)
}
function App() {
  return (
    <div>
      <Header name="Eve" year={new Date().getFullYear() } />
      <h2>We have the best food around here ;) </h2>
      <Footer />
    </div>
  )
}

export default App
