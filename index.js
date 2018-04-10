function displayEditForm() {
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var html = template();
}

function createRecipe() {
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var html = template();
}

function updateRecipe() {
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var html = template();
}

function init() {
  //put any page initialization/handlebars initialization here

  Handlebars.registerHelper('displayIngredient', function() {
    return Handlebars.SafeString(this.ingredients)
  })

  let recipeDetailsPartial = Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  let recipeFormPartial = Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML)
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
