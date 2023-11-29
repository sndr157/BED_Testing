export const replaceVowels = (inputString) => {
    if (typeof inputString !== "string") {
        throw new TypeError("Input must be a string.");
    }
    
    return inputString.replace(/[aeiou]/gi, "x");
};
