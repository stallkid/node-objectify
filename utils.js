exports.toObject = function (arr) {
    let obj = new Object;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined) obj[i] = arr[i];
    }
    return obj;
}