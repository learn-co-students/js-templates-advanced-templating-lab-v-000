function init() {
  //put any page initialization/handlebars initialization here
  let recipeFormTemplate = document.getElementById('recipe-form-template').innerHTML;
  let recipeFormTemplateFn = Handlebars.compile(recipeFormTemplate);
  let recipeFormHTML = recipeFormTemplateFn();
  document.getElementById("main").innerHTML += recipeFormHTML;

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + "</li>")
  })
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

let recipe = {};

function handleSubmit() {
  recipe.name = document.getElementById('name').value;
  recipe.description = document.getElementById('description').value;
  let ingredientsNode = document.getElementsByName('ingredients');
  recipe.ingredients = [];
  for (let i = 0; i < ingredientsNode.length; i++) {
    if (ingredientsNode[i].value){
      recipe.ingredients.push(ingredientsNode[i].value)
    }
  }
  let recipeTemplate = document.getElementById('recipe-template').innerHTML;
  let recipeTemplateFn = Handlebars.compile(recipeTemplate);
  let recipeHTML = recipeTemplateFn(recipe);
  document.getElementById("main").innerHTML = recipeHTML;
}

function displayEditForm() {
  recipe.name = document.getElementById('name').innerHTML;
  recipe.description = document.getElementById('description').innerHTML;
  let ingredientsLis = document.getElementsByTagName('li')
  recipe.ingredients = [];
  for (let i = 0; i < ingredientsLis.length; i++) {
    recipe.ingredients.push(ingredientsLis[i].innerHTML)
  }
  let recipeFormTemplate = document.getElementById('recipe-form-template').innerHTML;
  let recipeFormTemplateFn = Handlebars.compile(recipeFormTemplate);
  let recipeFormHTML = recipeFormTemplateFn(recipe);
  document.getElementById("main").innerHTML = recipeFormHTML;
}
