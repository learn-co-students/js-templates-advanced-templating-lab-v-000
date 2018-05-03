function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("recipe-details-partial").innerHTML);

  Handlebars.registerPartial("recipeFormPartial", document.getElementById("recipe-form-partial").innerHTML);

  Handlebars.registerHelper("displayIngredient", function(ingredient) {
    if(ingredient) {
      return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
    }
  })
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function getRecipeVals() {
  const name = document.getElementById("name").value
  const description = document.getElementById("description").value
  const ingredientsNodes = document.getElementsByName("ingredients")
  const ingredients = []
  for (let i=0; i < ingredientsNodes.length; i++) {
    if (ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }
  const recipe = {name, description, ingredients}

  return recipe
}

function createRecipe() {
  const recipe = getRecipeVals()
  const template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  const result = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += result;
}

function displayEditForm() {
  const name = document.getElementById("recipeName").innerHTML
  const description = document.getElementById("recipeDescription").innerHTML
  const ingredientsNodes = document.getElementsByName("ingredientsList")
  const ingredients = []
  for (let i=0; i < ingredientsNodes.length; i++) {
    if (ingredientsNodes[i].innerHTML !== "") {
      ingredients.push(ingredientsNodes[i].innerHTML)
    }
  }

  const recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

  const recipeTemplate = document.getElementById("recipe-form-template").innerHTML
  const template = Handlebars.compile(recipeTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template(recipe);
}

function updateRecipe() {
  const recipe = getRecipeVals()
  const template = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  document.getElementsByTagName("main").innerHTML = template(recipe)
}
