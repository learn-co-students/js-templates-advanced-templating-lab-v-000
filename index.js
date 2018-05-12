function init() {
  recipeFormInit();
}

function recipeFormInit() {
  var recipeForm = document.getElementById('recipe-form-template').innerHTML
  var recipeFormTemplate = Handlebars.compile(recipeForm);

}

function createRecipe() {
  
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})





