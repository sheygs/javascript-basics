const baseEndPoint = 'http://www.recipepuppy.com/api/';
// enable cors
const corsProxy = 'https://cors-anywhere.herokuapp.com/';
const form = document.querySelector('.search');
const recipesGrid = document.querySelector('.recipes');

function handleError({ message }){
 console.error(message);
}

async function getRecipe(query){
   const response = await fetch(`${corsProxy}${baseEndPoint}?q=${query}`);
   return await response.json(); 
}


async function handleSubmit(e){
 e.preventDefault();
 const form = e.currentTarget;
 getRecipeAndDisplay(form.query.value)
}


async function getRecipeAndDisplay(query){
 form.submit.disabled = true;
 const data = await getRecipe(query);
 const results = data.results;
 form.submit.disabled = false;
 displayRecipes(results);
}

async function displayRecipes(recipes){
  console.log(recipes)
  const html = recipes.map(recipe => {
    return `<div class="recipe">
      <h2>${recipe.title}</h2>
      <p>${recipe.ingredients}</p>
      <img src=${recipe.thumbnail ? recipe.thumbnail : null} alt=${recipe.title}/>
      <a href=${recipe.href} target="_blank">View Recipe -></a>
    </div>
    `
  }).join('');
  recipesGrid.innerHTML = html;
}

form.addEventListener('submit', handleSubmit)
// on page load
getRecipeAndDisplay('pizza').catch(handleError);

