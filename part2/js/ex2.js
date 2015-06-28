var Functors = require("./ex1");
/*
Applicative Functors:

Functors that contains functions and we want to apply these functions to other functors of the same type.
Create Applicative Functors for Lists
*/

function Applicative() {
    this.pure = function () {
        throw new Error("Not Implemented");
    };

    this.applicate = function () {
        throw new Error("Not Implemented");
    };
}

function List() {
    this.node;
    this.next
}

List.prototype = new Functors.List();

List.pure = function (x) {
    var list = new List();
    list.node = x;
    return list;
}

List.prototype.applicate = function (list) {
    var applied = new List();

    applied.node = list.fmap(this.node);

    if(this.next) {
        applied.next = this.next.applicate(list);
    }

    return applied;
    
}

module.exports.Applicative = Applicative;
module.exports.List = List;

// Testing
var list = List.pure(1),
    twice = List.pure(function (x) { return x*2 }),
    square = List.pure(function (x) { return x*x; }),
    applicated,
    applicatedNext,
    next;

functions = Functors.link(square, twice);

applicativeList = [2,3,4,5].map(function (i) {
    return List.pure(i);
});

Functors.link(applicativeList[2], applicativeList[3]);
Functors.link(applicativeList[1], applicativeList[2]);
Functors.link(applicativeList[0], applicativeList[1]);
Functors.link(list, applicativeList[0]);

console.log(functions);
applicated = square.applicate(list);

console.log(applicated.node);
