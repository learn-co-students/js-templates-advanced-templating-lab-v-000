function init() {
  //put any page initialization/handlebars initialization here
 var recipeForm = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
 document.getElementsByTagName('main')[0].innerHTML = recipeForm()
 createRecipe()
 displayEditForm()
 updateRecipe()
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  var name = document.getElementById('recipeName').value
  var description = document.getElementById('recipeDescription').value
  var ingredients = document.getElementsByName('recipeIngredients')

  let allIngredients = []

  for(let i = 0; i < ingredients.length; i++) {
    allIngredients.push(ingredients[i].value)
  }

  var recipe = {
    name: name,
    description: description,
    ingredients: allIngredients
  }
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  //document.getElementsByTagName('main')[0].innerHTML = recipeForm()
  var html = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += html;
}

function displayEditForm() {
  var recipeForm = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName('main')[0].innerHTML = recipeForm()

}

function updateRecipe() {

}
