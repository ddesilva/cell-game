import React, { useState, useEffect } from 'react'
import Cell from './Cell'
import { iGameCell } from '../commonInterfaces'
import { generateCells } from '../utilities'
import './GameWorld.css'

type iGameWorld = {
  gridSize: number
}

const GameWorld: React.FC<iGameWorld> = (props) => {
  const [gameCells, setGameCells] = useState([])

  useEffect(() => {
    const cells = generateCells(props.gridSize)
    setGameCells([])
  }, [])

  const onCellClick = (cell: iGameCell) => {}

  return (
    <div className="gameWorld">
      {gameCells &&
        gameCells.map((gameCell: iGameCell, key: number) => {
          return <Cell gameCell={gameCell} onCellClick={onCellClick} />
        })}
    </div>
  )
}

export default GameWorld
