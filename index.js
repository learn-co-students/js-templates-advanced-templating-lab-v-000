function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString("<strong>" + ingredient + "</strong>")
  }); 
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
  
  
  var recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML = recipeFormTemplate({submitAction: "createRecipe()"}) ;
  
 
  
  
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function getRecipeValues() {
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var ingredients = []
  var ingredientsList = document.getElementsByName("ingredients")
  for (var i = 0; i< ingredientsList.length; i++) {
    ingredients.push(ingredientsList[i].value)
  }
  
  return {name, description, ingredients}
}

function createRecipe() {
  // var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var newRecipe = getRecipeValues();
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innerHTML = recipeTemplate(newRecipe) ;
  
}

function displayEditForm() {
  
  var name = document.getElementById("recipeName").innerHTML
  var description = document.getElementById("recipeDescription").innerHTML
  
  var ingredients = []
  var ingredientsList = document.getElementsByTagName("li")
  for (var i = 0; i< ingredientsList.length; i++) {
    ingredients.push(ingredientsList[i].innerText)
  }
  
  var submitAction = "updateRecipe()"
  var newRecipe = {submitAction, name, description, ingredients}
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementById("main").innerHTML = recipeTemplate(newRecipe) ;
  
}

function updateRecipe() {
  var newRecipe = getRecipeValues();
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innerHTML = recipeTemplate(newRecipe) ;
  
}