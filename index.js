function init() {
  //put any page initialization/handlebars initialization here
  function createRecipe() {
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var ingredients = document.getElementsByName("ingredients").length;
  }
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
