function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

  // Handlebars.registerHelper('displayIngredient', function() {
  //   return new Handlebars.SafeString(this)
  // });

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="recipeIngredients">' + ingredient + '</li>')
  })

  renderRecipeForm();
}

document.addEventListener("DOMContentLoaded", function(event) {
  init();
})

function renderRecipeForm() {
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementById("main").innerHTML += template();
}

function createRecipe() {
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;

  var ingredientNodes = document.getElementsByName("ingredients");
  var ingredients = [];
  for(let i=0;i<ingredientNodes.length;i++){
    if(ingredientNodes[i].value !== "") {
       ingredients.push(ingredientNodes[i].value);
    }
  }
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var recipeHTML = template({name: name, description: description, ingredients: ingredients});
  document.getElementById("main").innerHTML += recipeHTML;
}

function displayEditForm() {
  var name = document.getElementById("recipeName").value;
  var description = document.getElementById("recipeDescription").value;
  var ingredientNodes = document.getElementsByName("recipeIngredients");
  var ingredients = [];
  for(let i=0;i<ingredientNodes.length;i++){
    if(ingredientNodes[i].value !== "") {
       ingredients.push(ingredientNodes[i].value);
    }
  }

  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var recipeFormHTML = template({name: name, description: description, ingredients: ingredients});
  document.getElementById("main").innerHTML += recipeFormHTML;
}

function updateRecipe() {
  createRecipe();
}
