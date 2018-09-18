function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-template").innerHTML)

  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML)

  Handlebars.registerHelper('displayIngredient', function() {

  })

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


function createRecipe() {
  Handlebars.compile(document.getElementById("recipe-template").innerHTML);
}

function displayEditForm() {
  Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
}

function updateRecipe() {
  Handlebars.compile(document.getElementById("recipe-template").innerHTML);
}
