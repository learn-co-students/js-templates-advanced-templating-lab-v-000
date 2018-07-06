function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString(ingredient)
  })
  let template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  document.getElementsByTagName("main")[0].innerHTML = template({action: 'createRecipe()'})
}

function createRecipe() {
  let name = document.getElementById("name").value
  let description = document.getElementById("description").value
  let ingredientNames = document.getElementsByName("ingredients")

  let ingredients = []

  for (let i = 0; i < ingredientNames.size; i++) {
    if (ingredientNames[i].value !== "") {
      ingredients.push(ingredientNames[i].value)
    }
  }
  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  document.getElementById("main").innerHTML = template({name, description, ingredients})
}

function displayEditForm() {
  let name = document.getElementById("name").innerText
  let description = document.getElementById("description").innerText
  let ingredientNames = document.getElementsByName("ingredients")

  let ingredients = []

  for (let i = 0; i < ingredientNames.size; i++) {
    ingredients.push(ingredientNames[i].value)
  }

  let template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  document.getElementById("main").innerHTML = template({name, description, ingredients, action: 'updateRecipe()'})
}

function updateRecipe() {
  let name = document.getElementById("name").value
  let description = document.getElementById("description").value
  let ingredientNames = document.getElementsByName("ingredients")

  let ingredients = []

  for (let i = 0; i < ingredientNames.size; i++) {
    if (ingredientNames[i].value !== "") {
      ingredients.push(ingredientNames[i].value)
    }
  }
  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  document.getElementById("main").innerHTML = template({name, description, ingredients})
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
