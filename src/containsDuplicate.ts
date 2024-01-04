const containsDuplicate = (nums: number[]): boolean => {
  console.log(new Set(nums).size !== nums.length);
  return new Set(nums).size !== nums.length;
};

containsDuplicate([1, 2, 3, 1]);
containsDuplicate([1, 2, 3, 4]);
containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
