function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper("displayIngredient", function(ingredient) {
    return new Handlebars.SafeString("<li name='ingredientsList'>" + ingredient + "</li>");
  });

  Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial("recipeFormPartial", document.getElementById("recipe-form-partial").innerHTML);

  var formTemplate = document.getElementById("recipe-form-template").innerHTML;
  var template = Handlebars.compile(formTemplate);
  document.getElementsByTagName("main")[0].innerHTML = template({'submitFn': 'createRecipe()'})
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe () {
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var ingredientValues = document.getElementsByName("ingredients");
  var ingredients = [];
  for (var i = 0; i < ingredientValues.length; i++) {
    ingredients.push(ingredientValues[i].value);
  }
  var recipe = {name, description, ingredients};

  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var result = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += result;
}

function displayEditForm () {
  var name = document.getElementById("name").innerText;
  var description = document.getElementById("description").innerText;
  var ingredientValues = document.getElementsByName("ingredientsList");
  var ingredients = [];
  for (var i = 0; i < ingredientValues.length; i++) {
    ingredients.push(ingredientValues[i].innerText);
  }
  var recipe = {name, description, ingredients, submitFn: 'updateRecipe()'};
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var result = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += result;
}

function updateRecipe () {
  createRecipe();
}
