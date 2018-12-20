  
function createRecipe() {
  var name = document.getElementById("name").value;
  var description = document.getElementById("recipeDescription").value;
  var ingredientList = document.getElementsByName("ingredients")
  var ingredients = [] 
  
  for(let i=0; i < ingredientList.length; i++) {
    if(ingredientList[i] !== "") {
      ingredients.push(ingredientList[i].value)
    }
  }
  
  var recipe = {name, description, ingredients}
  var recipeTemplate = document.getElementById("recipe-template").innerHTML;
  var template = Handlebars.compile(recipeTemplate);
  document.getElementById('main').innerHTML = template(recipe);
}
  
 function displayEditForm() {
  var name = document.getElementById("recipe-name").value
  var description = document.getElementById("recipe-description").value
  var ingredientList = document.getElementsByName('ingredientsList');
  var ingredients = [] 
  
  for(let i=0; i < ingredientList.length; i++) {
    if(ingredientList[i] !== "") {
      ingredients.push(ingredientList[i].innerHTML)
    }
  }
  let recipe = {name, description, ingredients, submitAction: 'createRecipe()'};
  let recipeFormTemplate = document.getElementById('recipe-form-template').innerHTML;
  let template = Handlebars.compile(recipeFormTemplate);
  document.getElementById("main").innerHTML = template(recipe);
 }
 
 function updateRecipe() {
   return createRecipe()
 }

function init() {

// Handlebars Helper displayIngregient
  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString('<li name="ingredientsList">' + this + '</li>');
  });
// Handlebars Register Partial recipeDetailsPartial
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  
// Handlebars Register Partial recipeFormPartial
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
  
// Compile form template
  var formTemplate = document.getElementById("recipe-form-template").innerHTML;
  var template = Handlebars.compile(formTemplate);
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'});

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
