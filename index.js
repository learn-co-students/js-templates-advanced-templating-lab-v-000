function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString("<p>" + this + "</p>")
  })


  let recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)

  document.getElementsByTagName("main")[0].innerHTML = recipeFormTemplate({'submitAction': 'createRecipe()'})
  //
}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  let name = document.getElementById("name").value
  let description = document.getElementById("description").value

  let ingredientNodes = document.getElementsByName("ingredients")

  let ingredients = []
  for(let i=0; i < ingredientNodes.length; i++) {
    ingredients.push(ingredientNodes[i].value)
    }
  let recipe = {name, description, ingredients}

  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML)

  document.getElementById("main").innerHTML = recipeTemplate(recipe)
  }

function displayEditForm() {
  let recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  let template = Handlebars.compile(recipeFormTemplate)

  document.getElementById("main").innerHTML += template({'submitAction': 'createRecipe()'})
}

function updateRecipe() {
  createRecipe()
}
