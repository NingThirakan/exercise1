import { readFileSync } from 'fs';

const arrayNumber: number[] = []

const findNumber = (string: string) => {
  const getNumber = string.match(/\d/g).join('')
  let value: string[] = []

  value = [getNumber.slice(0, 1), getNumber.slice(-1)]
  arrayNumber.push(Number(value.join('')))
}

const readFile = () => {
  const filePath: string = './assets/example.txt'

  const fileContent: string = readFileSync(filePath, 'utf8')
  fileContent.split('\n').forEach(findNumber)
}

readFile()
const sum = arrayNumber.reduce((previous, current) => previous + current, 0)
console.log(sum)