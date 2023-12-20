import { readFileSync } from 'fs';
import { ValueStringToNumber } from './constants/numberValue';

const arrayNumber: number[] = []

const checkMatch = (word: string) => {
  return word.match(Object.keys(ValueStringToNumber).join('|'))
}

const findFirst = (string: string) => {
  let word = ''

  for (let i = 0; i < string.length; i++) {
    word = word + string[i]
    const matchNumber = word.match(/\d/)

    if (matchNumber) {
      return matchNumber[0]
    } else {
      const matchString = checkMatch(word)
      if (matchString) {
        return String(ValueStringToNumber[matchString[0]])
      }
    }
  }
}

const findLast = (string: string) => {
  let word = ''

  for (let i = string.length - 1; i >= 0; i--) {
    word = word + string[i]
    const newWord = [...word].reverse().join('')
    const matchNumber = word.match(/\d/)

    if (matchNumber) {
      return matchNumber[0]
    } else {
      const matchString = checkMatch(newWord)
      if (matchString) {
        return String(ValueStringToNumber[matchString[0]])
      }
    }
  }
}

const convertToNumber = (line: string) => {
  let first: string
  let last: string

  first = findFirst(line)
  last = findLast(line)
  arrayNumber.push(Number(first + last))
}

const readFile = () => {
  const filePath: string = './assets/example2.txt'

  const fileContent: string = readFileSync(filePath, 'utf8')
  fileContent.split('\n').forEach(convertToNumber)
}

readFile()
const sum = arrayNumber.reduce((previous, current) => previous + current, 0)
console.log(sum)