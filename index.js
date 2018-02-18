function init() {
  //put any page initialization/handlebars initialization here

  Handlebars.registerHelper('displayIngredient', function() {

  })

  Handlebars.registerPartial('recipeDetailsPartial', function() {

  })

  Handlebars.registerPartial('recipeFormPartial', function() {

  })

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

}

function displayEditForm() {
  var recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
}

function updateRecipe() {
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
}
