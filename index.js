function findMinAndRemoveSorted(arr) {
    return arr.shift()
}

function merge(arr1, arr2) {
    let finalArray = []
    while (arr1.length > 0 && arr2.length > 0) {
        if (arr1[0] < arr2[0]) {
            finalArray.push(findMinAndRemoveSorted(arr1))
        } else {
            finalArray.push(findMinAndRemoveSorted(arr2))
        }
    }
    return finalArray.concat(arr1).concat(arr2)
}

function mergeSort(arr) {
    let midpoint = arr.length / 2;
    let firstHalf = arr.slice(0, midpoint)
    let secondHalf = arr.slice(midpoint)
    let sorted
    if (arr.length < 2) {
        return arr
    } else {
        sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
    return sorted
}
