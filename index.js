function init() {
  //put any page initialization/handlebars initialization here
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})




var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
var html = template(recipe);


function getElementsByName() {
  
}


function reg(){   
var partial = Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
}  

function createRecipe(){
}

function updateRecipe(){
}

      
function displayEditForm() {
      // that renders template recipe-form-template 
      // that allows edit of recipe 
      // onSubmit updateRecipe()
}

      
    
Handlebars.registerHelper('displayIngredient', function(ingredient) {
  return ingredient.fn(this);
});



      