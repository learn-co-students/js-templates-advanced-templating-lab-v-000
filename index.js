function init() {
  //put any page initialization/handlebars initialization here
  var recipeFormTemplate = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML)
  var recipeForm = recipeFormTemplate()
  document.getElementsByTagName('main')[0].innerHTML += recipeForm

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString(`<li name="ingredients">${ingredient}</li>`)
  })
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function handleSubmit() {
  var name = document.getElementById('recipe-form').elements.namedItem("name").value
  var description = document.getElementById('recipe-form').elements.namedItem("description").value
  var ingredientList = Array.from(document.getElementsByName("ingredients")).map(function(ingredient) {
    return ingredient.value
  })
  var filteredIngredientList = ingredientList.filter(Boolean)
// debugger;
  var recipeTemplate = Handlebars.compile(document.getElementById('recipe-template').innerHTML)
  var recipe = recipeTemplate({name: name, description: description, ingredients: filteredIngredientList})
  // debugger;
  document.getElementsByTagName('main')[0].innerHTML = recipe
}

function displayEditForm() {
  var name = document.getElementById('recipeName').innerHTML.trim()
  var description = document.getElementById('recipeDescription').innerHTML.trim()
  debugger;
  var ingredients = Array.from(document.getElementsByTagName('li')).map(function(ingredient) {
    return ingredient.innerHTML
  })

  var recipeFormTemplate = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML)
  var recipeForm = recipeFormTemplate({name: name, description: description, ingredients: ingredients})
  document.getElementsByTagName('main')[0].innerHTML = recipeForm
}
