// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {

  var multipleFive = 0;

  _.each(numbers, function(number) {
    if (number % 5 === 0) {
      multipleFive += 1;
    }
  })

  return multipleFive;

};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {

  var oneFruit = _.filter(fruits, function(fruit) {
    if (fruit === targetFruit) {
      return fruit;
    }
  })

  return oneFruit;

};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {

  //console.log(letter);
  var fruitsThatStartWith = _.filter(fruits, function(fruit, index) {
    //console.log(index);
    //console.log(fruit);
    /*if (fruit[0] === letter) {
      return index;
    }*/
    return fruit[0] === letter;
  })
  //console.log(fruitsThatStartWith);
  return fruitsThatStartWith;

};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {

  return _.filter(desserts, function(recipe) {
    return recipe['type'] === 'cookie';
  })

};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {

  return _.reduce(products, function(sum, product) {

    //console.log(price);
    var numPrice = Number(product.price.substring(1));
    return sum + numPrice;

  }, 0)

};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {

  return _.reduce(desserts, function(dessertType, recipe) {
    if (dessertType[recipe.type] === undefined) {
      dessertType[recipe.type] = 1;
      return dessertType;
    } else {
      dessertType[recipe.type] += 1;
      return dessertType;
    }
  }, {})

};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(array) {

  return _.reduce(array, function(arr, movie) {
    if (movie['releaseYear'] > 1990 && movie['releaseYear'] < 2000) {
      arr.push(movie['title'])
    }
    return arr;
  }, [])

}

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {

  return _.reduce(movies, function(counter, movie) {
    if (movie.runtime < timeLimit) {
      return true;
    }
    return counter;
  }, false)

};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {

  return _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  })

};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {



  return _.map(desserts, function(recipe) {
    if (recipe['ingredients'].includes('flour') === false) {
      recipe['glutenFree'] = true;
      return recipe;
    } else {
      recipe['glutenFree'] = false;
      return recipe;
    }
  })

};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {

  return _.map(groceries, function(item) {

    var numPrice = Number(item['price'].substring(1));
    var salePrice100 = (numPrice * 100) * (1 - coupon);
    var salePrice = salePrice100 / 100;
    salePrice = Number(salePrice.toPrecision(3));
    item['salePrice'] = '$' + salePrice;
    return item;

  })

};
