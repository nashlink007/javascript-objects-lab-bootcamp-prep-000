function updateObjectWithKeyAndValue(object, key, value) {

}
function updateObjectWithKeyAndValue(obj, key, value) {

  return Object.assign({}, obj, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value

  return obj
}

function deleteFromObjectByKey(object, key) {
   var newObj = Object.assign({}, object)
   delete newObj[key]
   return newObj

}
<<<<<<< HEAD
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
=======
>>>>>>> 0afca241ffbd53e129cc25e807ee75ee2f74a046
