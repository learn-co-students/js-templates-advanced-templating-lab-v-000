function init() {
  //put any page initialization/handlebars initialization here
  registerAddOns();
  initForm();
}

document.addEventListener("DOMContentLoaded", function(event) {
  init();
});

function initForm() {
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementById("main").innerHTML = template({submitForm: 'createRecipe()'});
}

function registerAddOns() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString("<li name='ingredientName'>" + ingredient + "</li>");
  });
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
}

function getRecipeValues() {
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
  return(recipe)
}

function createRecipe(){
  var recipe = getRecipeValues();

  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById('main').innerHTML = template(recipe);
}

function displayEditForm() {
  var name = document.getElementById("recipeName").innerHTML;
  var description = document.getElementById("recipeDescription").innerHTML;
  var ingredientList = document.getElementsByName("ingredientName");

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
  var recipe = getRecipeValues();

  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById('main').innerHTML = template(recipe);
}
