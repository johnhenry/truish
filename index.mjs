import { TRUTHY_WORDS, FALSY_WORDS, INDETERMINANT_WORDS } from "./words.mjs";

/**
 * Creates a function that checks if a string value matches any of the provided words
 *
 * @param {...string} words - Array of words to match against
 * @returns {Function} - A matcher function that takes a string value and returns boolean
 * @throws {TypeError} - If the input value is not a string
 *
 * @example
 * const isColor = createMatcher('red', 'green', 'blue');
 * isColor('red') // returns true
 * isColor('yellow') // returns false
 */
const createMatcher = (...words) => {
  return (value) => {
    if (typeof value !== "string") {
      throw new TypeError("value must be a string");
    }
    // Check if the normalized value is in our truthy words list
    return words.includes(value.toLowerCase().trim());
  };
};

/**
 * Checks if a value is truthy
 *
 * @param {string} value - The string value to check for truthiness
 * @returns {boolean} - True if the value is considered truthy
 * @throws {TypeError} - If the input value is not a string
 *
 * @example
 * truish("true") // returns true
 * truish("yes") // returns true
 * truish("no") // returns false
 */
const truish = createMatcher(...TRUTHY_WORDS);

/**
 * Checks if a value is falsy
 *
 * @param {string} value - The string value to check for falsiness
 * @returns {boolean} - True if the value is considered falsy
 * @throws {TypeError} - If the input value is not a string
 *
 * @example
 * falsish("false") // returns true
 * falsish("no") // returns true
 * falsish("yes") // returns false
 */
const falsish = createMatcher(...FALSY_WORDS);

/**
 * Checks if a value conveys uncertainty
 *
 * @param {string} value - The string value to check for indeterminate meaning
 * @returns {boolean} - True if the value conveys uncertainty
 * @throws {TypeError} - If the input value is not a string
 *
 * @example
 * indeterminant("maybe") // returns true
 * indeterminant("sometimes") // returns true
 * indeterminant("possibly") // returns true
 */
const indeterminant = createMatcher(...INDETERMINANT_WORDS);

// Export the functions
export { truish, falsish, indeterminant, createMatcher };
export default truish;
