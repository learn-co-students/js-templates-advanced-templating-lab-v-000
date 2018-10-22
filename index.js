function init() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>');
  });

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial'));

  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial'));
}

document.addEventListener("DOMContentLoaded", function(event) {
  init();
});

function createRecipe() {
  let recipe = recipeContext();
  let recipeTemplate = document.getElementById("recipe-template").innerHTML;
  let template = Handlebars.compile(recipeTemplate);
  debugger;
  document.getElementById("main").innerHTML = template(recipeTemplate);
}

function recipeContext() {
  const ingredientsNodes = document.getElementsByName("ingredients")

  let ingredients = [];
  for (let i = 0; i < ingredientsNodes.length; i++) {
    let ingredient = ingredientsNodes[i].value;
    if (ingredient !== "") {
      ingredients.push(ingredient);
    }
  }
    const name = document.getElementById("name").value
    const description = document.getElementById("description").value;
    const recipe = {name, ingredients, description};
    return(recipe);
}
