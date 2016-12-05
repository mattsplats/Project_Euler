import System.Random
import Data.List(sort)

newRand = randomIO :: IO Int

-- limited length lists
randomList :: Int -> Int -> [Double]
randomList amount seed = take amount (randoms (mkStdGen seed) :: [Double])

randListInt :: Double -> Double -> Int -> Int -> [Int]
randListInt min max amount seed = [ ceiling ((x * (max - min)) + min) | x <- randomList amount seed ]


-- infinite lists
randomListInf :: Int -> [Double]
randomListInf seed = randoms (mkStdGen seed) :: [Double]

rIntListInf :: Double -> Double -> Int -> [Int]
rIntListInf min max seed = [ ceiling ((x * (max - min)) + min) | x <- randomListInf seed ]


-- from pythag.hs
pythagCheck :: [Double] -> [Double] -> [Int]
pythagCheck (x:xs) (y:ys)
   | (a^2) + (b^2) == (c^2) = [a, b, c]
   | otherwise              = pythagCheck xs ys
      where aplusb = ceiling (x * 666)
            a = ceiling (y * (fromIntegral (aplusb - 1)))
            b = aplusb - a
            c = 1000 - a - b