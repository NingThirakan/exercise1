const isPalindrome = (x: number): boolean => {
    return Number([...x.toString()].reverse().join('')) === x ? true : false
};
