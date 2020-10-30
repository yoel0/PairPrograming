// V1
const crypto = require('crypto');;

const hashThisSugar = val =>
  new Promise(resolve =>
    setTimeout(
      () => resolve(crypto.createHash('sha256').update(val).digest('hex')),
      0
    )
  );

hashThisSugar(JSON.stringify({a: 'a', b: [1, 9, 9, 1], name:{c:'yoel'}})).then(
  console.log
);

// V2

const hashThisSugar = async (val) =>
  crypto.createHash('sha256').update(val).digest('hex');

hashThisSugar('wasd').then(console.log);
