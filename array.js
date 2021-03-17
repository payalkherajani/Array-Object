const fruits = ['banana', 'orange', 'mango']

// ## ex04: add watermelon

// Write a function `addFruit()` which would take the fruits array and a fruitName. Return a new array with fruit added to it. 

// Check that the original fruits array is unchanged.

const addFruit = (fruitsArray, fruitName) => [...fruitsArray, fruitName]

// ## hw: add fruit at start

// Write a function `addFruitAtStart()` . This would take a fruit and add it at the beginning of the array.

const addFruitAtStart = (fruitsArray, fruitName) => [fruitName, ...fruitsArray]

// ## ex05: change orange to citrus

// Write a function `replaceFruit()` which takes the fruits array and a fruitName. Return a new array with that fruit replaced with the new fruitName.

const replaceFruit = (fruitsArray, fruitnameexits, fruitnamereplaced) => {
    return fruitsArray.map((f) => {
        if (f === fruitnameexits) {
            return fruitnamereplaced
        }
        return f
    })
}

// ## ex06: remove citrus

// Write a function `filterFruit()` which takes the fruits array and a fruitName. Return a new array with that fruit removed from the array.

const filterFruit = (fruitsArray, fruitName) => {
    return fruitsArray.filter((f) => f !== fruitName)
}

// ## ex07: change fruit by index

// Write a function `changeFruitByIndex()` which takes the fruits array, fruitName, and an index. At this index, the current fruit is replaced by the new fruitName.

const changeFruitByIndex = (fruitsArray, fruitName, index) => {
    return fruitsArray.map((f, i) => {
        if (i === index) {
            return fruitName
        }
        return f
    })
}

// ## ex08: insert item at an index

// You can use `slice()` and rest operator for this. Write a function `insertFruitAtIndex()` which takes the fruits array, fruitName, and an index. At this index, add the new fruitName and shift every other fruit by one.

const insertFruitAtIndex = (fruitsArray, fruitName, index) => [...fruitsArray.slice(0, index), fruitName, ...fruitsArray.slice(index + 1)]


const fruitBasket = [
    { id: 1, name: "mango", quantity: 5 },
    { id: 2, name: "apple", quantity: 4 },
    { id: 3, name: "banana", quantity: 12 },
    { id: 4, name: "strawberry", quantity: 4 }, // aah! ameeri!
]

// ## ex01: update quantity

// Write a function `updateBasketQuantity()` which takes the fruitBasket array, an id, and the inc/dec flag. Return a new basket with the updated quantity

const updateBasketQuantity = (fruitBasket, id, incorDec) => {
    return incorDec && fruitBasket.map((fb) => {
        if (fb.id === id) {
            return { ...fb, quantity: fb.quantity + 1 }
        }
        return fb
    })
}

// ## ex02: remove a fruit

// Write a function `removeFromBasket()` which takes the fruitBasket array, an id, and the inc/dec flag. Return a new basket with the updated basket.

const removeFromBasket = (fruitBasket, id, incorDec) => {
    return incorDec && fruitBasket.map((fb) => {
        if (fb.id === id) {
            return { ...fb, quantity: fb.quantity - 1 }
        }
        return fb
    })
}

// ## ex03: add a fruit

// Write a function `addToBasket()` which takes the fruitBasket array, and a fruit object with quantity. Return a new basket with that item added in the basket.

const addToBasket = (fruitBasket, fruitObject) => {
    return [...fruitBasket, fruitObject]
}