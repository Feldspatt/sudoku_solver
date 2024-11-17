import {describe, test, expect, beforeEach} from 'vitest'
import {main} from "../src/main";
import {sudokuEasy1} from "./sample/sudokuEasy1";
import {isSudokuDone} from "../src/assertions/isSudokuDone";
import {sudokuMedium1} from "./sample/sudokuMedium1";
import {sudokuHard1} from "./sample/sudokuHard1";
import {stats} from "../src/print/stats";

describe('handle all difficulties', () => {

    beforeEach(()=>{
        stats.narrowedBasedonCombinations = 0
        stats.narrowedBasedonCombinations = 0
        stats.state = ''
        stats.timeSpent = 0
    })

    test('pass easy',()=>{

        const sudoku = main(sudokuEasy1)
        expect(isSudokuDone(sudoku)).toBe(true)
    })

    test('pass medium',()=>{

        const sudoku = main(sudokuMedium1)
        expect(isSudokuDone(sudoku)).toBe(true)
    })

    test('pass hard',()=>{

        const sudoku = main(sudokuHard1)
        expect(isSudokuDone(sudoku)).toBe(true)
    })
});