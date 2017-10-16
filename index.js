function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML)

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="renderedIngredient" >' + ingredient + '</li>')
  })
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {

  var ingredientsInputs = document.querySelectorAll('input[name="ingredients"]')

  var ingredients = []

  for (var i=0; i<ingredientsInputs.length; ++i) {
    var ingredient = ingredientsInputs[i];
    if (ingredient.value) {
      ingredients.push(ingredient.value)
    }
  }
  var name = document.getElementById("name").value

  var description = document.getElementById("description").value

  var recipe = {name, ingredients, description}

  var recipeTemplate = Handlebars.compile(document.getElementById('recipe-template').innerHTML);

  document.getElementById('main').innerHTML = recipeTemplate(recipe)

}

function displayEditForm() {
  var name = document.getElementById('renderedName').innerHTML

  var description = document.getElementById('renderedDescription').innerHTML

  var ingredientsNodes = document.getElementsByName('renderedIngredient')

  var ingredients = []

  for (var i=0; i<ingredientsNodes.length; ++i) {
      ingredients.push(ingredientsNodes[i].innerText)
  }

  var recipe = {name, ingredients, description, submitAction: 'updateRecipe()'}

  var editFormTemplate = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);

  document.getElementById('main').innerHTML = editFormTemplate(recipe)
}

function updateRecipe() {
  var ingredientsInputs = document.querySelectorAll('input[name="ingredients"]')

  var ingredients = []

  for (var i=0; i<ingredientsInputs.length; ++i) {
    var ingredient = ingredientsInputs[i];
    if (ingredient.value) {
      ingredients.push(ingredient.value)
    }
  }
  var name = document.getElementById("name").value

  var description = document.getElementById("description").value

  var recipe = {name, ingredients, description}

  var recipeTemplate = Handlebars.compile(document.getElementById('recipe-template').innerHTML);

  document.getElementById('main').innerHTML = recipeTemplate(recipe)
}
