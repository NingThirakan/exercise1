const twoSum = (nums: number[], target: number): number[] => {
    const position = []

    nums.forEach((item, index) => {
        const value = target - item
        const index2 = nums.indexOf(value, index + 1)

        if (index2 && nums[index] + nums[index2] === target &&
            (!position.includes(index) || !position.includes(index2))) {
            position.push(index)
            position.push(index2)
        }
    })
    return position
};

// twoSum([2, 7, 11, 15], 9)
// twoSum([3, 2, 4], 6)
// twoSum([3, 3], 6)

