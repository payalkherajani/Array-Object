const movie = {
    name: "Man of Steel",
    rating: 7,
    release: 2013,
}

// ## ex01: update rating

// Write a function `updateRating()` which would take a movie object, inc or dec and return a new object with rating updated.

const updateRating = (movieObject, incOrDec) => {
    if (incOrDec) {
        return { ...movieObject, rating: movieObject.rating + 1 }
    }
    return { ...movieObject, rating: movieObject.rating - 1 }
}

// ## ex02: add a field sequel

// Write a function `addSequel()` which would take the movie object, and return a new object with sequel is true.

const addSequel = (movieObject) => ({ ...movieObject, sequel: true });

const movie = {
    name: "Man of Steel",
    rating: 7,
    release: 2013,
    lead: {
        name: "Henry Cavill",
        age: 36,
    },
    director: {
        name: "Zack Snyder",
        otherMovies: ["300", "Batman v Superman"]
    }

}

// ## ex03: update lead's age

// Write a function `updateAge()` which would take the movie object, and increment lead's age and return a new object.

// Check that the original movie object still has the old age.

const updateAge = (movieObject) =>
    ({ ...movieObject, lead: { ...movieObject.lead, age: movieObject.lead.age + 1 } })

// Write a function updateDirectorMovies() . It will take the movie object, and newMovieName. Add that newMovie to the otherMovies and return a new  movie object.


const updateDirectorMovies = (movieObject, newMovieName) => {
    return { ...movieObject, director: { ...movieObject.director, otherMovies: [...movieObject.director.otherMovies, newMovieName] } }
}