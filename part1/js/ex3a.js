/*
 * Implement the BinarySearch algorithm using a list.
 *
 */

// (Ord a) => [a] -> [a]
function quicksort(list) {
    if(list.length === 0) {
        return [];
    }

    var pivot = list.shift(),
        left = list.filter(function (a) {
            return a <= pivot
        }),
        right = list.filter(function (a) {
            return a > pivot
        });

    return quicksort(left).concat(pivot).concat(quicksort(right));
}

// Assumes list is sorted
// (Eq a) => [a] -> a -> Maybe a
function binarySearch(list, item) {
    var mid = Math.floor(list.length / 2),
        slice;

    if(mid === 0) {
        return (item === list[mid] ? item : null);
    }

    if(list[mid] === item) {
        return item;
    }

    if(list[mid] > item) {
        return search(list.slice(0, mid), item);
    } else {
        return search(list.slice(mid + 1, list.length), item);
    }
}


// (Eq a, Ord a) => [a] -> a -> Maybe a
function search(list, item) {
    list = quicksort(list);
    return binarySearch(list, item);
}

module.exports = search;

// Testing module

var testcase = [5,4,3,5,6,2,1,7];
console.log(search(testcase, 2));
