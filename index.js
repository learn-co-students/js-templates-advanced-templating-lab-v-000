function init() {
  //put any page initialization/handlebars initialization here

  // i added this:
  loadRecipeForm();

  function loadRecipeForm() {
    var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
    var result = template();
    document.getElementsByTagName("main")[0].innerHTML += result;
  }

  function handleSubmit(params) {

  }

  function loadRecipe() {
    var template = Handlebars.compile(document.getElementById("recipe").innerHTML);
    var result = template();
    document.getElementsByTagName("main")[0].innerHTML += result;
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  init();
});
