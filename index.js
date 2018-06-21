Handlebars.registerHelper('displayIngredient', function() {
  return new Handlebars.SafeString("<li>" + this.name + "</li>")
})

Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)




function init() {
  //put any page initialization/handlebars initialization here
  createRecipe()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  var recipeFormTemplate = document.getElementById('recipe-form-template').innerHTML;
  var template = Handlebars.compile(recipeFormTemplate);
  document.getElementsByTagName("main")[0].innerHTML += template; 
}
