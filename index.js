function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML)
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString(ingredient)
  })

  const template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  document.getElementsByTagName("main")[0].innerHTML = template({submit: 'createRecipe()'})
}

function displayEditForm() {
  const name = document.getElementById("name").innerText
  const description = document.getElementById("description").innerText
  const ingredientList = document.getElementsByName("ingredients")

  let ingredients = []

  for(let i=0; i< ingredientList.length; i++) {
    ingredients.push(ingredientList[i].value)
  }

  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)

  document.getElementById("main").ininnerHTML = template({name, description, ingredients, submit: 'updateRecipe()'})
}

function createRecipe() {
  const name = document.getElementById("name").value
  const description = document.getElementById("description").value
  const ingredientList = document.getElementsByName("ingredients")

  let ingredients = []

  for(let i=0; i<ingredientList.length;i++) {
    if(ingredientList[i].value !== "") {
      ingredients.push(ingredientList[i].value)
    }
  }

  const template = Handlebars.compile(document.getElementById("recipe-template").innerHTML)

  document.getElementById("main").innerHTML = template({name, ingredients, description})
}

function updateRecipe() {
  const name = document.getElementById("name").value
  const description = document.getElementById("description").value
  const ingredientList = document.getElementsByName("ingredients")

  let ingredients = []

  for(let i=0; i<ingredientList.length;i++) {
    if(ingredientList[i].value !== "") {
      ingredients.push(ingredientList[i].value)
    }
  }

  const template = Handlebars.compile(document.getElementById("recipe-template").innerHTML)

  document.getElementById("main").innerHTML = template({name, ingredients, description})
}




document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
