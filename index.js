function init() {
  //put any page initialization/handlebars initialization here

  loadRecipeForm();
  loadRecipe();
  displayEditForm();

  function loadRecipeForm() {
    var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
    var result = template();
    document.getElementsByTagName("main")[0].innerHTML += result;
  }

  function handleSubmit(params) {

  }

  function loadRecipe() {
    var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
    var result = template();
    document.getElementsByTagName("main")[0].innerHTML += result;
  }

  function displayEditForm() {

  }

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    item = "<li name="ingredients">{{ingredient}}</li>";
    return new Handlebars.SafeString(item);
  });

  Handlebars.registerPartial("recipeDetailsPartial", function (description, ingredients) {
    desc = "<p>{{recipe.description}}</p>";
    return new Handlebars.SafeString(desc);  }
  );
}

document.addEventListener("DOMContentLoaded", function(event) {
  init();
});
