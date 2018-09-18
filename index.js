  
function createRecipe() {
  var name = document.getElementByName("recipeName").value;
  var description = document.getElementByName("recipeDescription").value;
  var ingredientList = document.getElementByName("ingredients")
  var ingredients = [] 
  
  for(let i=0; i < ingredientList.length; i++) {
    if(ingredientList[i] !== "") {
      ingredients.push(ingredientList[i].value)
    }
  }
  
  var recipe = {name, description, ingredients}
  
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var template = Handlebars.compile(recipeTemplate);
  document.getElementById('main').innerHTML = template(recipe);
}
  
 function displayEditForm() {
    document.querySelector('a').addEventListener('click', function(e) {
     var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
      var result = template(recipe);
      document.getElementsByTagName("main")[0].innerHTML += recipe;
    })
 }
 
 function updateRecipe() {
   return createRecipe()
 }

function init() {

// Handlebars Helper displayIngregient
  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString('<li name="ingredientList"> + ingredient + </li>')
  })
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
