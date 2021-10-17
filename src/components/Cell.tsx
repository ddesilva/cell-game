import React from 'react'
import './Cell.css'
import { iGameCell } from '../commonInterfaces'

type iCell = {
  gameCell: iGameCell
  onCellClick: (gameCell: iGameCell) => void
}

const Cell: React.FC<iCell> = (props) => {
  const { gameCell } = props
  return (
    <div
      className={`cell ${gameCell.isActive ? 'cell-active' : ''}`}
      onClick={(e) => props.onCellClick(props.gameCell)}
    />
  )
}

export default Cell
