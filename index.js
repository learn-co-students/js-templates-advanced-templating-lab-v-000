function renderRecipeForm() {
  let template = Handlebars.compile(document.getElementById('recipe-form').innerHTML);
  document.getElementById('main').innerHTML = template({ 'submitMethod': 'createRecipe()' });
}

function createRecipe() {
  const recipe = {
    name: document.getElementById('name').value,
    description: document.getElementById('description').value,
    ingredients: collectNewIngredients()
  }
  let template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  let recipeHTML = template(recipe);
  document.getElementById('main').innerHTML = recipeHTML;
}

function collectNewIngredients(ingreds) {
  let ingredients = [];
  let ingredientNodes = document.getElementsByName('ingredients');
  for (let i = 0; i < ingredientNodes.length; i++) {
    ingredients.push(ingredientNodes[i].value);
  }
  return ingredients.filter(ingredient => ingredient !== "");
}

function displayEditForm() {
  const recipe = {
    name: document.getElementById('recipeName').innerHTML,
    description: document.getElementById('recipeDescription').innerHTML,
    ingredients: collectExistingIngredients()
  }

  let template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  let formHTML = template({
    'submitMethod': 'updateRecipe()',
    name: recipe.name,
    description: recipe.description,
    ingredients: recipe.ingredients
  });
  document.getElementById('main').innerHTML = formHTML;
}

function collectExistingIngredients(ingreds) {
  let ingredients = [];
  let existingIngredients = document.querySelectorAll('main ul li');
  for (let i = 0; i < existingIngredients.length; i++) {
    ingredients.push(existingIngredients[i].innerHTML);
  }
  return ingredients;
}

function updateRecipe() {
  createRecipe();
}

function init() {
  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString(this)
  })

  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-template').innerHTML);
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);

  renderRecipeForm();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
