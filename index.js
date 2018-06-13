function createMain() {
  let formTemplate = document.getElementById("recipe-form-template").innerHTML
  let template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template()
}

function createRecipe() {
  let recipe = recipeValues()
  let recipeTemplate = document.getElementById("recipe-template").innerHTML
  let template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe() {
  let recipe = recipeValues()
  let recipeTemplate = document.getElementById("recipe-template").innerHTML
  let template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function displayEditForm() {
  let name = document.getElementById("nameHeader").innerText
  let description = document.getElementById("recipeDescription").innerText
  let listOfIngredients = document.getElementsByName("ingredientsList")
  let ingredients = []
  for (let i = 0; i < listOfIngredients.length; i++) {
    ingredients.push(listOfIngredients[i].innerText)
  }

  let recipe = {
    name,
    description,
    ingredients,
    submitAction: 'createRecipe()'
  }

  let recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  let template = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function recipeValues() {
  let name = document.getElementById("name").value
  let description = document.getElementById("description").value
  let listOfIngredients = document.getElementsByName("ingredients")
  let ingredients = []

  for (let i = 0; i < listOfIngredients.length; i++) {
    if (listOfIngredients[i].value !== "") {
      ingredients.push(listOfIngredients[i].value)
    }
  }

  let recipe = {
    name,
    ingredients,
    description
  }
  return (recipe)
}


function init() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString(ingredient);
  });
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
  createMain();
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
