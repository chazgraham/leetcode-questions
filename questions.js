// checks for power of tree
const isPowerOfThree = () => {
    let n = 22
    while(n > 1){
        n /= 3
    }
    console.log(n)
    
    return n === 1 ? console.log('true') : console.log('false')
};

isPowerOfThree()

// chescks to see if the array contains a duplicate

const containsDuplicate = function () {
    let nums = [1, 2, 4, 7, 8, 4]
    const set = new Set(nums)
    return set.size === nums.length ? console.log('false') : console.log('true')
}

containsDuplicate()