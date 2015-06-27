function compose(sndFn, fstFn) {
    return function (a) {
        return sndFn(fstFn(a));
    }
}
// (Ord b) => [(a, b)] -> [(a, b)]
function quicksortBySnd(list) {
    if(list.length === 0) {
        return [];
    }

    var pivot = list.shift(),
        left = list.filter(function (a) {
            return a[1] <= pivot[1]
        }),
        right = list.filter(function (a) {
            return a[1] > pivot[1]
        });

    return quicksortBySnd(left).concat([pivot]).concat(quicksortBySnd(right));
}

// Int -> [(Int, Int)]
function tuplecombine(n) {
    var i, j, combinations = [];

    for(i = n; i >= 0; i--) {
        for(j = 0; j <= i; j++) {
            combinations.push([j, i]);
        }
    }

    return combinations;
}

// [[a]] -> [[(Int, Int), (Int, Int)]]
function submatricesBounds(matrix) {
    var xBounds = tuplecombine(matrix[0].length - 1),
        yBounds = tuplecombine(matrix.length - 1),
        boundaries = [];

    boundaries = xBounds.reduce(function (col, xbound) {
        return col.concat(yBounds.map(function (ybound) {
            return [xbound, ybound];
        }));
    }, []);

    return boundaries;
}

// (Int, Int) -> (Int, Int) -> [[b]] -> [[b]]
function submatrixAt(x, y, matrix) {
    var i, j, submatrix = [], row;
    for(i = y[0]; i <= y[1]; i++) {
        row = [];
        for(j = x[0]; j <= x[1]; j++) {
            row.push(matrix[i][j]);
        }
        submatrix.push(row);
    }

    return submatrix;
}

// [[a]] -> [[[a]]]
function submatricesfor(matrix) {
    var boundaries = submatricesBounds(matrix);
    return boundaries.map(function (bounds) {
        return submatrixAt(bounds[0], bounds[1], matrix);
    });
}

// (Num a) => [[a]] -> a
function sumtotalmatrix(matrix) {
    return matrix.reduce(function (sum, row) {
        return sum + row.reduce(function (sum, i) {
            return sum + i;
        }, 0);
    }, 0);
}

// [[a]] -> ([[a]], Int)
function tuplematrixsum(matrix) {
    return [matrix, sumtotalmatrix(matrix)]
}

// [[[a]]] -> [([[a]], Int]

function totuplematrixsum(matrices) {
    return matrices.map(function (matrix) {
        return tuplematrixsum(matrix);
    });
}

/*
 * Find the largest submatrix in a matrix
 * The numbers can go from -100 to 100
 * The matrix itself is considered a submatrix.
 * Expect a matrix as input (two dimensional array)
 * Should output another matrix with the longest sum
 */

// [[a]] -> [[a]]
function largestSubmatrix(matrix) {
    var submatricesAsTuple = compose(totuplematrixsum, submatricesfor);
    var sortSubmatricesAsTuples = compose(quicksortBySnd, submatricesAsTuple);
    var submatrices = sortSubmatricesAsTuples(matrix);

    return submatrices.pop()[0];
}

module.exports = largestSubmatrix;
