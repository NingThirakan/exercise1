"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var times = 0;
var answer = '';
// const checkCorrect = (answer: string, str: string) => {
//   let countTotal = 0
//   let countPosition = 0
//   const temp: string[] = []
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < answer.length; j++) {
//       if (answer[j] === str[i]) {
//         if (i === j) {
//           countPosition += 1
//         }
//       }
//       else if (answer.includes(str[j])) {
//         temp.push(str[j])
//       }
//     }
//     countTotal = Array.from(new Set(temp)).join('').length
//   }
//   times += 1
//   console.log(answer, str, countTotal, countPosition, times)
// }
var checkCorrect = function (answer, str) {
    var countTotal = 0;
    var countPosition = 0;
    var temp = [];
    // answer.map((a, i) =>
    //   str.map((s, j) => {
    //     if (answer.includes[s]) {
    //       temp.push(s)
    //       console.log(s)
    //     }
    //     if (a === s && i === j) {
    //       countPosition++
    //     }
    //     // console.log(s)
    //     // if (a === s && i === j) {
    //     //   countPosition++
    //     // } else if (answer.includes[s]) {
    //     //   console.log(222222222222, s)
    //     //   temp.push(s)
    //     // } else {
    //     //   console.log(s, a)
    //     // }
    //   }))
    str.map(function (s, i) { return answer.map(function (a, j) {
        if (answer.includes(s)) {
            temp.push(s);
        }
        if (a === s && i === j) {
            countPosition++;
        }
        // console.log(s)
        // if (a === s && i === j) {
        //   countPosition++
        // } else if (answer.includes[s]) {
        //   console.log(222222222222, s)
        //   temp.push(s)
        // } else {
        //   console.log(s, a)
        // }
    }); });
    console.log('-------------------');
    // console.log(temp, temp.join(''))
    countTotal = temp.join('').length;
    times++;
    console.log(answer, str, countTotal, countPosition, times);
};
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var inputString = function () {
    rl.question('Enter your string: ', function (input) {
        if (input === 'e') {
            rl.close();
        }
        else {
            var str = input.toUpperCase().split('');
            checkCorrect(answer.split(''), str);
            // checkCorrect(answer, str)
            inputString();
        }
    });
};
var getInput = function () {
    rl.question('Enter your answer: ', function (inputAnswer) {
        answer = inputAnswer.toLocaleUpperCase();
        inputString();
    });
};
getInput();
