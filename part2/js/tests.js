var assert = require("assert"),
    Functors = require("./ex1"),
    Applicatives = require("./ex2"),
    Monads = require("./ex3");

describe("Exercise #1 - Functors", function () {
    describe("List Functor", function () {
        it("List should be an instance of Functor");
        it("newList function should be implemented");
        it("newList function should return a new List");
        it("newList function should return a new List with the node value specified");
        it("newList function should return a new List with the next value specified");
        it("link function must be implemented");
        it("link function must link to a node");
        it("link must not change its parameters");
        it("List must implement fmap function");
        it("List must properly apply the fmap function");
        it("List fmap function must not change the list itself");
    });

    describe("Tree Functor", function () {
        it("Tree should be an instance of Functor");
        it("newTree must be implemented");
        it("newTree function should return a new Tree");
        it("newTree function should return a new Tree with the node value specified");
        it("newTree function should return a new Tree with the left tree value specified");
        it("newTree function should return a new Tree with the right tree value specified");
        it("connect must be implemented");
        it("connect must connect to a single tree");
        it("connect must connect to both subtrees");
        it("connect must not change its parameters");
        it("Tree must implement fmap function");
        it("Tree must properly apply the fmap function");
        it("Tree fmap function must not change the list itself");
    });

    describe("Graph Functor", function () {
        it("Graph should be an instance of Functor");
        it("newGraph must implement new function");
        it("newGraph  function should return a new Graph");
        it("newGraph  function should return a new Graph with the node value specified");
        it("newGraph  function should return a new Graph with the vertices specified");
        it("addEdge function must implemented");
        it("addEdge function must not change parameters");
        it("addEdge function should add a single edge");
        it("removeEdge function must implemented");
        it("removeEdge function must not change parameters");
        it("removeEdge function should remove a single edge");
        it("setVertices function must implemented");
        it("setVertices function must not change parameters");
        it("setVertices function should set the vertices properly.");
        it("Graph must implement fmap function");
        it("Graph must properly apply the fmap function");
        it("Graph fmap function must not change the list itself");
    });

});

describe("Exercise #2 - Applicative Functors", function () {
    describe("List Applicative Functor", function () {
        it("List should be an instance of Functor");
        it("List should be an instance of Applicative");
        it("List should implement pure");
        it("A list should be returned by pure.");
        it("applicate function should be implemented");
        it("applicate function should create a new list with each item of the provided list applied with the applicative list functions");
        it("applicate should not modify any of its inputs");
    });

    describe("Array Applicative Functor", function () {
        it("Array should be an instance of Functor");
        it("Array should be an instance of Applicative");
        it("Array should implement pure");
        it("An array should be returned by pure.");
        it("applicate function should be implemented");
        it("applicate function should create a new array with each item of the provided array applied with each applicative array functions");
        it("applicate should not modify any of its inputs");
    });
});

describe("Exercise #3 - Monads", function () {
    describe("Maybe Monad", function () {
        it("Maybe should be an instance of Functor");
        it("Maybe should be an instance of Applicative");
        it("Maybe should be an instance of Monad");


        it("Maybe implement ret function");
        it("Maybe ret function returns a 'just' maybe for any value other than null");
        it("Maybe ret function returns a 'nothing' maybe for null");

        it("Maybe implement bind function");
        it("Maybe bind should execute properly for a 'just' maybe");
        it("Maybe bind should execute properly for a 'nothing' maybe");
    });

    describe("Promise Monad", function () {
        it("Promise should be an instance of Functor");
        it("Promise should be an instance of Applicative");
        it("Promise should be an instance of Monad");

        it("Promise implement ret function");
        it("Promise ret function returns a 'just' maybe for any value other than null");
        it("Promise ret function returns a 'nothing' maybe for null");

        it("Promise implement bind function");
        it("Promise bind should execute properly for a broken promise");
        it("Promise bind should execute properly for a non-resolved promise");
        it("Promise bind should execute properly for a resolved promise");
    });
});
