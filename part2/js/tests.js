var assert = require("assert"),
    Functors = require("./ex1"),
    Applicatives = require("./ex2"),
    Monads = require("./ex3");

describe("Exercise #1 - Functors", function () {
    describe("List Functor", function () {

        it("List should be an instance of Functor", function () {
            assert.equal(Functors.List instanceof Functors.Functor, true)
        });

        it("newList function should be implemented", function () {
            assert.equal(Functors.newList instanceof Function, true);
        });

        it("newList function should return a new List", function () {
            var list = Functors.newList();
            assert.equal(list instanceof Functor.List);
        });

        it("newList function should return a new List with the node value specified", function () {
            var list = Functors.newList(5);
            assert.equal(list.node, 5);
        });

        it("newList function should return a new List with the next value specified", function () {
            var sibling = Functors.newList(5),
                list = Functors.newList(5, list);

            assert.deepEqual(list.node, sibling);
        });

        it("link function must be implemented", function () {
            assert.equal(Functors.newList instanceof Function, true);
        });

        it("link function must link to a node", function () {
            var list = Functors.newList(5),
                sibling = Functors.newList(10),
                linked;

            var linked = Functors.link(list, sibling);

            assert.deepEqual(linked, sibling);
        });

        it("link must not change its parameters", function () {
            var list = Functors.newList(5),
                sibling = Functors.newList(10),
                linked;

            var linked = Functors.link(list, sibling);

            assert.equal(list, null);

        });

        it("List must implement fmap function", function () {
            var list1 = Functors.newList(5),
                list2 = Functors.newList(10),
                list3 = Functors.newList(15);

            list2 = Functors.link(list2, list3);
            list1 = Functors.link(list1, list);

            assert.doesNotThrow(function () {
                Functors.fmap(function (n) {
                    return n+1;
                }, list1);
            });
        });

        it("List must properly apply the fmap function", function () {
            var list1 = Functors.newList(5),
                list2 = Functors.newList(10),
                list3 = Functors.newList(15),
                mappedList,
                next;

            list2 = Functors.link(list2, list3);
            list1 = Functors.link(list1, list);

            mappedList = Functors.fmap(function (n) {
                return n*2;
            }, list1);

            assert(mappedList instanceof Functor.List);
            assert.equals(mappedList.node, 10);

            next = mappedList.next;
            assert(next instanceof Functor.List);
            assert.equals(next.node, 20);

            next = mappedList.next;
            assert(next instanceof Functor.List);
            assert.equals(next.node, 30);

            next = mappedList.next;
            assert(next === null);

        });

        it("List fmap function must not change the list itself", function () {
            var list1 = Functors.newList(5),
                list2 = Functors.newList(10),
                list3 = Functors.newList(15),
                mappedList,
                next;

            list2 = Functors.link(list2, list3);
            list1 = Functors.link(list1, list);

            mappedList = Functors.fmap(function (n) {
                return n*2;
            }, list1);

            assert.notDeepEqual(mappedList, list1);

        });
    });

    describe("Tree Functor", function () {

        it("Tree should be an instance of Functor", function () {
            assert.equal(Functors.Tree instanceof Functors.Functor, true)
        });

        it("newTree must be implemented", function () {
            assert.equal(Functors.newList instanceof Function, true);
        });

        it("newTree function should return a new Tree", function () {
            var tree = Functors.newTree();
            assert.equal(list instanceof Functor.Tree);
        });

        it("newTree function should return a new Tree with the node value specified", function () {
            var tree = Functors.newTree(5);
            assert.equal(tree.node, 5);
        });

        it("newTree function should return a new Tree with the left tree value specified", function () {
            var left = Functors.newTree(10),
                tree = Functors.newTree(5, left);

            assert.deepEqual(tree.left, left);
        });

        it("newTree function should return a new Tree with the right tree value specified", function () {
            var left = Functors.newTree(10),
                right = Functors.newTree(-10),
                tree = Functors.newTree(5, left, right);

            assert.deepEqual(tree.right, right);
        });

        it("connect must be implemented", function () {
            assert.equal(Functors.connect instanceof Function, true);
        });

        it("connect must connect to a single tree", function () {
            var tree = Functors.newTree(5),
                left = Functors.newTree(10);

            tree = Functors.connect(tree, left);

            assert.deepEqual(tree.left, left);
            assert.equal(tree.right, null);
        });

        it("connect must connect to both subtrees", function () {
            var tree = Functors.newTree(5),
                left = Functors.newTree(10),
                right = Functors.newTree(-10);

            tree = Functors.connect(tree, left, right);

            assert.deepEqual(tree.left, left);
            assert.deepEqual(tree.right, right);

        });

        it("connect must not change its parameters", function () {
            var tree = Functors.newTree(5),
                left = Functors.newTree(10),
                right = Functors.newTree(-10),
                modTree;

            modTree = Functors.connect(tree, left, right);

            assert.notDeepEqual(tree, modTree);

        });

        it("Tree must implement fmap function", function () {
            var rightGrandChild2 = Functors.newTree(100),
                rightGrandChild1 = Functors.newTree(10),
                rightChild = Functors.newTree(20, rightGrandChild1, rightGrandChild2),
                right = Functors.newList(15, rightChild),
                left = Functors.newList(10),
                tree = Functors.newList(5, left, right);

            assert.doesNotThrow(function () {
                Functors.fmap(function (n) {
                    return n+1;
                }, tree);
            });

        });

        it("Tree must properly apply the fmap function", function () {
            var rightGrandChild2 = Functors.newTree(100),
                rightGrandChild1 = Functors.newTree(10),
                rightChild = Functors.newTree(20, rightGrandChild1, rightGrandChild2),
                right = Functors.newList(15, rightChild),
                left = Functors.newList(10),
                tree = Functors.newList(5, left, right);

            tree = Functors.fmap(function (n) {
                return n+1;
            }, tree);

            assert.equal(tree.node, 6);
            assert.equal(tree.left.node, 11);
            assert.equal(tree.right.node, 16);
            assert.equal(tree.right.left.node, 21);
            assert.equal(tree.right.left.left.node, 11);
            assert.equal(tree.right.left.right.node, 101);

        });

        it("Tree fmap function must not change the list itself", function () {
            var rightGrandChild2 = Functors.newTree(100),
                rightGrandChild1 = Functors.newTree(10),
                rightChild = Functors.newTree(20, rightGrandChild1, rightGrandChild2),
                right = Functors.newList(15, rightChild),
                left = Functors.newList(10),
                tree = Functors.newList(5, left, right),
                modTree;

            modTree = Functors.fmap(function (n) {
                return n+1;
            }, tree);

            assert.notDeepEqual(modTree, tree);
        });

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
