function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function() {
    //some function here
  });
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML);


} // close init()
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

// Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("recipe-details-partial"));
// Handlebars.registerPartial("recipeFormPartial", document.getElementById("recipe-form-template"));

function createRecipe() {
  let recipeName = document.getElementById("name").value;
  let recipeDescription = document.getElementById("description").value;
  let recipeTemplate = document.getElementById("recipe-template").innerHTML;
  let template = Handlebars.compile(recipeTemplate);
  let html = template({name: recipeName, description: recipeDescription});
  document.getElementById("main").innerHTML += html;
}

// function createRecipe() {
//   var recipe = getRecipeVals()
//   var recipeTemplate = document.getElementById("recipe-template").innerHTML
//   var template = Handlebars.compile(recipeTemplate)
//   document.getElementById("main").innerHTML = template(recipe)
// }

function displayEditForm() {

}

function updateRecipe() {

}
