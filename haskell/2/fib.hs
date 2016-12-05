fibMaxList :: (Num a, Ord a) => a -> [a]
fibMaxList x
    | x < 1     = [0]
    | x < 2     = [0, 1]
    | otherwise = reverse (fibNext x ([1, 0]))


fibNext :: (Num a, Ord a) => a -> [a] -> [a]
fibNext x (l:ist)
    | l > x     = ist
    | otherwise = fibNext x ((l + (head ist)):l:ist)