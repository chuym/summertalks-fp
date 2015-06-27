// Tree a
function Tree() {
    this.node = null; // null | a
    this.left = null; // null | Tree a
    this.right = null; // null | Tree a
}

// (Ord a, Eq a) => Tree a -> a -> Tree a
function appendToTree(tree, a) {
    if(tree === null) {
        tree = new Tree();
        tree.node = a;
        return tree;
    }

    if(tree.node === null) {
        tree.node = a;
        return tree;
    }

    if(tree.node === a) {
        return tree;
    }

    if(a > tree.node) {
        tree.right = appendToTree(tree.right, a);
        return tree;
    }

    if(a < tree.node) {
        tree.left = appendToTree(tree.left, a);
        return tree;
    }
}


// (Ord a) => [a] -> Tree a
function buildTree(list) {
    var root = new Tree();
    root.node = list.shift();

    var tree = list.reduce(appendToTree, root);

    return tree;
}

// (Eq a) => Tree a -> a -> Maybe a
function findInTree(tree, item) {
    if(tree === null) {
        return null;
    }

    if(tree.node === item) {
        return item;
    }

    if(item > tree.node) {
        return findInTree(tree.right, item);
    } else {
        return findInTree(tree.left, item);
    }
}

/*
 * Implement the BinarySearch algorithm using a Binary Tree
 */
// (Ord A, Eq a) => [a] -> a -> Maybe a
function search(list, item) {
    var tree = buildTree(list);
    return findInTree(tree, item);
}

module.exports = search;
