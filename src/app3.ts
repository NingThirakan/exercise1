import { createInterface } from 'readline'
import { RomanNumber } from './constants/romanNumber';


const readLine = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const generateZero = (number: number) => {
  let zero = ''

  for (let i = 0; i < number; i++) {
    zero = zero + '0'
  }

  return zero
}

const convertNumber = (inputNum: string) => {
  let number = Number(inputNum)
  let result = ''

  while (number > 0) {
    if (number >= 1000 && number <= 3000) {
      let value = Number(String(number)[0] + generateZero(String(number).length - 1))
      const match = String(value).match(Object.keys(RomanNumber).join('|'))

      if (match) {
        result = result + RomanNumber[value]
      } else {
        while (value > 0) {
          result = result + RomanNumber[1000]
          value = value - 1000
        }
      }
      number = number % 1000

    } else if (number >= 100 && number < 1000) {
      let value = Number(String(number)[0] + generateZero(String(number).length - 1))
      const match = String(value).match(Object.keys(RomanNumber).join('|'))

      if (match) {
        result = result + RomanNumber[value]
      } else {
        while (value > 0) {
          if (value >= 500 && value < 1000) {
            result = RomanNumber[500]
            value = value - 500
          } else {
            result = result + RomanNumber[100]
            value = value - 100
          }
        }
      }
      number = number % 100

    } else if (number >= 10 && number < 100) {
      let value = Number(String(number)[0] + generateZero(String(number).length - 1))
      const match = String(value).match(Object.keys(RomanNumber).join('|'))

      if (match) {
        result = result + RomanNumber[value]
      } else {
        while (value > 0) {
          if (value >= 50 && value < 100) {
            result = RomanNumber[50]
            value = value - 50
          } else {
            result = result + RomanNumber[10]
            value = value - 10
          }
        }
      }
      number = number % 10

    } else if (number < 10) {
      const match = String(number).match(Object.keys(RomanNumber).join('|'))
      if (match) {
        result = result + RomanNumber[number]
      } else {
        while (number > 0) {
          if (number >= 5) {
            result = result + RomanNumber[5]
            number = number - 5
          } else {
            result = result + RomanNumber[1]
            number = number - 1
          }
        }
      }
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
      readLine.close();
    } else if (/\d/.exec(input) && Number(input) > 0 && Number(input) <= 3000) {
      convertNumber(input)
    } else {
      console.log(input)
      getInput()
    }
  });
}

getInput()