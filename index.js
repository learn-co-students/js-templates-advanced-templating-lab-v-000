function init() {
  //put any page initialization/handlebars initialization here
  var recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML = recipeFormTemplate ;
  
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  // var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
}