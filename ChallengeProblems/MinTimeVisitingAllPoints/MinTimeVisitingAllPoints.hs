-- The Formula we (Yoel, Peter) made to act as a helper function.
dstnc crdA crdB =  max(abs(head crdB - head crdA)) (abs(last crdB - last crdA))
-- The Driver function we created 'clairvoyance' - we will summon the helper function on.
clairvoyance [] = [[0]]
clairvoyance [x] = [[0]]
clairvoyance (x:y:ls) = [(dstnc x y)] : clairvoyance (y:ls)

-- Solution Fix
grtst a b = max (abs (x2 - x1))(abs (y2 - y1))
  where x1 = head a
        x2 = head b
        y1 = last a
        y2 = last b
lstTime coords = sum $ concat (f coords)
f :: (Num a, Ord a) => [[a]] -> [[a]]
f (x:y:xs) = [(grtst x y)] : f (y:xs)
f (x:xs) = []

-- I forgot about this idea, but here we can pattern match, 
-- in this case (x:xs) means x is the last element in the list, 
-- therefore we we recurse with an empty list.
-- this means we only need one base case, which can simply be f [] = []