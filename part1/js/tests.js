var assert = require("assert"),
    rt1 = require("./rt1");

describe("Referential Transparency exercise", function () {

    it("Expect function to receive an array and a look up value", function () {
        assert.throws(function () {
            rt1('not good value', []);
        }, /Function expects an array and a lookup value/);
    });

    it("Should find the correct result for a simple case", function () {
        var case = [5,4,1],
            result = rt1(case, 4);

        assert.equal(result, 1);
    });

    it("Should handle an array object properly", function () {
        var case = new Array(5,4,1),
            result = rt1(case, 4);

        assert.equal(result, 1);
    });

    it("Should return undefined if index is not found", function () {
        var case = [5,4,1],
            result = rt1(case, 7);

        assert.equal(result, undefined);
    });

    it("Should return undefined if index is the last one", function () {
        var case = [5,4,1],
            result = rt1(case, 1);

        assert.equal(result, undefined);
    });

    it("If there are multiple occurences, use the last one.", function () {
        var case = [5,4,1,4,5],
            result = rt1(case, 4);

        assert.equal(result, 5);
    });

    it("If there are multiple occurences, use the last one even if it's the last one on the list.", function () {
        var case = [5,4,1,4,5],
            result = rt1(case, 5);

        assert.equal(result, undefined);
    });



    it("Should work for strings as well", function () {
        var case = ["apple", "orange", "banana"]
            result = rt1(case, "orange");

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
            result = rt1(case, { val: 1 });

        assert.deepEqual(result, { val: 2 });
    });
});
