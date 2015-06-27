collatz :: (Integral a, Eq a) => a -> [a]

collatz x 
    | x == 1 = [1]
    | x `mod` 2 == 0 = x : collatz (x `div` 2)
    | otherwise = x : collatz ((x*3) + 1)
