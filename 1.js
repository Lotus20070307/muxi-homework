
var singleNumber = function (nums) {

    for (let i = 0; i < nums.length; i++) {
        array = [], numbers = [];
        array = nums.slice(0);
        array.splice(i, 1);
        if (array.includes(nums[i])) {
            result = nums[i]
        }
        else right=nums[i]
    }
    return right
}
console.log(singleNumber([2, 2,1,1,3]))

