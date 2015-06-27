quicksort :: (Ord a) => [a] -> [a]
quicksort [] = []
quicksort (x:xs) =
    let left = quicksort [ a | a <- xs, a <= x ]
        right = quicksort [ a | a <- xs, a > x ]
    in left ++ [x] ++ right

binarysearch :: (Ord a, Eq a) => a -> [a] -> Maybe a
binarysearch _ [] = Nothing
binarysearch x xs
    | pivot == x = Just x
    | pivot > x = binarysearch x left
    | otherwise = binarysearch x right
    where pivot = xs !! ((length xs) `div` 2)
          left = [ xs !! a | a <- [0,1..((length xs) `div` 2) - 1] ]
          right = [ xs !! a | a <- [((length xs) `div` 2) + 1 .. (length xs) - 1] ]



search :: (Ord a, Eq a) => [a] -> a -> Maybe a
search xs x = binarysearch x $ quicksort xs
