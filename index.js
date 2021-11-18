function insertAt(array, index, element) {
    
    let i = index;
    let length = array.length;
    // console.log("Initial Array", array);
    while (i <= length) {
        array[i] = array[i + 1];
        i++;
        length--;
    }
    i = index;
    array[i] = element;
    // console.log("Final Array", array);
    return array;
}
function divideArray(array, start, steps) {
    for (let i = 0; i < array.length / steps; i++) {
        let stop = (i + 1) * steps;
        let newArray = array.slice(start, stop)
        start = (i + 1) * steps;
        stop = (i + 1) * steps;
        console.log(newArray);
    }
}
