function move(nums) {
    let count = 0, array = [];
    for (let a = 0; a < nums.length; a++) {
        if (nums[a] === 0) {
            count++;
            nums.splice(a, 1)
        }
    }
    array.push('0'.repeat(count));
    return nums.concat(array)
}

console.log(move([22, 0, 1]));
console.log(move([0]));