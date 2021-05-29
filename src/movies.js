// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
    let newDirectorList = arr.map(element => element.director)
    return newDirectorList
};

console.log(getAllDirectors(movies))

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
    let spielbergFilms = arr.filter(element => element.director==="Steven Spielberg" && element.genre.includes("Drama"))
    return spielbergFilms.length
};
console.log(howManyMovies(movies))


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    if(arr.length === 0) return 0
    const total = arr.reduce((accumulator, currentValue) => {
        if(!currentValue.rate) currentValue.rate = 0
        return accumulator + currentValue.rate;
      }, 0);

      let average = total / arr.length
      console.log("average",average)
      return parseFloat(average.toFixed(2))
};


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    let totalDramas = arr.filter(element => element.genre.includes("Drama"))
    // if(!element.genre.includes("Drama")) totalDramas = 0
    return ratesAverage(totalDramas)

    /*let averageDramas = totalDramas / totalDramas.length
    return averageDramas*/
};
//console.log(dramaMoviesRate(movies))

   

    //console.log(averageDramas())


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
