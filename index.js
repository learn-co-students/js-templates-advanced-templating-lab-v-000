function initForm() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML;
  var template = Handlebars.compile(formTemplate);
  document.getElementById("main").innerHTML = template({'action': 'createRecipe()'});
}


function createRecipe() {
var recipe = getRecipeValues();
var recipeTemplate = document.getElementById("recipe-template").innerHTML;
var template = Handlebars.compile(recipeTemplate);
document.getElementById("main").innerHTML = template(recipe);
}

function updateRecipe() {
  var recipe = getRecipeValues();
  var recipeTemplate = document.getElementById("recipe-template").innerHTML;
  var template = Handlebars.compile(recipeTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}

function displayEditForm() {
var name = document.getElementById("recipeName").innerText;
var description = document.getElementById("recipeDescription").innerText;
var ingredientsNodes = document.getElementsByName("ingredientsList");
var ingredients = [];
for(var i=0; i<ingredientsNodes.length; i++) {
  ingredients.push(ingredientsNodes[i].innerText);
}
var recipe = {name, description, ingredients, action: 'createRecipe()'};

var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
var template = Handlebars.compile(recipeFormTemplate);
document.getElementById("main").innerHTML = template(recipe);
}

function getRecipeValues() {
  var ingredientsNodes = document.getElementsByName("ingredients");
  var ingredients = [];
  for(var i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value);
    }
  }
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var recipe = {name, ingredients, description};
    return(recipe);
}


function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="IngredientsList">' + ingredient +'</li>')
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

  initForm();
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
