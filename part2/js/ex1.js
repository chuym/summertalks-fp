Function Functor() {
    this.fmap = function () {
        throw new Error("Not Implemented");
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

module.exports.Graph = Graph;
module.exports.Tree = Tree;
module.exports.List = List;
