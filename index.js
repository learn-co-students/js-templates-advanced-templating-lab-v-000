function initializeForm() {
  const formTemplate = document.getElementById("recipe-form-template").innerHTML
  const template = Handlebars.compile(formTemplate)
  document.getElementById("main").innerHTML = template({'submitAction': 'createRecipe()'})
}

function createRecipe() {
  //load recipe template with submitted data and append to main
  let ingredients = []
  let ingredientNodes = document.getElementsByName('ingredients')
  for (let i = 0; i < ingredientNodes.length; i++) {
    if (ingredientNodes[i].value != "") {
      ingredients.push(ingredientNodes[i].value)
    }
  }

  let recipe = {
    name: document.getElementById('name').value,
    description: document.getElementById('description').value,
    ingredients: ingredients
  }

  const template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  const result = template(recipe);
  document.getElementById("main").innerHTML = result;
}

function displayEditForm() {
  let ingredients = []
  let ingredientNodes = document.getElementsByName('recipeIngredients')
  for (let i = 0; i < ingredientNodes.length; i++) {
    if (ingredientNodes[i].innerHTML != "") {
      ingredients.push(ingredientNodes[i].innerHTML)
    }
  }

  let recipe = {
    name: document.getElementById('recipeName').innerHTML,
    description: document.getElementById('recipeDescription').innerHTML,
    ingredients: ingredients,
    submitAction: 'updateRecipe()'
  }
  const formTemplate = document.getElementById("recipe-form-template").innerHTML
  const template = Handlebars.compile(formTemplate)
  document.getElementById("main").innerHTML = template(recipe)

}

function updateRecipe() {
  /*let ingredients = []
  let ingredientNodes = document.getElementsByName('ingredients')
  for (let i = 0; i < ingredientNodes.length; i++) {
    if (ingredientNodes[i].value != "") {
      ingredients.push(ingredientNodes[i].value)
    }
  }

  let recipe = {
    name: document.getElementById('name').value,
    description: document.getElementById('description').value,
    ingredients: ingredients
  }

  const template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  const result = template(recipe);
  document.getElementById("main").innerHTML = result;*/

  createRecipe();
}

function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString(ingredient)
  })

  initializeForm()
  //debugger;
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
