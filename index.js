function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerHelper('displayIngredient', function() {
    // {{each ingredients}}
    // <p>{{name}}<p>
    // {{/each}}
  };
}

  function createRecipe() {
    var recipe = {
      name: document.getElementsById("recipeName").value;
      description: document.getElementsById("recipeDescription").value;
      ingredients: document.getElementsById("recipeIngredients").value;
    }

    var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
    var result = template(recipe);
    document.getElementsByTagName("main")[0].innerHTML += result;
  }

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
