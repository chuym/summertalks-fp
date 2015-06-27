// [a] -> [(a, Int)]
function toTuple(list) {
    return list.map(function (x, idx) {
        return [x, idx];
    });
}

/*
 * Return the item next to the specified item in a list.
 * If the item doesn't exist, return undefined.
 * If there is more than one item, use the last found item.
 */

// (Eq a) => [a] -> a -> Maybe a
function next(list, item) {
    tupleList = toTuple(list);

    idx = tupleList.reduce(function (old, current) {
        if(current[0] === item) {
            old = current[1] + 1;
        }

        return old;
    }, undefined);

    if(idx === list.length || idx === undefined) {
        return undefined;
    } else {
        return list[idx];
    }
}

module.exports = next;
