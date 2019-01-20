function init() {
  //put any page initialization/handlebars initialization here
  var formTemplate = Handlebars.compile(
    document.getElementById("recipe-form-template").innerHTML
  );
  document.getElementById("main").innerHTML = formTemplate({
    ingredients: ["", "", "", "", ""]
  });

  Handlebars.registerPartial(
    "recipeDetailsPartial",
    document.getElementById("recipe-details-partial").innerHTML
  );

  Handlebars.registerHelper("displayIngredient", function(ingredient) {
    return new Handlebars.SafeString(
      '<li name="ingredients">' + ingredient + "</li>"
    );
  });
}

function handleSubmit() {
  let recipe = {};
  let nameNode = document.getElementById("name");
  let descriptionNode = document.getElementById("description");
  let ingredientNodes = document.getElementsByName("ingredients");
  recipe.name = nameNode.value;
  recipe.description = descriptionNode.value;
  recipe.ingredients = [];
  for (let i = 0; i < ingredientNodes.length; i++) {
    recipe.ingredients.push(ingredientNodes[i].value);
  }
  let recipeTemplate = Handlebars.compile(
    document.getElementById("recipe-template").innerHTML
  );
  document.getElementById("main").innerHTML = recipeTemplate(recipe);
}

function displayEditForm() {
  let recipe = {};
  let nameNode = document.getElementById("recipeName");
  let descriptionNode = document.getElementById("recipeDescription");
  let ingredientNodes = document.getElementsByName("ingredients");
  recipe.name = nameNode.innerHTML;
  recipe.description = descriptionNode.innerHTML;
  recipe.ingredients = [];
  for (let i = 0; i < ingredientNodes.length; i++) {
    recipe.ingredients.push(ingredientNodes[i].innerHTML);
  }
  let recipeTemplate = Handlebars.compile(
    document.getElementById("recipe-form-template").innerHTML
  );
  document.getElementById("main").innerHTML = recipeTemplate(recipe);
}

document.addEventListener("DOMContentLoaded", function(event) {
  init();
});
