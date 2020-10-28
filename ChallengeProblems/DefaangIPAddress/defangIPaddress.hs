-- Type Signature for stringify visualization
-- stringify :: [Char] -> [[Char]]
-- the stringify fn we created will take a list and stringify each character.
stringify str = map(:[]) str 
-- Type Signature for defang visualization
-- defang :: [Char] -> [Char]
-- the defang fn we created will now take the stringified list of all characters
-- handle and lastly concat the string.
defang isp = concat(map(\s -> if s == "." then "[.]" else s) (stringify(isp)))

-- *Main> defang "ha.ku.na.ma.ta.taaaa"
-- will return -> "ha[.]ku[.]na[.]ma[.]ta[.]taaaa"