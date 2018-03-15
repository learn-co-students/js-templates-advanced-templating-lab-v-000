function init() {
  createPage()
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)
  Handlebars.registerHelper('displayIngredient', function () {
  //debugger;
  return new Handlebars.SafeString("<li>" + this + "</li>")
  })
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-forms-partial').innerHTML)

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createPage() {
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var result = template()
  document.getElementsByTagName("main")[0].innerHTML = result
}

function createRecipe() {

  var recipe = {
    name: document.getElementById('name').value,
    description: document.getElementById('description'),
    ingredients: []
  }
  var ingredients = document.getElementsByName("ingredients")
  for (var i=0; i < ingredients.length; i++) {
    recipe.ingredients.push(ingredients[i].value)
  }
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var result = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML = result;
}
function displayEditForm() {
  var recipe = {
    name: document.querySelector('.recipeName').innerHTML,
    description: document.getElementById('description').innerHTML,
    ingredients: []
  }
  var ingredients = document.getElementsByTagName("li")
  for (var i=0; i < ingredients.length; i++) {
    recipe.ingredients.push(ingredients[i].innerHTML)
  }
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var result = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML = result
}
function updateRecipe() {
  var recipe = {
    name: document.getElementById('name').value,
    description: document.getElementById('description').value,
    ingredients: []
  }
  var ingredients = document.getElementsByName("ingredients")
  for (var i=0; i < ingredients.length; i++) {
    recipe.ingredients.push(ingredients[i].value)
  }
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var result = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML = result;
}
