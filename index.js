function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function() {
    //some function here
  });
  Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("recipe-details-partial"));
  Handlebars.registerPartial("recipeFormPartial", document.getElementById("recipe-form-template"));


} // close init()
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  let recipeName = document.getElementById("name").value;
  // let recipeDescription = document.getElementById("description").value;
  let recipeTemplate = document.getElementById("recipe-template").innerHTML;
  let template = Handlebars.compile(recipeTemplate);
  debugger;
  let html = template({name: recipeName});
  document.getElementById("main").innerHTML = html;
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
