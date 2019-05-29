function init() {
  registerHandlebars();
  form();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init();
});

function form() {
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementById("main").innerHTML = template({submitForm: 'createRecipe()'});
}

function registerHandlebars() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString("<li name='ingredient'>" + ingredient + "</li>");
  });
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
}

function createRecipe(){
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var ingredientList = document.getElementsByName("ingredients");

  var ingredients = [];
  for (var i = 0; i < ingredientList.length; i++) {
    if (ingredientList[i] !== "") {
      ingredients.push(ingredientList[i].value);
    }
  }
  var recipe = {name, description, ingredients};
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById('main').innerHTML = template(recipe);
}

function displayEditForm() {
  var name = document.getElementById("name").innerHTML;
  var description = document.getElementById("description").innerHTML;
  var ingredientList = document.getElementsByName("ingredients");

  var ingredients = [];
  for (var i = 0; i < ingredientList.length; i++) {
    if (ingredientList[i] !== "") {
      ingredients.push(ingredientList[i].value);
    }
  }

  var recipe = {name, description, ingredients, submitForm: 'updateRecipe()'};
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementById('main').innerHTML = template(recipe);
}

function updateRecipe() {
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var ingredientList = document.getElementsByName("ingredients");

  var ingredients = [];
  for (var i = 0; i < ingredientList.length; i++) {
    if (ingredientList[i] !== "") {
      ingredients.push(ingredientList[i].value);
    }
  }

  var recipe = {name, description, ingredients};
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById('main').innerHTML = template(recipe);
}
