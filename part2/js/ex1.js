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

Tree.prototype = new Functor();

Tree.prototype.fmap = function (fn) {
    this.node = fn(this.node);

    if(this.left) {
        this.left = this.left.fmap(fn);
    }

    if(this.right) {
        this.right = this.right.fmap(fn);
    }

    return this;
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
    var tree = new Tree();
    tree.node = node;
    tree.left = left;
    tree.right = right;

    return tree;
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
module.exports.connect = function (tree, left, right) {
    tree.left = left;
    tree.right = right;

    return tree;
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
