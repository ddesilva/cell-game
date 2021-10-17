import { iGameCell } from './commonInterfaces'

export const generateSimulation = (gridSize: number) => {
  let cells = []
  let position = 0
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      cells.push({ position, isActive: false, row: j, col: i })
      position++
    }
  }

  return cells
}

export const updateCells = (gameCells: any, selectedCell: iGameCell) => {
  return gameCells.map((gameCell: iGameCell) => {
    if (gameCell.position === selectedCell.position) {
      gameCell.isActive = !gameCell.isActive
    }
    return gameCell
  })
}
