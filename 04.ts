import * as fs from 'fs'

const LOGGING = true
function log(msg: any, name: string = '', forceLog = false) {
    if (LOGGING || forceLog) {
        name === '' ? console.log(`-------\n${msg}\n-------`) : console.log(`-------\n${name}:\n${msg}\n-------`)
    }
}

const input: string = fs.readFileSync('input.txt','utf8')
log(input, 'input')

const lines: string[] = input.split('\n')
const characters: string[][] = lines.map((line) => line.split(''))
console.log(characters, 'characters')

function countXMAShorizontal(characters: string[][]): number {
    let result = 0
    for (let i = 0; i < characters.length; i++) {
        for (let j = 0; j < characters[i].length - 3; j++) {
            if (characters[i][j] === 'X' && characters[i][j + 1] === 'M' && characters[i][j + 2] === 'A' && characters[i][j + 3] === 'S') {
                result++
            }
        }
        // count SAMX
        for (let j = 0; j < characters[i].length - 3; j++) {
            if (characters[i][j] === 'S' && characters[i][j + 1] === 'A' && characters[i][j + 2] === 'M' && characters[i][j + 3] === 'X') {
                result++
            }
        }
    }
    return result
}

function countXMASvertical(characters: string[][]): number {
    let result = 0
    for (let i = 0; i < characters.length - 3; i++) {
        for (let j = 0; j < characters[i].length; j++) {
            if (characters[i][j] === 'X' && characters[i + 1][j] === 'M' && characters[i + 2][j] === 'A' && characters[i + 3][j] === 'S') {
                result++
            }
        }
        // count SAMX
        for (let j = 0; j < characters[i].length; j++) {
            if (characters[i][j] === 'S' && characters[i + 1][j] === 'A' && characters[i + 2][j] === 'M' && characters[i + 3][j] === 'X') {
                result++
            }
        }
    }
    return result
}

function countXMASdiagonal(characters: string[][]): number {
    let result = 0
    for (let i = 0; i < characters.length - 3; i++) {
        for (let j = 0; j < characters[i].length - 3; j++) {
            if (characters[i][j] === 'X' && characters[i + 1][j + 1] === 'M' && characters[i + 2][j + 2] === 'A' && characters[i + 3][j + 3] === 'S') {
                result++
            }
        }
        // count SAMX
        for (let j = 0; j < characters[i].length - 3; j++) {
            if (characters[i][j] === 'S' && characters[i + 1][j + 1] === 'A' && characters[i + 2][j + 2] === 'M' && characters[i + 3][j + 3] === 'X') {
                result++
            }
        }
    }
    return result
}

function countXMASdiagonal2(characters: string[][]): number {
    let result = 0
    for (let i = 0; i < characters.length - 3; i++) {
        for (let j = 3; j < characters[i].length; j++) {
            if (characters[i][j] === 'X' && characters[i + 1][j - 1] === 'M' && characters[i + 2][j - 2] === 'A' && characters[i + 3][j - 3] === 'S') {
                result++
            }
        }
        // count SAMX
        for (let j = 3; j < characters[i].length; j++) {
            if (characters[i][j] === 'S' && characters[i + 1][j - 1] === 'A' && characters[i + 2][j - 2] === 'M' && characters[i + 3][j - 3] === 'X') {
                result++
            }
        }
    }
    return result
}


// count
// M.S
// .A.
// M.S
// count
// M.M
// .A.
// S.S
// count
// S.M
// .A.
// S.M
// count
// S.S
// .A.
// M.M
function countCrossMAS(characters: string[][]): number {
    const rows = characters.length;
    const cols = characters[0].length;
    let result = 0;

    // Iterate over all possible center positions (excluding edges for diagonals)
    for (let i = 1; i < rows - 1; i++) {
        for (let j = 1; j < cols - 1; j++) {
            // Center must be 'A'
            if (characters[i][j] === 'A') {
                // Check all valid X-shaped cross patterns
                if (
                    characters[i - 1][j - 1] === 'M' && // Top-left
                    characters[i + 1][j + 1] === 'S' && // Bottom-right
                    characters[i - 1][j + 1] === 'M' && // Top-right
                    characters[i + 1][j - 1] === 'S'    // Bottom-left
                ) {
                    result++;
                }
                if (
                    characters[i - 1][j - 1] === 'M' && // Top-left
                    characters[i + 1][j + 1] === 'S' && // Bottom-right
                    characters[i - 1][j + 1] === 'S' && // Top-right
                    characters[i + 1][j - 1] === 'M'    // Bottom-left
                ) {
                    result++;
                }
                if (
                    characters[i - 1][j - 1] === 'S' && // Top-left
                    characters[i + 1][j + 1] === 'M' && // Bottom-right
                    characters[i - 1][j + 1] === 'M' && // Top-right
                    characters[i + 1][j - 1] === 'S'    // Bottom-left
                ) {
                    result++;
                }
                if (
                    characters[i - 1][j - 1] === 'S' && // Top-left
                    characters[i + 1][j + 1] === 'M' && // Bottom-right
                    characters[i - 1][j + 1] === 'S' && // Top-right
                    characters[i + 1][j - 1] === 'M'    // Bottom-left
                ) {
                    result++;
                }
            }
        }
    }

    return result;
}

const result = countCrossMAS(characters)
log(result, 'result')