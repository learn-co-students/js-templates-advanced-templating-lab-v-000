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
  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  let recipe = recipeHash();
  // console.log(recipe)
  document.getElementById("main").innerHTML = template(recipe);
}

function recipeHash() {
  const ingredientsNodes = document.getElementsByName("ingredients")
  debugger;
  let ingredients = [];
  for (let i = 0; i < ingredientsNodes.length; i++) {
    // console.log('HI', ingredientsNodes[i])
    let ingredient = ingredientsNodes[i].value;
    if (ingredient !== "") {
      ingredients.push(ingredient);
    }
  }
    const name = document.getElementById("name").value
    const description = document.getElementById("description").value;

    return ({name: name, description: description, ingredients: ingredients});
}
