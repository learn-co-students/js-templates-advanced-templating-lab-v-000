function registerHandlebars() {
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  
  Handlebars.registerHelper( "displayIngredient", function (ingredient){
    return new Handlebars.SafeString('<li>' + ingredient + '</li>');
  })
}
function displayCreateForm() {
  const formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementById("main").innerHTML = formTemplate();
};

function getRecipe() {
  const name = document.getElementsByName('name')[0].value;
  const recipeDescription = document.getElementsByName('description')[0].value;
  const ingredientNodes = document.getElementsByName('ingredients');
  let ingredients = [];
  for (let i = 0; i < ingredientNodes.length; i++) {
    if (ingredientNodes[i].value !== "") {
      ingredients.push(ingredientNodes[i].value);
    }
  }
  let recipe = {name, recipeDescription, ingredients};
  return recipe;
}
function createRecipe() {
  let recipe = getRecipe();
  const recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innerHTML = recipeTemplate(recipe);
};

function updateRecipe(){
  return createRecipe();
}

function displayEditForm() {
  const name = document.getElementById('recipe-name').innerText;
  const description = document.getElementById('description').innerText;
  const ings = document.getElementById('ingredients').innerHTML;
  let ingredients = [];
  for (let i = 0; i < ings.length; i++) {
    if (ings[i].innerText !== "") {
      ingredients.push(ings[i].innerText);
    }
  }
  let recipe = {name, description, ingredients};
  const formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementById("main").innerHTML = formTemplate(recipe);
}

function init() {
  registerHandlebars();
  displayCreateForm();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})