function init() {
  //put any page initialization/handlebars initialization here
  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  let recipePartial = document.getElementById("recipe-details-partial").innerHTML;

  Handlebars.registerPartial('recipeDetailsPartial', recipePartial)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);

  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction' : 'createRecipe()'});

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString(ingredient);
  });
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  let recipe = {};
  recipe.name = document.getElementById("name").value;
  recipe.description = document.getElementById("description").value;
  recipe.ingredients = [];
  let ingredients = document.getElementsByName("ingredients")

  for(var i=0;i<ingredients.length;i++) {
    if(ingredients[i].value !== "") {
      recipe.ingredients.push(ingredients[i].value)
    }
  }
  let template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  document.getElementById("main").innerHTML = template(recipe);
}

function displayEditForm() {
  let recipe = {};
  recipe.name = document.getElementById("nameHeader").innerText;
  recipe.description = document.getElementById("recipeDescription").innerText;
  recipe.ingredients = [];
  recipe.submitAction = "updateRecipe()"

  let ingredients = document.getElementsByName("ingredientsList")

  for(var i=0;i<ingredients.length;i++) {
    if(ingredients[i].value !== "") {
      recipe.ingredients.push(ingredients[i].value);
    }
  }
  let template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);

  document.getElementById("main").innerHTML = template(recipe);
}

function updateRecipe() {
  let recipe = {};
  recipe.name = document.getElementById("name").value;
  recipe.description = document.getElementById("description").value;
  recipe.ingredients = [];
  let ingredients = document.getElementsByName("ingredients")

  for(var i=0;i<ingredients.length;i++) {
    if(ingredients[i].value !== "") {
      recipe.ingredients.push(ingredients[i].value);
    }
  }

  let template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  document.getElementById("main").innerHTML = template(recipe);
}
