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

// is anagram 

const isAnagram = function () {
    var s = "car";
    var t = 'arc'

    if (s.length !== t.length) return console.log('false')

    var freq = new Array(26).fill(0)
    for (var i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
        freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--
    }

    for(var i = 0; i < freq.length; i++) {
        if (freq[i] !== 0) return console.log('false')
    }

    return console.log('true')
}

isAnagram()

// reverse string

//const reverseString = function () {
    //let string = "reverse"

    //let left = 0;
    //let right = string.length - 1;

    //let newString = ''

    //while (left < right) {
        //let temp = string[left];
        //newString[left] = string[right];
        //newString[right] = temp;
        //left ++;
        //right --;
    //}

    //return console.log(string), console.log(newString)
//}

//reverseString()