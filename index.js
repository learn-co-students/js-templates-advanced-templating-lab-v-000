function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  let recipeForm = document.getElementById("recipe-form-template").innerHTML;
  document.getElementById("main").innerHTML += recipeForm;
  //debugger;
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {

}
