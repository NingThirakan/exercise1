const twoSumSort = (numbers: number[], target: number): number[] => {
  const position = [];

  numbers.forEach((item, index) => {
    const value = target - item;
    const secondIndex = numbers.indexOf(value, index + 1);

    if (
      position.length < 2 &&
      secondIndex &&
      numbers[index] + numbers[secondIndex] === target &&
      (!position.includes(index) || !position.includes(secondIndex))
    ) {
      position.push(index + 1);
      position.push(secondIndex + 1);
    }
  });
  console.log(position);
  return position;
};

twoSumSort([2, 7, 11, 15], 9);
twoSumSort([3, 2, 4], 6);
twoSumSort([-1, 0], -1);
twoSumSort([2, 4, 3, 5], 7);
