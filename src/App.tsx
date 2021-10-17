import React from 'react'
import './App.css'
import GameWorld from './components/GameWorld'

function App() {
  return (
    <div className="App">
      <h1>Cell Game</h1>
      <GameWorld gridSize={6} margin={1} cellSize={50} />
    </div>
  )
}

export default App
