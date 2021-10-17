import { iGameCell } from '../interfaces/commonInterfaces'
// @ts-ignore
import cloneDeep from 'lodash.clonedeep'

export const generateSimulation = (gridSize: number) => {
  let simulation: {
    position: number
    isActive: boolean
    row: number
    col: number
  }[][] = []
  let position = 0
  for (let row = 0; row < gridSize; row++) {
    let colArray = []
    for (let col = 0; col < gridSize; col++) {
      colArray.push({ position, isActive: false, row, col })
      position++
    }
    simulation.push(colArray)
  }

  return simulation
}

export const convertSimulationToArray = (simulation: any, gridSize: number) => {
  let cells = []
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      cells.push(simulation[row][col])
    }
  }
  return cells
}

// this is not great
const safeCheck = (simulation: any, row: number, col: number) => {
  try {
    return simulation[row][col].isActive === true ? 1 : 0
  } catch {
    return 0
  }
}

export const checkNeighbours = (simulation: any, row: number, col: number, gridSize: number) => {
  // check all 8 positions around

  /*
  row-1:col-1, row-1:col,   row-1:col+1
  row:col-1,   row:col,     row:col+1
  row+1:col-1, row+1:col,   row+1:col+1
   */

  let count = 0

  count += safeCheck(simulation, row - 1, col - 1)
  count += safeCheck(simulation, row - 1, col)
  count += safeCheck(simulation, row - 1, col + 1)
  count += safeCheck(simulation, row, col - 1)
  count += safeCheck(simulation, row, col + 1)
  count += safeCheck(simulation, row + 1, col - 1)
  count += safeCheck(simulation, row + 1, col)
  count += safeCheck(simulation, row + 1, col + 1)

  return count
}

export const updateSimulation = (simulation: any, gridSize: number) => {
  const newSimulation = generateSimulation(gridSize) // need a fresh instance

  // loop though array of arrays and check neighbours
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const gameCell = simulation[row][col]

      // under population
      if (
        gameCell.isActive === true &&
        checkNeighbours(simulation, gameCell.row, gameCell.col, gridSize) < 2
      ) {
        newSimulation[row][col].isActive = false
      }
      // overcrowded
      if (
        gameCell.isActive === true &&
        checkNeighbours(simulation, gameCell.row, gameCell.col, gridSize) > 3
      ) {
        newSimulation[row][col].isActive = false
      }
      //survive
      if (
          gameCell.isActive === true &&
          checkNeighbours(simulation, gameCell.row, gameCell.col, gridSize) === 2 || checkNeighbours(simulation, gameCell.row, gameCell.col, gridSize) === 3
      ) {
        newSimulation[row][col].isActive = true
      }
      // new born
      if (
        gameCell.isActive === false &&
        checkNeighbours(simulation, gameCell.row, gameCell.col, gridSize) === 3
      ) {
        newSimulation[row][col].isActive = true
      }

      // TODO: Wrapping on other side of board
    }
  }

  return newSimulation
}

export const resetSimulation = (simulation: any, gridSize: number) => {
  const newSimulation = cloneDeep(simulation)
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      newSimulation[row][col].isActive = false
    }
  }
  return newSimulation
}

export const changeCellHealth = (simulation: any, selectedCell: iGameCell) => {
  const newSimulation = cloneDeep(simulation)
  newSimulation[selectedCell.row][selectedCell.col].isActive = !simulation[selectedCell.row][
    selectedCell.col
  ].isActive
  return newSimulation
}
