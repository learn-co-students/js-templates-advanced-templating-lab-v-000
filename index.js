function init() {
  recipeFormInit();
  registerPartial();
}

function recipeFormInit() {
  var recipeFormHTML = document.getElementById("recipe-form-template").innerHTML
  var recipeFormTemplate = Handlebars.compile(recipeFormHTML)
  document.getElementById('main').innerHTML = recipeFormTemplate(recipeFormHTML)
}

function registerPartial() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)
}

function getRecipeVals() {
  var ingredientsCol = document.getElementsByName('ingredients');
  var ingredients = [];
  for (var i=0; i<ingredientsCol.length;i++) {
    if (ingredientsCol[i].value !== "") {
      ingredients.push(ingredientsCol[i].value)
    }
  }
  var name = document.getElementById('name').value;
  var description = document.getElementById('description').value;
  var recipe = {name, ingredients, description};
  return recipe
}

function createRecipe() {
  var recipe = getRecipeVals()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById('main').innerHTML = template(recipe)
}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})





