function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('display_ingredient', function() {
    return new Handlebars.SafeString(this.ingredient)
})
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipeForm() {
  let recipe = {
    name: "",
    description: "",
  }
  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var result = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += result;
}
function createRecipe() {

}
