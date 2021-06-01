// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors (arr) {
const result =  arr.map (function (obj) {
    return obj.director;
}) 
return result
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (arr) {
const spielbergArr = arr.filter(
    (obj) => obj.director === 'Steven Spielberg' && obj.genre.includes ('Drama')
);
return spielbergArr.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (arr) {
let sumOfAllRates = arr.reduce ( function (acc, currentValue) {
    return acc + currentValue.rate
},0 );

let roundedAvg = Math.round((sumOfAllRates/ arr.length) * 100) / 100;
return roundedAvg
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (arr) {
const dramaArray = arr.filter((obj) => obj.genre.includes ('Drama')); 
return ratesAverage (dramaArray);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order) 


function orderByYear(arr) {
    let sortedArr = [...arr];
   
    sortedArr.sort((a,b)=>{
    if (a.title<b.title) return -1;
    if (a.title>b.title) return 1;
    });
  
    sortedArr.sort((a,b)=>a.year-b.year);
    return sortedArr;
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles




// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
