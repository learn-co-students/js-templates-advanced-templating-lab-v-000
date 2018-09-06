function displayCreateForm() {
  var form = document.getElementById("recipe-form-partial").innerHTML
  document.getElementById("recipe-form").innerHTML += form
}

function createRecipe() {
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template"))
  var recipe = recipeValue()
  var result = recipeTemplate(recipe)
  document.getElementsByTagName("main")[0].innerHTML += result
}

function displayEditForm() {
  var form = document.getElementById("recipe-form-template").innerHTML
  document.getElementsByTagName("main")[0].innerHTML += form
}

function updateRecipe() {

}

function recipeValue () {
  var recipe = {
    name: document.getElementById("name").value
    description: document.getElementById("description").value
  }
  recipeArray = document.getElementsByName("ingredients")
}

function init() {
  //put any page initialization/handlebars initialization here
  //display ingredients helper
  Handlebars.registerHelper('displayIngredient', function (ingredient) {
    return Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}

document.addEventListener("DOMContentLoaded", function(event) {
  displayCreateForm()
  init()
})
