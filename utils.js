exports.toObject = function (arr) {
    let obj = new Object;
    for (let i = 0; i < arr.length; i++) {
        obj[i] = arr[i];
    }
    return obj;
}