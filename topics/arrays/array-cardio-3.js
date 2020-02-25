/* Callback Methods & Function Generation */

const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];

const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
  gizzard: 3
};

const prices = {
  hotDog: 453,
  burger: 765,
  sausage: 634,
  corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedbacks = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];


    /* find the first rating that talks about a burger with find() */

    // Method (1)
    
    // regular function
    function findRating(feedback){
      return feedback.comment.includes('burg');
    }
    const rating = feedbacks.find(findRating);

    // Method (2)
    
    // named function expression
    const findRating1 = function(feedback){
      return feedback.comment.includes('burg');
    }
 
    const rating1 = feedbacks.find(findRating1);
     
    // Method (3)

    // arrow function
    const findRating2 = feedback => feedback.comment.includes('burg');
    const rating2 = feedbacks.find(findRating2);


    // Method (4)

    const util = {
      findRating3: function(feedback){
        return feedback.comment.includes('burg');
      }
    }
     
    // function findFirstRating(feedbacks){
    //   return feedbacks.find(utils.findRating3);
    // }

    const rating3 = feedbacks.find(util.findRating3);


    // Method (5) flexible
    
    function findByWord(word){
       return function (feedback){
         return feedback.comment.includes(word);
       }
    }

    // const findByWord = word => feedback => feedback.comment.includes(word);

     const findBurgRating =  feedbacks.find(findByWord('burg'));
     const findBurgerRating =  feedbacks.find(findByWord('burger'));
    

    /* find all ratings that are above 2 with filter() */

    // Method (1) flexible

    function findByMinRating(minRating) {
      return function (feedback) {
        return feedback.rating > minRating;
      }
    }

    const ratingAbove2 = feedbacks.filter(findByMinRating(2));
    const ratingAbove3 = feedbacks.filter(findByMinRating(3));

    // Method (2)

    const ratingEqualOrAbove2 = feedbacks.filter(feedback => feedback.rating >= 2);


    /* find all ratings that talk about a burger with filter() */
     
    const allBurgerRating = feedbacks.filter(findByWord('burg'));
    // console.table(allBurgerRating)


    /* Remove the one star rating however you like! */
    const removeLowestRating = feedbacks.filter(feedback => feedback.rating !== 1);

    /* check if there is at least 5 of one type of meat with some() */
    const atLeast5 = Object.values(meats).some(count => count >= 5);

    /* make sure we have at least 3 of every meat with every() */
    const atLeast3 = Object.values(meats).every(count => count >= 3);

    /* sort the toppings alphabetically with sort() */
    const sortedToppings = toppings.sort();

    /* sort the order totals from most expensive to least with .sort() */
    const sortedOrderTotals = orderTotals.sort((a,b) => b - a);

    /* Sort the prices with sort() */
    const sortedPrices = Object.entries(prices).sort((a,b) => {
       const [,price1] = a;
       const [,price2] = b;
       return price2 - price1;
    });

    // convert nested array back to object
    console.table(Object.fromEntries(sortedPrices));

