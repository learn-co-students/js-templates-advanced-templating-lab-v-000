// set up basic form
function initForm() {
  // 1. write query to store HTML element
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  // compile element via handlebars
  var template = Handlebars.compile(formTemplate)
  // set DOM node HTML equal to compiled template + any arguments that apply
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

// turns recipe object into HTMl and appends it to main
function createRecipe() {
  var recipe = fetchRecipe()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe() {
  var recipe = fetchRecipe()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function displayEditForm() {
  var name = document.getElementById("nameHeader").innerText
  var description = document.getElementById("recipeDescription").innerText
  var ingredientsNodes = document.getElementsByName("ingredientsList")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }

  var recipe = {name, description, ingredients, submitAction: 'updateRecipe()'}

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

// creates recipe object
function fetchRecipe() {
  // gather values from input form and store them
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  // iterate over ingredients array to get values
  var ingredientsNodes = document.getElementsByName("ingredients")
  var ingredients = []
  for(let ingredient of ingredientsNodes) {
    if(ingredient.value !== "") {
      ingredients.push(ingredient.value)
    }
  }
  // build recipe object with form values
  var recipe = {
    name: name,
    description: description,
    ingredients: ingredients
  }
  return(recipe)
}

function handlebarsSetup() {
  //register handlebar helper
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  // register partials
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}


function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup()
  initForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
