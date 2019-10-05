const contructArray = function() {

    const arr = Array.prototype.slice.call(arguments)
    arr.push(" in the Billiard Room.")
    return arr.join('');
}
constructArray('was', 'is', 'in');
console.log(arr);