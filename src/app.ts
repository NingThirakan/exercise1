import * as readline from 'readline';

const regex = /^[\a]$/
let times = 0
let inputAnswer = ''
let countTotal = 0
let countPosition = 0
let position: string[] = []
let temp: string[] = []

const checkAndCount = (str: string, strIndex: number, answer: string, answerIndex: number) => {
  if (inputAnswer.includes(str)) {
    temp.push(str)
  }
  if (answer === str && strIndex === answerIndex) {
    position.push((strIndex + 1).toString())
    countPosition++
  }
  countTotal = [...new Set(temp)].length
}

const checkCorrect = (answers: string[], input: string[]) => {
  countTotal = 0
  countPosition = 0
  position.length = 0
  temp.length = 0

  input.forEach((str, strIndex) =>
    answers.forEach((answer, answerIndex) => checkAndCount(str, strIndex, answer, answerIndex))
  )

  times++

  const value = [
    {
      'Answer': inputAnswer,
      'Input String': input.join(''),
      'Count Total': countTotal,
      'Count Position': countPosition,
      'Position': position.length > 0 ? position.join(',') : '',
      'Times': times
    }
  ]
  console.table(value, ['Answer', 'Input String', 'Count Total', 'Count Position', 'Position', 'Times'])
}

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputString = () => {
  console.log("If you want to exit, please press 'e'")

  readLine.question('Enter your string: ', (input) => {
    if (input === 'e') {
      readLine.close();
    } else if (regex.test(input) && input.length === 4) {
      const str = [...input.toUpperCase()]
      checkCorrect([...inputAnswer], str)
      inputString()
    } else {
      console.log('Please enter a-z or A-Z and fill 4 characters')
      inputString()
    }
  })
}

const getInput = () => {
  console.log("If you want to exit, please press 'e'")

  readLine.question('Enter your answer: ', (input) => {
    if (input === 'e') {
      readLine.close();
    } else if (regex.test(input) && input.length === 4) {
      inputAnswer = input.toLocaleUpperCase()
      inputString()
    } else {
      console.log('Please enter a-z or A-Z and fill 4 characters')
      getInput()
    }
  });
}

getInput()