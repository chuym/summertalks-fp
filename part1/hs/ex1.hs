maybeCompare :: (Eq a) => Maybe Int -> a -> (a, Int) -> Maybe Int
maybeCompare m x (y, i)
    | x == y = Just i
    | otherwise = m

tuplelist :: [a] -> [(a, Int)]
tuplelist xs = map (\x -> (xs !! x, x)) [0,1..(length xs) - 1]

extract :: [a] -> Maybe Int -> Maybe a
extract xs Nothing = Nothing
extract xs (Just i)
    | (i + 1) < (length xs) = Just $ xs !! (i + 1)
    | otherwise = Nothing

next :: (Eq a) => [a] -> a -> Maybe a
next xs x = extract xs $ foldl ((flip maybeCompare) x) Nothing $ tuplelist xs
