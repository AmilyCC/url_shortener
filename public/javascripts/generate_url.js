function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateUrl() {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'

  // create a collection to store things user picked up
  let collection = []
    collection = collection.concat(lowerCaseLetters.split(''))
    collection = collection.concat(upperCaseLetters.split(''))
    collection = collection.concat(numbers.split(''))

  // start generating password
  let newUrl = ''
  for (let i = 0; i < 5; i++) {
    newUrl += sample(collection)
  }
  // return the generated password
  return newUrl
}

module.exports = generateUrl