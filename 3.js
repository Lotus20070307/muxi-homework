var isEmpty = function (obj) {
    if (typeof obj === "object") {
        if (Object.keys(obj).length === 0 || obj.length === 0) {
            return true;
        } else {
            return false
        }
    } else {
        return false
    }
};

let obj = [1];
console.log(isEmpty(obj)); 