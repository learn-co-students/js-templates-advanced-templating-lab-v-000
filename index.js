function init() {
  //put any page initialization/handlebars initialization here

  //registers a displayIngredient helper
  Handlebars.registerHelper('displayIngredient', function() {

  })
  //registers a recipe details partial
  Handlebars.registerPartial('recipeDetailsPartial', function() {

  })
  //registers a recipe form partial
  Handlebars.registerPartial('recipeFormPartial', function() {

  })

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
//renders the edit form template
function displayEditForm() {
  var recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
}
//renders the recipe template
function createRecipe() {
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
}
//renders the recipe template
function updateRecipe() {
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
}
