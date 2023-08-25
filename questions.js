
const isPowerOfThree = () => {
    let n = 22
    while(n > 1){
        n /= 3
    }
    console.log(n)
    
    return n === 1 ? console.log('true') : console.log('flase')
};

isPowerOfThree()