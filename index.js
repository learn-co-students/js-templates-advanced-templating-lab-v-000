function handlebars() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="recipeIngredients" >'+ ingredient + "</li>" )
  });
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
}

function form() {
  var recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.querySelector("main").innerHTML = recipeFormTemplate({'action': 'createRecipe()'});
}

function createRecipe() {
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var ingredientList = document.getElementsByName("ingredients"); //Nodelist
  var ingredients = [];
  for(var i = ingredientList.length; i--;ingredients.unshift(ingredientList[i].value));

  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

  document.querySelector("main").innerHTML += recipeTemplate({name, description, ingredients});
}

function displayEditForm() {
  var editRecipeForm = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  var recipeName = document.getElementById("recipeName").innerHTML;
  var recipeDescription = document.getElementById("recipeDescription").innerHTML;
  var ingredientNodes = document.getElementsByName("recipeIngredients"); //Nodelist

  var ingredientCollection = [];
  for(var i = ingredientNodes.length; i--;ingredientCollection.unshift(ingredientNodes[i].innerHTML));

  document.querySelector("main").innerHTML += editRecipeForm({'name':recipeName, 'description':recipeDescription, 'ingredients':ingredientCollection, 'action': 'updateRecipe()'});
}

function updateRecipe() {
  var updatedName = document.getElementById("name").value;
  var updatedDescription = document.getElementById("description").value;
  var updatedList = document.getElementsByName("ingredients"); //Nodelist
  var updatedIngredients = [];
  for(var i = updatedList.length; i--;updatedIngredients.unshift(updatedList[i].value));

  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

  document.querySelector("main").innerHTML += recipeTemplate({'name': updatedName, 'description': updatedDescription, 'ingredients': updatedIngredients});
}


function init() {
  handlebars();
  form();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
