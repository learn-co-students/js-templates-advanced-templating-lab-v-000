var onSubmitEnding = '(); return false;'

function init() {
  //put any page initialization/handlebars initialization here
  handleBarsInit();
  displayForm();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function handleBarsInit(){
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
  Handlebars.registerHelper('displayIngredient', function() {
    if(this.name === "") {
      return ""
    } else {
      return new Handlebars.SafeString("<li name='ingredient-existing'>" + this.name + "</li>")
    }
  })
}

// gonna write my code here and then copy paste
function displayForm(){
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var result = template({'onSubmit': "createRecipe" + onSubmitEnding});
  document.getElementsByTagName("main")[0].innerHTML = result;
}

function createRecipe(){
  var name = document.getElementById('name').value;
  var description = document.getElementById('description').value;

  var ingredientList = document.getElementsByName('ingredients');
  var ingredients = [];
  for(var i = 0; i < ingredientList.length; i++){
    ingredients.push({'name': ingredientList[i].value})
  }

  let newRecipe = {
    'name': name,
    'description': description,
    'ingredients': ingredients
  }

  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var result = recipeTemplate(newRecipe);
  document.getElementsByTagName("main")[0].innerHTML = result;

}

function displayEditForm(){
  var name = document.getElementById('recipe-name-existing').innerHTML;
  var description = document.getElementById('recipe-desc-existing').innerHTML;

  var ingredientList = document.getElementsByName('ingredient-existing');
  var ingredients = [];
  for(var i = 0; i < ingredientList.length; i++){
    ingredients.push({'name': ingredientList[i].value})
  }

  let existingRecipeDetails = {
    'name': name,
    'description': description,
    'ingredients': ingredients,
    'onSubmit': "updateRecipe" + onSubmitEnding
  }

  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var result = template(existingRecipeDetails);
  document.getElementsByTagName("main")[0].innerHTML = result;
}

function updateRecipe(){
  var name = document.getElementById('name').value;
  var description = document.getElementById('description').value;
  var ingredientList = document.getElementsByName('ingredients');
  var ingredients = [];
  for(var i = 0; i < ingredientList.length; i++){
    ingredients.push({'name': ingredientList[i].value})
  }

  let newRecipe = {
    'name': name,
    'description': description,
    'ingredients': ingredients
  }

  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var result = recipeTemplate(newRecipe);
  document.getElementsByTagName("main")[0].innerHTML = result;

}
