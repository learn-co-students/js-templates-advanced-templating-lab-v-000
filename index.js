function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


function createRecipe() {
  var ingredients = document.getElementsByName("ingredients")
  var ingredientsArray = []
  for(var i=0;i<ingredients.length;i++) {
    if(ingredients[i].value !== "") {
      ingredientsArray.push(ingredients[i].value)
    }
  }
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var recipe = {name, ingredientsArray, description}

  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function displayEditForm() {
  var name = document.getElementsByTagName("h2").innerText
  var description = document.getElementById("recipeDescription").innerText
  var ingredients = document.getElementsByName("ingredientsList")
  var ingredientsArray = []
  for(var i=0;i<ingredients.length;i++) {
    ingredieingredientsArray.push(ingredients[i].innerText)
  }

  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementsByTagName("main")[0].innerHTML = template(recipe)
}

function updateRecipe() {
  var ingredients = document.getElementsByName("ingredients")
  var ingredientsArray = []
  for(var i=0;i<ingredients.length;i++) {
    if(ingredients[i].value !== "") {
      ingredientsArray.push(ingredients[i].value)
    }
  }
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var recipe = {name, ingredientsArray, description}

  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}
