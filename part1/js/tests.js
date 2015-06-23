var assert = require("assert"),
    next = require("./ex1"),
    collatz = require("./ex2");

describe("Exercise #1", function () {

    it("Should find the correct result for a simple case", function () {
        var case = [5,4,1],
            result = next(case, 4);

        assert.equal(result, 1);
    });

    it("Should handle an array object properly", function () {
        var case = new Array(5,4,1),
            result = next(case, 4);

        assert.equal(result, 1);
    });

    it("Should return undefined if index is not found", function () {
        var case = [5,4,1],
            result = next(case, 7);

        assert.equal(result, undefined);
    });

    it("Should return undefined if index is the last one", function () {
        var case = [5,4,1],
            result = next(case, 1);

        assert.equal(result, undefined);
    });

    it("If there are multiple occurences, use the last one.", function () {
        var case = [5,4,1,4,5],
            result = next(case, 4);

        assert.equal(result, 5);
    });

    it("If there are multiple occurences, use the last one even if it's the last one on the list.", function () {
        var case = [5,4,1,4,5],
            result = next(case, 5);

        assert.equal(result, undefined);
    });



    it("Should work for strings as well", function () {
        var case = ["apple", "orange", "banana"]
            result = next(case, "orange");

        assert.equal(result, "banana");
    });

    it("Should work for objects as well", function () {
        var case = [
            {
                val: 1
            },
            {
                val: 2
            },
            {
                val: 3
            }
        ]
            result = next(case, { val: 1 });

        assert.deepEqual(result, { val: 2 });
    });
});

describe("Exercise #2", function () {
});

describe("Exercise #3", function () {
});

describe("Exercise #4", function () {
    it("Should return the correct result for a simple matrix", function () {
        var case = [ [1,2,3], [4,5,6], [7,8,9] ];
        assert.deepEqual(ex2(case), case);
    });

    it("Should return the correct result for a recatngular matrix", function () {
        var case = [ [1,-5,3], [4,5,6] ];
        assert.deepEqual(ex2(case), [ [4,5,6] ]);
    });

    it("Should return a vertical matrix as a correct result", function () {
        var case = [ [-6, 15, 2], [-4,5,-9], [1, 19, -13] ];
        assert.deepEqual(ex2(case), [ [15,5,19] ]);
    });

    it("Should return a partial vertical matrix as a correct result", function () {
        var case = [ [-6, -15, 2], [-4,5,-9], [1, 19, -13] ];
        assert.deepEqual(ex2(case), [ [5,19] ]);
    });

    it("Should return a sub matrix around the center", function () {
        var case = [ [-6, -15, 2, -17], [-4,5,19, 39], [1, 19, 33, -25], [1, 4, 5, 2] ];
        assert.deepEqual(ex2(case), [ [5, 19], [19, 33] ]);
    });

});
