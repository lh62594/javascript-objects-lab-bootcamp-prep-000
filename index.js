var recipes = {
  eggs: 2,
  milk: "1/2 cup",
  flour: "2 cups"
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value})  
}
