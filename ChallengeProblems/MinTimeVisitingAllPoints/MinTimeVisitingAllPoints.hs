-- The Formula we (Yoel, Peter) made to act as a helper function.
dstnc crdA crdB =  max(abs(head crdB - head crdA)) (abs(last crdB - last crdA))
-- The Driver function we created 'clairvoyance' - we will summon the helper function on.
clairvoyance [] = [[0]]
clairvoyance [x] = [[0]]
clairvoyance (x:y:ls) = [(dstnc x y)] : clairvoyance (y:ls)