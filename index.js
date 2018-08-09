function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup();
  initForm();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function initForm(){
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'});
}

function createRecipe(){
  var recipe = getRecipeVals();
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innerHTML = template(recipe);
}

function getRecipeVals(){
  var ingredientsNodes = document.getElementsByName("ingredients");
  var ingredients = [];
  for(var i=0; i<ingredientsNodes.length; i++){
    if(ingredientsNodes[i].value !== ""){
      ingredients.push(ingredientsNodes[i]);
    }
  }
  var name = document.getElementById("recipeName");
  var description = document.getElementById("recipeDescription");
  var recipe = {name, ingredients, description};
  return recipe;
}

function updateRecipe(){
  var recipe = getRecipeVals();
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innterHTML = template(recipe);
}

function displayEditForm(){
  var name = document.getElementById("nameHeader").innerText;
  var description = document.getElementById("recipeDescription").innerText;
  var ingredientsNodes = document.getElementsByName("ingredientsList");
  var ingredients = [];
  for(var i = 0; i < ingredientsNodes.length; i++){
    ingredients.push(ingredientsNodes[i].innerText);
  }

  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'};

  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementById("main").innerHTML = template(recipe);
}

function handlebarsSetup(){
  Handlebars.registerHelper('displayIngredient', function(ingredient){
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>');
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
}
