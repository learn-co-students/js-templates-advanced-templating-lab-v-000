function init() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitFn': 'createRecipe()'})
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  const ingredientValues = document.getElementsByName("ingredients")
  let ingredients = []
  for (let i = 0; i < ingredientValues.length; i++) {
    ingredients.push(ingredientValues[i]).value
  }

  const name = document.getElementById("name").value
  const description = document.getElementById("description").value
  let recipe = {name, description, ingredients}

  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  document.getElementById("main").innerHTML = recipeTemplate(recipe)
}

function updateRecipe() {
  createRecipe();
}

function displayEditForm() {
  let name = document.getElementById("recipeName").innerText
  let description = document.getElementById("recipeDescription").innerText
  let ingredientValues = document.getElementsByName("ingredientsList")
  let ingredients = []
  for(var i = 0; i < ingredientValues.length; i++) {
    ingredients.push(ingredientValues[i].innerText)
  }

  let recipe = {name, description, ingredients, submitFn: 'updateRecipe()'}
  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementById("main").innerHTML = template(recipe)
}
