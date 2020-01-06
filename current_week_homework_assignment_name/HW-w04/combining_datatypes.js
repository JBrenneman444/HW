///////////////
// SECTION 2
///////////////

// Create an object, called crayonBox, that has a property that is an array. The array should
//  have the names of some crayons. Log one of the elements of that array.
let crayonBox = {
    crayons: ["periwinkle", "onyx", "heathergreen"]
}
console.log(crayonBox.crayons[1])

// Create an object bottle that has a property that is an object: cap.
//  cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. 
// Log one of the properties of that inner object.
let bottle = {
    cap: {
        material: ['metal','plastic'],
        capColor: ['blue', 'white']
    }
}
console.log(bottle.cap.material[1])

// Create an array called receipt that has at least one object in it.
//  The inner objects should be items that have a name and a price.
//  Log one of the properties of that inner object.
let receipt = [{
        name: ['metal','plastic'],
        cost: ['blue', 'white']
    }]
console.log(receipt[0].cost[0])

// Create an array called apartmentBuilding that has an array as one of its elements,
//  the inner array should be the names of the tenants. Log one of the elements of the inner array.
let apartmentBuilding = [
    ["Jacob Brenneman", "Jane Doe", "John Smith"],
    "blue",
    "white"
]
console.log(apartmentBuilding[0][2])
