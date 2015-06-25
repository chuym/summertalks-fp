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

function applicate() {
    throw new Error("Not Implemented");
}
