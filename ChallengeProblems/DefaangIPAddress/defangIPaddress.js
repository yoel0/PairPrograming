// Solution V1
// Here we split on the .
// And then join the "[.]"
const dissect = address => {
  return address.split('.').join('[.]');
  };

// Solution V2
// Here we are using Regex (regular expression)
// We start the expression with '/'
// indicating the start of our Regex
// Then we use '\.' this is a Escape sequence 
// it can be used to insert reserved, special, and unicode characters. 
// All escaped characters begin with the \ character.
// We are targeting the '.' => '\.'
// Lastly we flag '/g' the end of the expression with 'g'
// Applying it globally.
// "[.]" indicates that we will replace all . with the literal string [.]


const dissect = address => {
  return address.replace(/\./g,"[.]");
};

console.log(dissect('255.100.50.0'))
