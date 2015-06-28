data List a = EmptyList | Node a (List a) deriving (Show)

instance Functor List where
    fmap f EmptyList = EmptyList
    fmap f (Node a next) = (Node (f a) (fmap f next))

instance Applicative List where
    pure a = (Node a (EmptyList))
    EmptyList <*> _ = EmptyList
    (Node f next) <*> l = fmap f l

data Tree a = EmptyTree | Leaf a (Tree a) (Tree a) deriving (Show)

instance Functor Tree where
    fmap f EmptyTree = EmptyTree
    fmap f (Leaf a l r) = (Leaf (f a) (fmap f l) (fmap f r))
