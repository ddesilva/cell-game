import React, { useState, useEffect } from 'react'
import Cell from './Cell'
import { iGameCell } from '../commonInterfaces'
import {
  changeCellHealth,
  convertSimulationToArray,
  generateSimulation,
  resetSimulation,
  updateSimulation,
} from '../simulation'
import './GameWorld.css'

type iGameWorld = {
  gridSize: number
  cellSize: number
  margin: number
}

const GameWorld: React.FC<iGameWorld> = (props) => {
  const [simulation, setSimulation] = useState<Array<Object>>([])
  const { gridSize, margin, cellSize } = props

  useEffect(() => {
    const simulation = generateSimulation(gridSize)

    setSimulation(simulation)
  }, [gridSize])

  const onCellClick = (cell: iGameCell) => {
    const updatedSimulation = changeCellHealth(simulation, cell)
    setSimulation(updatedSimulation)
  }

  const nextGenerationClick = () => {
    const updatedSimulation = updateSimulation(simulation, gridSize)
    setSimulation(updatedSimulation)
  }
  const resetClick = () => {
    const updatedSimulation = resetSimulation(simulation, gridSize)
    setSimulation(updatedSimulation)
  }

  const gameCells = simulation.length > 0 && convertSimulationToArray(simulation, gridSize)

  return (
    <>
      <button onClick={nextGenerationClick}>Next Generation</button>
      <button onClick={resetClick}>Reset</button>
      <div className="game-world" style={{ width: gridSize * cellSize + gridSize * margin * 2 }}>
        {gameCells &&
          gameCells.map((gameCell: iGameCell, key: number) => {
            return <Cell key={key} gameCell={gameCell} onCellClick={onCellClick} cellSize={cellSize} margin={margin} />
          })}
      </div>
    </>
  )
}

export default GameWorld
