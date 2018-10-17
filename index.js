function handlebarsSetup() {
// helpers
Handlebars.registerHelper('displayIngredient', function(ingredient) {
  return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
})

// Partials
Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}
//
function renderForm(){
  let recipeForm = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML = recipeForm();
}
//
//
function getRecipeVals(){
  let name = document.getElementById('name').value
  let description = document.getElementById('description').value
  let ingredientNodes = document.getElementsByName('ingredients')
  let ingredients = []
  for(let i=0; i<ingredientNodes.length; i++){
    if (ingredientNodes[i].value !== ""){
      ingredients.push(ingredientNodes[i].value)
    }
  }
  let recipe = {name, description, ingredients}
  return recipe
}
//
function createRecipe(){
  let recipe = getRecipeVals()
  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

  document.getElementById('main').innerHTML = recipeTemplate(recipe)
}
//
function displayEditForm(){
  let name = document.getElementById("name-header").innerHTML
  let description = document.getElementById("display-description").innerHTML
  let ingredients

  let recipe = {name, description, ingredients, submitAction: 'createRecipe()'}
  let recipeForm = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementById("main").innerHTML = recipeForm(recipe)
}
//
function updateRecipe(){
    createRecipe()
}

// initialization
function init() {
  handlebarsSetup()
  renderForm()
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
