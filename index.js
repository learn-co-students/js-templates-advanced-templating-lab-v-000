function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial("recipeFormPartial", document.getElementById("recipe-form-partial").innerHTML);
  Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerHelper("displayIngredient", function(ingredient) {
    return new Handlebars.safeString("<li name='ingredientsList'>" + ingredient + "</li>")
  })

  var form = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML = form({"onSubmit": "createRecipe()"});
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
});

function createRecipe() {
  var recipeName = document.getElementById("recipeName").value;
  var recipeDesc = document.getElementById("recipeDesc").value;
  var ingredient = document.getElementsByName("ingredients");
  var ingredients = [];

  for(var i = 0; i < ingredient.length; i++) {
    if(ingredient[i].value !== "") {
      ingredients.push(ingredient[i].value)
    }
  }

var recipe = {
  "name": recipeName,
  "description": recipeDesc,
  "ingredients": ingredients
  }

let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
document.getElementById("main").innerHTML = template(recipe);

}

function displayEditForm(){
  let recipeName = document.getElementById("recipeName").value;
  let recipeDesc = document.getElementById("recipeDesc").value;
  let ingredientNodes = document.getElementsByName('ingredients');
  let ingredients = [];

  for (let i = 0; i < ingredientNodes.length; i++){
    if (ingredientNodes[i].value !== ""){
      ingredients.push(ingredientNodes[i].value)
    }
  };

  let recipe = {
    'name': recipeName,
    'description': recipeDesc,
    'ingredients': ingredients,
    'submitAction': 'updateRecipe()'
  }

  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe() {
  var recipeName = document.getElementById("recipeName").value;
  var recipeDesc = document.getElementById("recipeDesc").value;
  var ingredient = document.getElementsByName("ingredients");
  var ingredients = [];

  for (var i = 0; i < ingredient.length; i++) {
    if(ingredient[i].value !== "") {
      ingredients.push(ingredient[i].value)
    }
}

var recipe = {
  "name": recipeName,
  "description": recipeDesc,
  "ingredients": ingredients
  }

let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
document.getElementById("main").innerHTML = template(recipe);

}
