function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML)
  Handlebars.registerHelper('displayIngredient', function(name) {
    return new Handlebars.SafeString("<li name = ingredientlist>" + name + "</li>")
  });
  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'});
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


function createRecipe() {
  let name= document.getElementById('name')
  let description = document.getElementById('description')
  let ingredients = document.getElementsByName('ingredients')

  let recipe = {name: name, description: description, ingredients: ingredients}

  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  let result = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += result;
}

function displayEditForm() {
  let name= document.getElementById('name')
  let description = document.getElementById('description')
  let ingredients = document.getElementsByName('ingredients')

  let recipe = {name: name, description: description, ingredients: ingredients}

  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  let result = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += result;
}

function updateRecipe() {
  createRecipe()
}
