const keyNameChange = (treasureMap, obj) =>
  Object.keys(obj).reduce((acc, key) => ({
    ...acc,
    ...{ [treasureMap[key] || key]: obj[key] }
  }),{}
  );

  const obj = { name: 'Rupert', job: 'Whiskey'}
  console.log(keyNameChange({ name: 'firstName', job: 'prefDrink'}, obj));
// changed to => { firstName: 'Rupert', prefDrink: 'Whiskey' }
// from => { name: 'Rupert', job: 'Whiskey'}

// Steven Miyakawa's approach.
// reduce may not always be the answer.
const keyNameChange = (treasureMap, obj) => {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    result[treasureMap[key] || key] = value;
  }

  return result;
};