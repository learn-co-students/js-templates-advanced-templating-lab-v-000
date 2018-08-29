function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup()
  initForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function handlebarsSetup() {
  //put any handlebars registrations here.
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}

function initForm() {
  const formTemplate = document.getElementById("recipe-form-template").innerHTML
  const template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

function createRecipe() {
  const recipe = getRecipeVals()
  const recipeTemplate = document.getElementById("recipe-template").innerHTML
  const template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe() {
  const recipe = getRecipeVals()
  const recipeTemplate = document.getElementById("recipe-template").innerHTML
  const template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function displayEditForm() {
  const name = document.getElementById("nameHeader").innerText
  const description = document.getElementById("recipeDescription").innerText
  const ingredientsNodes = document.getElementsByName("ingredientsList")
  const ingredients = []
  for(let i=0;i<ingredientsNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }

  const recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

  const recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  const template = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function getRecipeVals() {
  const ingredientsNodes = document.getElementsByName("ingredients")
  const ingredients = []
  for(let i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }
  const name = document.getElementById("name").value
  const description = document.getElementById("description").value
  const recipe = {name, ingredients, description}
  return(recipe)
}
