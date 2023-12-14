import * as readline from 'readline';

let times = 0
let answer = ''

const checkCorrect = (answers: string[], strs: string[]) => {
  let countTotal = 0
  let countPosition = 0
  const temp: string[] = []

  strs.forEach((str, strIndex) =>
    answers.forEach((answer, answerIndex) => {
      if (answer.includes(str)) {
        temp.push(str)
      }
      if (answer === str && strIndex === answerIndex) {
        countPosition++
      }
    })
  )

  countTotal = [...new Set(temp)].length
  times++

  console.table({
    'Answer': answers.join(''),
    'Random String': strs.join(''),
    'Count Total': countTotal,
    'Count Position': countPosition,
    'Times': times
  })
}

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputString = () => {
  readLine.question('Enter your string: ', (input) => {
    if (input === 'e') {
      readLine.close();
    } else {
      const str = [...input.toUpperCase()]
      checkCorrect([...answer], str)
      inputString()
    }
  })
}

const getInput = () => {
  console.log("If you want to exit, please press 'e'")
  readLine.question('Enter your answer: ', (inputAnswer) => {
    if (inputAnswer === 'e') {
      readLine.close();
    } else {
      answer = inputAnswer.toLocaleUpperCase()
      inputString()
    }
  });
}

getInput()