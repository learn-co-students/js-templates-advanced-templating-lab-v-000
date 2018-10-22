function updateRecipe() {
  var recipe = recipeForCreateAndUpdate()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML;
  var template = Handlebars.compile(recipeTemplate);
  document.getElementById("main").innerHTML = template(recipe)
}

function displayEditForm(){
  var recipe = recipeForEdit();

  var formTemplate = document.getElementById("recipe-form-template").innerHTML;
  var template = Handlebars.compile(formTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}

function recipeForEdit(){
  var name = document.getElementById("nameHeader").innerHTML;
  var description = document.getElementById("recipeDescription").innerHTML;
  var ingredientNodes = document.getElementsByName("ingredientsList");
  var ingredients = [];
  for (let i = 0; i < ingredientNodes.length; i++){
    ingredients.push(ingredientNodes[i].innerHTML)
  }

  var recipe = {name, ingredients, description, onSubmit: 'updateRecipe()'}

  return recipe;
}

function createRecipe(){
  var recipe = recipeForCreateAndUpdate();

  var recipeTemplate = document.getElementById("recipe-template").innerHTML;
  var template = Handlebars.compile(recipeTemplate);
  var result = template(recipe);
  document.getElementById("main").innerHTML = result;
}

function recipeForCreateAndUpdate() {
  var ingredientNodes = document.getElementsByName("ingredients");
  var ingredients = [];
  for (let i = 0; i < ingredientNodes.length; i++){
    if (ingredientNodes[i].value !== ""){
      ingredients.push(ingredientNodes[i].value)
    }
  }

  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;

  var recipe = {name, ingredients, description};

  return recipe;
}

function formInit(){
  var formTemplate = document.getElementById("recipe-form-template").innerHTML;
  var template = Handlebars.compile(formTemplate);
  document.getElementsByTagName("main")[0].innerHTML = template({'onSubmit': 'createRecipe(event)'})
}

function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.safeString('<li name="ingredientsList">' + ingredient + '</li>');
});

  formInit();
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
