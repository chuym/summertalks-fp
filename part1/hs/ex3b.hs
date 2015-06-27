data Tree a = EmptyTree | Node a (Tree a) (Tree a) deriving (Show)

appendtotree :: (Ord a) => Tree a -> a -> Tree a
appendtotree EmptyTree x = (Node x EmptyTree EmptyTree)
appendtotree (Node a l r) x
    | x == a = (Node a l r)
    | x > a = (Node a l (appendtotree r x))
    | otherwise = (Node a (appendtotree l x) r)

buildtree :: (Ord a) => [a] -> Tree a
buildtree xs = foldl appendtotree EmptyTree xs

findintree :: (Ord a, Eq a) => a -> Tree a -> Maybe a
findintree _ EmptyTree = Nothing
findintree x (Node a l r)
    | x == a = Just x
    | x > a = findintree x r
    | otherwise = findintree x l

search :: (Ord a) => [a] -> a -> Maybe a
search xs x = findintree x $ buildtree xs
