isPalindrome :: String -> Bool
isPalindrome x
    | (head x == last x) && ((length x) < 4) = True
    | head x == last x                       = isPalindrome (tail (init x))
    | otherwise                              = False

prodList = [ x * y | x <- [100..999], y <- [100..999], isPalindrome (show(x * y)) ]