function Monad() {
    this.ret = function () {
        throw new Error("Not Implemented");
    }

    this.bind = function () {
        throw new Error("Not Implemented");
    }
}

function Maybe() {
    this.just;
}

function Promise() {
    this.pending;
    this.resolved;
    this.broken = false;
}
