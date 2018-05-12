function init() {
  recipeFormInit();
}

function recipeFormInit() {
  var recipeForm = document.getElementById('recipe-form-template').innerHTML
  var recipeFormTemplate = Handlebars.compile(recipeForm);

}

function createRecipe() {
  var recipe = getRecipeVals()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById('main').innerHTML = template(recipe)
}

function getRecipeVals() {

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})





