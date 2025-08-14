const sameDigitNumbers = ["999", "888", "777", "666", "555", "444", "333", "222", "111", "000"];


let contains = (sameDigitNumber, num) => {
    for (let index = 0; index <= num.length - 3; ++index) {
        if (num[index] === sameDigitNumber[0] &&
            num[index + 1] === sameDigitNumber[1] &&
            num[index + 2] === sameDigitNumber[2]) {
            return true;
        }
    }
    return false;
};

/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = num => {
    for (const sameDigitNumber of sameDigitNumbers) {
        if (contains(sameDigitNumber, num)) {
            return sameDigitNumber;
        }
    }
    return "";
};
