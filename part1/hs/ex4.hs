quicksortBySnd :: (Ord b) => [(a, b)] -> [(a, b)]
quicksortBySnd [] = []
quicksortBySnd (x:xs) =
    let left = quicksortBySnd [ a | a <- xs, snd a <= snd x ]
        right = quicksortBySnd [ a | a <- xs, snd a > snd x ]
    in left ++ [x] ++ right


tuplecombine :: Int -> [(Int, Int)]
tuplecombine x = [ (i, j) | i <- [0..x], j <- [x, x-1..0], j >= i ]

submatrixat :: ((Int, Int), (Int, Int)) -> [[a]] -> [[a]]
submatrixat ((x1, x2),(y1, y2)) xxs = map (\xs -> take (x2-x1+1) $ drop x1 xs) $ take (y2-y1+1) $ drop y1 xxs

submatricesbounds :: [[a]] -> [((Int, Int), (Int, Int))]
submatricesbounds matrix = [ ((x, y)) | x <- tuplecombine $ ((length $ matrix !! 0) -1), y <- tuplecombine $ ((length matrix) - 1) ]

summatrix :: (Num a) => [[a]] -> a
summatrix xxs = foldl (+) 0 $ map (foldl (+) 0) xxs 

totuplematrix :: (Num a) => [[a]] -> ([[a]], a)
totuplematrix xxs = (xxs, summatrix xxs)

submatricesfor :: [[a]] -> [[[a]]]
submatricesfor xxs = map ((flip submatrixat) xxs) $ submatricesbounds xxs


largestsubmatrix :: (Ord a, Num a) => [[a]] -> [[a]]
largestsubmatrix xxs = (fst . last . quicksortBySnd) $ map totuplematrix $ submatricesfor xxs
