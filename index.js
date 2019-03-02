function init() {
  //put any page initialization/handlebars initialization here
  document.getElementsByTagName("main")[0].innerHTML += recipe-form-template;

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function handleSubmit() {
  var recipeName = document.getElementById("recipeName").value;
  var recipeDescription = document.getElementById("recipeDescription").value;
  var recipeIngredients = document.getElementsByName("recipeIngredients").value;
}

function displayEditForm() {
  return "hello"
}
