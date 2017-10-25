function updateCreateRecipe() {
  const name = document.getElementById("name").value
  const description = document.getElementById("description").value
  const allIngredients = document.getElementsByName("ingredients")
  const ingredients = []
  for(let i = 0; i < allIngredients.length; i++) {
    if(allIngredients[i].value !== "") {
      ingredients.push(allIngredients[i].value)
    }
  }
  const recipeTemplate = document.getElementById("recipe-template").innerHTML
  const compiledTemplate = Handlebars.compile(recipeTemplate)
  return document.getElementById("main").innerHTML = compiledTemplate({ 'name': name, 'description': description, 'ingredients': ingredients })
}

function createRecipe() {
  updateCreateRecipe()
}

function updateRecipe() {
  updateCreateRecipe()
}

function displayEditForm() {
  const name = document.getElementById("recipe-name").innerText
  const description = document.getElementById("recipe-description").innerText
  const allIngredients = document.getElementsByName("recipe-ingredients")
  const ingredients = []
  for(let i=0; i<allIngredients.length; i++) {
    ingredients.push(allIngredients[i].innerText)
  }

  var recipeEditTemplate = document.getElementById("recipe-form-template").innerHTML
  var compiledTemplate = Handlebars.compile(recipeEditTemplate)
  document.getElementById("main").innerHTML = compiledTemplate({ 'name': name, 'description': description, 'ingredients': ingredients, 'submitAction': 'updateRecipe()' })
}

// initialize create form and partials/helpers
function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString("<li name='recipe-ingredients'>" + ingredient + "</li>")
  })
  const formTemplate = document.getElementById("recipe-form-template").innerHTML
  const compiledTemplate = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = compiledTemplate({'submitAction': 'createRecipe()'})
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
