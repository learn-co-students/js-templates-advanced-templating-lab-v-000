function init() {
  //put any page initialization/handlebars initialization here
  function loadRecipeForm() {
    var template = Handlebars.compile(document.getElementById("recipe-form").innerHTML);
    var result = template();
    document.getElementsByTagName("main")[0].innerHTML += result;
  }
}
document.addEventListener("DOMContentLoaded", function(event) {
  init();
});
