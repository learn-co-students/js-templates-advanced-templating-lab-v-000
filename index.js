function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);

  Handlebars.registerHelper('displayIngredient', function(ingredient){
    return new Handlebars.SafeString('<li name="ingredientLi">' + this.name + '</li>');
  })

  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);

  initializeForm();
}

function initializeForm() {
  const template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)

  document.getElementById("main").innerHTML = template()
  // {'submitAction': 'createRecipe()'}
}

function createRecipe() {
  const recipeTemplate = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  const recipe = getRecipe();

  document.getElementById("main").innerHTML = recipeTemplate(recipe);
}

function getRecipe() {
  const ingredientsElements = document.getElementsByName("ingredients");
  const ingredients = [];

  for(let i = 0; i<ingredientsElements.length; i++) {
    if(ingredientsElements[i].value.length !== 0) {
      ingredients.push(ingredientsElements[i].value)
    }
  }

  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const recipe = { name, ingredients, description };
  return recipe;
}

function displayEditForm() {
  const name = document.getElementById("recipeName").innerText
  const description = document.getElementById("recipeDescription").innerText
  const ingredientsElements = document.getElementsByName("ingredientLi")

  let ingredients = []

  for(let i = 0 ;i < ingredientsElements.length; i++) {
    ingredients.push(ingredientsElements[i].innerText)
  }
  
  const recipe = { name, description, ingredients, submitAction: 'createRecipe()' }
  
  const template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe() {
  const recipeTemplate = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  const recipe = getRecipe();

  document.getElementById("main").innerHTML = recipeTemplate(recipe);
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
