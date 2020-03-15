function init() {
  //put any page initialization/handlebars initialization here

  loadRecipeForm();
  loadRecipe();
  displayEditForm();
  handleSubmit();

  function loadRecipeForm() {
    var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
    var result = template();
    document.getElementsByTagName("main")[0].innerHTML += result;
  }

  function handleSubmit() {
    //get all info
    var name = document.getElementById("name").value;
    var description = document.getElementById("name").value;
    var ingredients = document.getElementsByName("ingredients").value;

    //stick into recipe hash (3 keys)
    var obj = new Object(name, description, ingredients);

    //grab recipe template
    var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

    //insert into main
    var result = template();
    document.getElementsByTagName("main")[0].innerHTML += result;
  }

  function loadRecipe() {
    var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
    var result = template();
    document.getElementsByTagName("main")[0].innerHTML += result;
  }

  function displayEditForm() {

  }

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    var item = `<li name="ingredients">${ingredient}</li>`;
    return new Handlebars.SafeString(item);
  });

  Handlebars.registerPartial("recipeDetailsPartial", function (description, ingredients) {
    var desc = "<p>{{recipe.description}}</p>";
    return new Handlebars.SafeString(desc);  }
  );
}

document.addEventListener("DOMContentLoaded", function(event) {
  init();
});
