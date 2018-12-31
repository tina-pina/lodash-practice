const _ = {
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower)
        let clampedValue = Math.min(lowerClampedValue, upper)
        return clampedValue
    },
    inRange(number, start, end) {
        if (!end) {
            end = start;
            start = 0
        }
        if (start > end) {
            let temp = end
            end = start;
            start = temp
        }
        let boolean = (start <= number && number < end)
        let isInRange = boolean
        return isInRange
    },
    words(string) {
        let arr = string.split(' ')
        return arr
    },
    pad(string, length) {

        if (length <= string.length) return string

        let paddingStart = Math.floor((length - string.length) / 2)
        let paddingEnd = length - string.length - paddingStart

        let paddedString = ' ';
        let startp = paddedString.repeat(paddingStart)
        let startp2 = startp.concat(string)
        let endp = paddedString.repeat(paddingEnd)
        let endRes = startp2.concat(endp)
        return endRes

    },
    has(obj, key) {
        let hasValue = obj[key] !== undefined;
        if (hasValue) return true;
        return false;
    },
    invert(obj) {
        let invertedObj = {}
        for (let key in obj) {
            let originalValue = obj[key]
            invertedObj[originalValue] = key
        }
        return invertedObj
    },
    findKey(obj, func) {
        for (key in obj) {
            if (func(obj[key])) return key;
        }
        return undefined;
    },
    drop(arr, num) {
        let newArr = []

        if (!num) newArr = arr.slice(1)
        else newArr = arr.slice(num)

        return newArr;
    },
    dropWhile(arr, func) {
        let newArr = [...arr];
        for (let i = 0; i < arr.length; i++) {
            let eval = func(arr[i], i, arr)
            if (eval) newArr.shift()
            else break;
        }
        return newArr;
    },
    chunk(array, size) {
        let newArr = []
        if (!size) size = 1;
        for (let i = 0; i < array.length; i += size) {
            let slice = array.slice(i, i + size)
            newArr.push(slice)
        }
        return newArr
    }
}





// Do not write or modify code below this line.
module.exports = _;