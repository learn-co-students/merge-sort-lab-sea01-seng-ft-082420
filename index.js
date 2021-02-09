function findMinAndRemoveSorted(array){
    let min = array[0]
    array.shift()
    return min
}

function findMinAndRemove(firstHalf, secondHalf){
    let minfirstHalf = firstHalf[0]
    let minsecondHalf = secondHalf[0]
   
    if(minfirstHalf < minsecondHalf){
      return firstHalf.shift()
    } else {
      return secondHalf.shift()
    }
  }
   
function merge(firstHalf, secondHalf){
    let sorted = []
    while(firstHalf.length != 0 && secondHalf.length != 0){
      let currentMin = findMinAndRemove(firstHalf, secondHalf)
      sorted.push(currentMin)
    }
    return sorted.concat(firstHalf).concat(secondHalf)
  }

function mergeSort(array){
    let mid = array.length/2
    let startArray = array.slice(0, mid)
    let endArray = array.slice(mid, array.length)
    if(array.length < 2){
        return array
    }
    return merge(mergeSort(startArray), mergeSort(endArray))
}
