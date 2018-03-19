function init() {

  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  Handlebars.registerHelper('displayEditIngredient', function(ingredient) {
    return new Handlebars.SafeString('<p><label>Ingredient</label><br><input name="editedIngredrients" value="' + ingredient + '"></p>')
  })
}

function createRecipe() {

  let name = document.getElementById('name').value
  let description = document.getElementById("description").value
  let ingredientsNodes = document.getElementsByName('ingredients')

  let ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }

  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

  // console.log('ingredients', ingredients)
  document.getElementById("main").innerHTML += recipeTemplate({name: name, description: description, ingredients: ingredients})
}

function displayEditForm() {
  let name = document.getElementById('recipe-name').innerText
  let description = document.getElementById('recipe-description').innerText
  let ingredientsList = document.getElementsByName('ingredientsList')

  let ingredients = []
  for(var i=0;i<ingredientsList.length;i++) {
    if(ingredientsList[i].innerText !== "") {
      ingredients.push(ingredientsList[i].innerText)
    }
  }

  let formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  document.getElementById("recipe").innerHTML += formTemplate({name: name, description: description, ingredients: ingredients})
}


function updateRecipe() {
  let name = document.getElementById('editedName').value
  let description = document.getElementById("editedDescription").value
  let ingredientsList = document.getElementsByName('editedIngredrients')

  let ingredients = []
  for(var i=0;i<ingredientsList.length;i++) {
    if(ingredientsList[i].value !== "") {
      ingredients.push(ingredientsList[i].value)
    }
  }

  document.getElementById('recipe').remove()
  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

  document.getElementById("main").innerHTML += recipeTemplate({name: name, description: description, ingredients: ingredients})

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
