const isPalindrome = (s: string): boolean => {
  const string = [...s.toLowerCase()]
    .filter((char) => /[a-z0-9]/.test(char))
    .join("");
  return string === [...string].reverse().join("");
};

const s = " ";
// const s = "A man, a plan, a canal: Panama";
// const s = "0P";
// const s = "ab_a";
isPalindrome(s);
