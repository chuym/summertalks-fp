function Functor() {
    this.fmap = function () {
        throw new Error("Not implemented");
    };
}

function List() {
    this.node;
    this.next;
}

List.prototype = new Functor();

List.prototype.fmap = function (fn) {
    this.node = fn(this.node);

    if(this.next) {
        this.next = this.next.fmap(fn);
        return this;
    } else {
        return this;
    }
};

function Tree() {
    this.node;
    this.left;
    this.right;
}

function Graph() {
    this.node;
    this.vertices;
}

module.exports.newList = function (item, next) {
    var list = new List();
    list.node = item;
    list.next = next;

    return list;
}

module.exports.newTree = function (node, left, right) {
    throw new Error("Not Implemented");
};

module.exports.newGraph = function (node, vertices) {
    throw new Error("Not Implemented");
};

/* This function should link a node to a list */
module.exports.link = function (list, node) {
    list.next = node;
    return list;
};

/* Connects subtrees to a tree */
module.exports.connect = function () {
    throw new Error("Not Implemented");
};

/* Adds a single edge to a vertex */
module.exports.addEdge = function() {
    throw new Error("Not Implemented");
};

/* Removes a single edge to a vertex */
module.exports.removeEdge = function () {
    throw new Error("Not Implemented");
};

/* Sets adjacent vertices to a vertex (destructive) */
module.exports.setVertices = function () {
    throw new Error("Not Implemented");
};

/* The functor application method */
module.exports.fmap = function (fn, a) {
    throw new Error("Not Implemented");
};

module.exports.Graph = Graph;
module.exports.Tree = Tree;
module.exports.List = List;
module.exports.Functor = Functor;

// Test

var list2 = module.exports.newList(5),
    list1 = module.exports.newList(10, list2);

var res = list1.fmap(function (i) {
    return i*2;
});

console.log(res);
