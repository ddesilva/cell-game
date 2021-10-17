import React, { useState, useEffect } from 'react'
import Cell from './Cell'
import { iGameCell } from '../commonInterfaces'
import { generateSimulation, updateCells } from '../utilities'
import './GameWorld.css'

type iGameWorld = {
  gridSize: number
}

const GameWorld: React.FC<iGameWorld> = (props) => {
  const [gameCells, setGameCells] = useState([])

  useEffect(() => {
    const cells = generateSimulation(props.gridSize)
    // @ts-ignore
    setGameCells(cells)
  }, [])

  const onCellClick = (cell: iGameCell) => {
    const updatedCells = updateCells(gameCells, cell)
    setGameCells(updatedCells)
  }

  console.log(gameCells)

  return (
    <div className="game-world">
      {gameCells &&
        gameCells.map((gameCell: iGameCell, key: number) => {
          return <Cell key={key} gameCell={gameCell} onCellClick={onCellClick} />
        })}
    </div>
  )
}

export default GameWorld
