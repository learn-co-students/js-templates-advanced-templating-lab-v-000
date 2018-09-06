function createRecipe() {
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template"))
  var recipe = {
    name: document.getElementById("name").innerHTML
    ingredients: document.getElementById("description").innerHTML
    ingredients: document.getElementsByName("ingredients")[0].innerHTML
  }
  var result = recipeTemplate(recipe)
  document.getElementsByTagName("main")[0].innerHTML += result
}

function displayEditForm() {
  var form = document.getElementById("recipe-form-template").innerHTML
  document.getElementsByTagName("main")[0].innerHTML += form
}

function updateRecipe() {

}

function init() {
  //put any page initialization/handlebars initialization here
  //display ingredients helper
  Handlebars.registerHelper('displayIngredient', function (ingredient) {
    return Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form").innerHTML)
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
