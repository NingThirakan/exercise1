import { createInterface } from 'readline'
import { RomanNumber } from './constants/romanNumber';

const readLine = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const generateZero = (value: number) => {
  return '0'.repeat(String(value).length - 1)
}

const findValue = (value: number, zero: string = ''): string => {
  let result = ''

  while (value > 0) {
    const numeral = value >= 9
      ? '9'
      : value >= 5
        ? '5'
        : value === 4
          ? '4'
          : '1'

    result += RomanNumber[`${numeral}${zero}`]
    value -= parseInt(numeral)
  }

  return result
}


const convertNumber = (number: number) => {
  let result = ''

  while (number > 0) {
    const divisor =
      number >= 1000 ? 1000 :
        number >= 100 ? 100 :
          number >= 10 ? 10 :
            1

    const value = Math.floor(number / divisor)
    result += findValue(value, generateZero(number))
    number %= divisor

    if (divisor === 1) {
      break
    }
  }

  console.log('result:', result)
  console.log('\n')
  getInput()
}


const getInput = () => {
  console.log("If you want to exit, please press 'e'")

  readLine.question('Enter your number (number is 1 to 3,000): ', (input) => {
    if (input === 'e') {
      readLine.close()
    } else if (/\d/.exec(input) && Number(input) > 0 && Number(input) <= 3000) {
      convertNumber(Number(input))
    } else {
      console.log(input)
      getInput()
    }
  })
}

getInput()