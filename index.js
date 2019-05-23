function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup();
  initForm();
}

function initForm() {
  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  var result = Handlebars.compile(recipeFormTemplate);
  document.getElementsByTagName("main")[0].innerHTML = result({'submitAction': 'createRecipe()'})
}

function getRecipeValues() {
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var ingredientsNodes = document.getElementsByName("ingredients");
  var ingredients = [];
  for (var i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }
  var recipe = {name, description, ingredients};
  return(recipe)
}

function createRecipe() {
  var recipe = getRecipeValues();
  var recipeTemplate = document.getElementById("recipe-template").innerHTML;
  var template = Handlebars.compile(recipeTemplate);
  document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe() {
  var recipe = getRecipeValues();
  var recipeTemplate = document.getElementById("recipe-template").innerHTML;
  var template = Handlebars.compile(recipeTemplate);
  document.getElementById("main").innerHTML = template(recipe)
}

function displayEditForm() {
  var name = document.getElementById("nameHeader").innerText
  var description = document.getElementById("recipeDescription").innerText
  var ingredientsNodes = document.getElementsByName("ingredientsList")
  var ingredients = [];
  for (var i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }
  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'};

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  var template = Handlebars.compile(recipeFormTemplate);
  document.getElementById("main").innerHTML = template(recipe)
}

function handlebarsSetup() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>');
  });

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);

  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
