function init(){
  Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial("recipeFormPartial", document.getElementById("recipe-form-partial").innerHTML)
  Handlebars.registerHelper("displayIngredient", function(ingredient){
    return new Handlebars.safeString("<li name='ingredientsList'>" + ingredient + "</li>")
  })

  let form = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML)

  document.getElementsByTagName('main')[0].innerHTML = form({'submitAction': 'createRecipe()'})
}

document.addEventListener("DOMContentLoaded", function(event){
  init()
})

function createRecipe(){
  let name = document.getElementById('name').value
  let description = document.getElementById('description').value
  let ingredientNodes = document.getElementsByName('ingredients')
  let ingredients = []

  for (let i = 0; i < ingredientNodes.length; i++){
    if (ingredientNodes[i].value !== ""){
      ingredients.push(ingredientNodes[i].value)
    }
  }

  let recipe = {
    'name': name,
    'description': description,
    'ingredients': ingredients
  }

  let template = Handlebars.compile(document.getElementById('recipe-template').innerHTML)

  document.getElementById('main').innerHTML = template(recipe)
}

function displayEditForm(){
  let name = document.getElementById("nameHeader").innerText
  let description = document.getElementById("recipeDescription").innerText
  let ingredientsList = document.getElementsByName("ingredientsList")
  let ingredients = []

  for (let i = 0; i < ingredientsList.length; i++){
    ingredients.push(ingredientsList[i].innerText)
  }

  let recipe = {
    'name': name,
    'description': description,
    'ingredients': ingredients,
    'submitAction': 'updateRecipe()'
  }

  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe(){
  let name = document.getElementById('name').value
  let description = document.getElementById('description').value
  let ingredientNodes = document.getElementsByName('ingredients')
  let ingredients = []

  for (let i = 0; i < ingredientNodes.length; i++){
    if (ingredientNodes[i].value !== ""){
      ingredients.push(ingredientNodes[i].value)
    }
  }

  let recipe = {
    'name': name,
    'description': description,
    'ingredients': ingredients
  }

  let template = Handlebars.compile(document.getElementById('recipe-template').innerHTML)
  document.getElementById("main").innerHTML = template(recipe)
}
