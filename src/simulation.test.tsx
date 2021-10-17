import {checkNeighbours, generateSimulation} from './simulation'

const initialState = [
  {
    row: 0,
    col: 0,
    isActive: false,
  },
  {
    row: 0,
    col: 1,
    isActive: false,
  },
  {
    row: 0,
    col: 2,
    isActive: false,
  },
  {
    row: 1,
    col: 0,
    isActive: false,
  },
  {
    row: 1,
    col: 1,
    isActive: false,
  },
  {
    row: 1,
    col: 2,
    isActive: false,
  },
  {
    row: 2,
    col: 0,
    isActive: false,
  },
  {
    row: 2,
    col: 1,
    isActive: false,
  },
  {
    row: 2,
    col: 2,
    isActive: false,
  },
]

describe('Simulation', function () {
  describe('isAlive', function () {
    describe('when 3 neighbours are active', function () {
      it('count returned should be 3 ', function () {
        const simulation = generateSimulation(3)
        const gridSize = 3
        const gameCell = {
          row: 0,
          col: 0,
        }
        simulation[0][1].isActive = true
        simulation[1][0].isActive = true
        simulation[1][1].isActive = true
        const result = checkNeighbours(simulation, gameCell.row, gameCell.col, gridSize)
        expect(result).toBe(3)
      })
    })

    describe('when 0 neighbours are alive', function () {
      it('count returned should be 3 ', function () {
        const simulation = generateSimulation(3)
        const gridSize = 3
        const gameCell = {
          row: 0,
          col: 0,
        }
        const result = checkNeighbours(simulation, gameCell.row, gameCell.col, gridSize)
        expect(result).toBe(0)
      })
    })
  })

  describe('updateSimulation', function () {
    describe('when more than 3 neighbours are alive', function () {
      it('should die of overcrowding', function () {

      });
    });
    describe('when 2 or 3 neighbours are alive', function () {
      it('should survive', function () {

      });
    });
    describe('when less than 2 neighbours are alive', function () {
      it('should die', function () {

      });
    });
    describe('when 3 neighbours are alive', function () {
      it('should be born', function () {

      });
    });
  });
})
