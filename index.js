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

}

function displayEditForm() {
  var recipe = document.getElementById("recipe-form-template").innerHTML
}

function updateRecipe() {

}
