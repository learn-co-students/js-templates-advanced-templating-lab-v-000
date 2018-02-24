function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString("<strong>" + ingredient + "</strong>")
  }); 
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
  
  
  var recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML = recipeFormTemplate() ;
  
 
  
  
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function getRecipeValues() {
  var recipeName = document.getElementById("name").value
  var recipeDescription = document.getElementById("description").value
  var recipeIngredients = []
  var ingredients = document.getElementsByName("ingredients")
  for (var i = 0; i< ingredients.length; i++) {
    recipeIngredients.push(ingredients[i].value)
  }
  
  return {recipeName, recipeDescription, recipeIngredients}
}

function createRecipe() {
  // var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var newRecipe = getRecipeValues();
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  // debugger
  document.getElementById("main").innerHTML = recipeTemplate(newRecipe) ;
  
}

function displayEditForm() {
  
  
}