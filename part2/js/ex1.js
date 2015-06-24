function Functor() {
    this.fmap = function () {
        throw new Error("Not implemented");
    };
}

function List() {
    this.node;
    this.next;
}

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
    throw new Error("Not Implemented");
}

module.exports.newTree = function (node, left, right) {
    throw new Error("Not Implemented");
};

module.exports.newGraph = (node, vertices) {
    throw new Error("Not Implemented");
};

/* This function should link a node to a list */
module.exports.link = function () {
    throw new Error("Not Implemented");
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
