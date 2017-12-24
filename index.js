function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString(this.value);
  });
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML);
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  let recipeName = document.getElementById("name").value;
  let recipeDescription = document.getElementById("description").value;
  let ingredients = document.getElementsByName("ingredients");
  let recipeTemplate = document.getElementById("recipe-template").innerHTML;
  let template = Handlebars.compile(recipeTemplate);
  let html = template({name: recipeName, description: recipeDescription, ingredients: ingredients});
  document.getElementById("main").innerHTML += html;
}

function displayEditForm() {
  let recipeName = document.getElementById("name").value;
  let recipeDescription = document.getElementById("description").value;
  let ingredients = document.getElementsByName("ingredients");
  let form = document.getElementById("recipe-form-template").innerHTML;
  var template = Handlebars.compile(form);
  document.getElementById("thing").innerHTML = template({name: recipeName, description: recipeDescription, ingredients: ingredients});

  document.getElementById("thing").innerHTML += form;
}

function updateRecipe() {

}
