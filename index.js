function init() {
  //put any page initialization/handlebars initialization here
  document.getElementsByTagName("main")[0].innerHTML += recipeFormTemplate();

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function newRecipe() {
  var recipeName = document.getElementById("recipeName").value;
  var recipeDescription = document.getElementById("recipeDescription").value;
}

function displayEditForm() {
  return "hello"
}
