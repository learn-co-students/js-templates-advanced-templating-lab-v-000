function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient', function() {
    return this.value;
  })

  createRecipeForm();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  var recipe = {
    name: document.getElementById('name').value,
    description: document.getElementById('description').value,
    ingredients: document.getElementsByName('ingredients')
  }
  var template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  var result = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += result;
}

function createRecipeForm() {
  var template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  var result = template();
  document.getElementsByTagName("main")[0].innerHTML += result;
}

function displayEditForm() {
  var template = Handlebars.compile(document.getElementById('edit-form-template').innerHTML);
  var result = template();
  document.getElementsByTagName("main")[0].innerHTML += result;
}

function updateRecipe() {
  var recipe = {
    name: document.getElementById('name').value,
    description: document.getElementById('description').value,
    ingredients: document.getElementsByName('ingredients')
  }
  var template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  var result = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += result;
}
