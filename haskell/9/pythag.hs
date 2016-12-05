pythagCheck :: Integral a => [a] -> [a]
pythagCheck (l:i:st)
   | (a^2) + (b^2) == (c^2) = [a, b, c]
   | otherwise              = pythagCheck st
      where a = l
            b = i
            c = 1000 - a - b

subList :: Int -> Int -> [Int]
subList x y
    | (1000 - x - y) <= x = []
    | (1000 - x - y) <= y = []
    | otherwise           = x : y : subList x (y + 1)

mainList :: Int -> [Int]
mainList x
    | x > (665) = []
    | otherwise = concat [(subList x x), (mainList (x + 1))]


---- random input versions
--createList :: [Int] -> [Int] -> [Int]
--createList list1 list2 = (sort [x, y, z])
--    where x = head list1
--          y = head (filter (<=(999 - x)) list2)
--          z = 1000 - x - y

--pythagCheck :: [Int] -> [Int] -> [Int]
--pythagCheck list1 list2
--   | (a^2) + (b^2) == (c^2) = [a, b, c]
--   | otherwise              = pythagCheck (tail list1) (tail list2)
--      where a = head (createList list1 list2)
--            b = head (tail (createList list1 list2))
--            c = head (tail (tail (createList list1 list2)))