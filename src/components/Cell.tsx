import React from 'react'
import './Cell.css'
import { iGameCell } from '../interfaces/commonInterfaces'

type iCell = {
  gameCell: iGameCell
  cellSize: number
  margin: number
  onCellClick: (gameCell: iGameCell) => void
}

const Cell: React.FC<iCell> = (props) => {
  const { gameCell, cellSize, margin } = props
  return (
    <div
      className={`cell ${gameCell.isActive ? 'cell-active' : ''}`}
      style={{ width: cellSize, height: cellSize, margin: margin }}
      onClick={(e) => props.onCellClick(props.gameCell)}
    />
  )
}

export default Cell
