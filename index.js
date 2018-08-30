function init() {
  //put any page initialization/handlebars initialization here
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})




var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);



// function getElementsByName() {
// }


function reg(){   
var partial = Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
}  

function createRecipe(){
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
}

function updateRecipe(){
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var name = document.getElementById("name")
  var description = document.getElementById("description")
  var ingredient = document.getElementsByName("ingredient")
}

      
function displayEditForm() {
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var ingredientItems = document.getElementsByName("ingredient").value
  var ingredients = []
  for (let i = 0; i < ingredientItems.length; i++) {
    ingredients << ingredients[i].innerHTML
  }
      // that renders template recipe-form-template 
      // that allows edit of recipe 
      // onSubmit updateRecipe()
}

      
    
Handlebars.registerHelper('displayIngredient', function(ingredient) {
  return ingredient.fn(this);
});



      