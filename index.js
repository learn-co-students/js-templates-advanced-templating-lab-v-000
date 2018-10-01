function init() {
  //put any page initialization/handlebars initialization here
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

// Handlebars.registerHelper('ingredient_body', function() {
//   if(this.state === "closed") {
//     return new Handlebars.SafeString(this.body)
//   } else {
//     return new Handlebars.SafeString("<strong>" + this.body + "</strong>")
//   }
// })

Handlebars.registerPartial(recipeDetailsPartial,document.getElementById('recipe-details-partial').innerHTML);
// Handlebars.registerPartial(displayIngredient,document.getElementById('recipe-details-partial').innerHTML);
// 
//
// function displayIngredient(){
//
// }

function createRecipe(){
 var template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
 let ingredients = document.getElementById('ingredients').value;
 let description = document.getElementById('description').value;
 var data = {description: description, ingredients: ingredients}
 var result = template(data);

}

function updateRecipe(){
 var template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);

}

// function recipeDetailsPartial(){
//
// }

function displayEditForm(){

}
