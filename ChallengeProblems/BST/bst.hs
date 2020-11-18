data Tree a = Nil | Node (Tree a) a (Tree a) deriving (Show, Eq, Ord)

goal = [5,3,7,1,3,6,7]

nsrt Nil new = Node Nil new Nil
nsrt (Node l v r) new
  | (new < v) = Node (nsrt l new) v r
  | (new > v) = Node l v (nsrt r new)
  | (new == v) = Node l v r

test = foldl nsrt Nil goal
-- Node (Node (Node Nil 1 Nil) 3 Nil) 5 (Node (Node Nil 6 Nil) 7 Nil)

testb = foldr (flip nsrt) Nil goal
-- Node (Node (Node (Node Nil 1 Nil) 3 (Node Nil 5 Nil)) 6 Nil) 7 Nil