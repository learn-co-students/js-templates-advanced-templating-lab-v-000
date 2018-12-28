function initForm() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML;
  var template = Handlebars.compile(formTemplate);
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'handleSubmit()'});
}
 
function handleSubmit() {
 createRecipe();
}
  
function createRecipe() {
  var recipe = recipeInfo();
  var recipeTemplate = document.getElementById("recipe-template").innerHTML;
  var template = Handlebars.compile(recipeTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}
 
function updateRecipe() {
  var recipe = recipeInfo();
  var recipeTemplate = document.getElementById("recipe-template").innerHTML;
  var template = Handlebars.compile(recipeTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}
 
function displayEditForm() {
  var name = document.getElementById("recipeName").innerHTML;
  var description = document.getElementById("recipeDescription").innerHTML;
  var ingredientList = document.getElementsByName("ingredients");
  var ingredients = [];
  
  for(var i = 0; i < ingredientList.length; i++) {
    ingredients.push(ingredientList[i].innerHTML);
   }
  var recipe = {name, description, ingredients, handleSubmit: "createRecipe()"};
  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  var template = Handlebars.compile(recipeFormTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}
 
function recipeInfo() {
  var ingredientList = document.getElementsByName("ingredients");
  var ingredients = [];
  
  for(var i = 0;i < ingredientList.length; i++) {
    if(ingredientList[i].value !== "") {
       ingredients.push(ingredientList[i].value);
     }
   }
   var name = document.getElementById("name").value;
   var description = document.getElementById("description").value;
   var recipe = {name, ingredients, description};
   return(recipe);
 }
 
function handlebarsSetup() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
     return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>');
  });
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
}
 
function init() {
  handlebarsSetup();
  initForm();
}	

document.addEventListener("DOMContentLoaded", function(event) {
  init();
});

 
 