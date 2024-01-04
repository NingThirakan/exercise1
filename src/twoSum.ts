const twoSum = (nums: number[], target: number): number[] => {
  const position = [];

  nums.forEach((item, index) => {
    const value = target - item;
    const secondIndex = nums.indexOf(value, index + 1);

    if (
      position.length < 2 &&
      secondIndex &&
      nums[index] + nums[secondIndex] === target &&
      (!position.includes(index) || !position.includes(secondIndex))
    ) {
      position.push(index);
      position.push(secondIndex);
    }
  });
  console.log(position);
  return position;
};

// twoSum([2, 7, 11, 15], 9)
// twoSum([3, 2, 4], 6)
// twoSum([3, 3], 6);

// ปรับตรงนี้ให้ออกมาแค่ 2 ตัว
twoSum([2, 4, 3, 5], 7);
