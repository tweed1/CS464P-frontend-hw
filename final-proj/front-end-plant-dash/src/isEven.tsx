const isEven = function checkIsEven(num) {
    if(typeof num !== 'number') throw new Error("number must be something");
    return num % 2 === 0;
};

module.exports = isEven