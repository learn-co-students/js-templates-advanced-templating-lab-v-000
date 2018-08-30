function init() {
  //put any page initialization/handlebars initialization here
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})




var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
var formHtml = template(recipe);



// function getElementsByName() {
// }


function reg(){   
var partial = Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
}  

function createRecipe(){
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var recipe = document.getElementsByTagName()
  var recipeHtml = template(recipe);
}

function updateRecipe(){
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var name = document.getElementById("name")
  var description = document.getElementById("description")
  var ingredient = document.getElementsByName("ingredient")
  // document.getElementById.
}

      
function displayEditForm() {
      // that renders template recipe-form-template 
      // that allows edit of recipe 
      // onSubmit updateRecipe()
}

      
    
Handlebars.registerHelper('displayIngredient', function(ingredient) {
  return ingredient.fn(this);
});



      