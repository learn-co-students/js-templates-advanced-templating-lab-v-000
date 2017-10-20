function init() {
  const recipe = {
    fn: 'createRecipe()',
    name: '',
    description: '',
    ingredients: ['', '', '', '', '']
  }

  const formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName('main')[0].innerHTML += formTemplate(recipe);

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);

  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML);

  Handlebars.registerHelper('displayIngredient', function() {
    console.log("HI IM HERE" + "<p>" + this + "</p>");
    return new Handlebars.SafeString('<li class="ingredients">' + this + "</li>");
  });


}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  const recipe = {};
  recipe.name = document.getElementById('name').value;
  recipe.description = document.getElementById('description').value;
  recipe.ingredients = [];
  let inputIngredients = document.getElementsByName('ingredients');
  for (let i=0; i < inputIngredients.length; i++) {
    recipe.ingredients.push(inputIngredients[i].value);
  }

  let form = document.getElementById("recipe-form");
  document.getElementsByTagName('main')[0].removeChild(form)

  const recipeTemplate = Handlebars.compile(document.getElementById('recipe-template').innerHTML);

  const formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  document.getElementsByTagName('main')[0].innerHTML += recipeTemplate(recipe);
}

function displayEditForm() {
  console.log('edit start');
  const recipe = {fn: 'updateRecipe()'}
  recipe.name = document.getElementById("nameDisplay").textContent;
  recipe.description = document.getElementById("descriptionDisplay").textContent;
  recipe.ingredients = []
  const displayIngredients = document.getElementsByClassName('ingredients');
  for (let i = 0; i < displayIngredients.length; i++) {
    recipe.ingredients.push(displayIngredients[i].textContent);
  }
  console.log(recipe);

  const formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  document.getElementsByTagName('main')[0].innerHTML += formTemplate(recipe);
}

function updateRecipe() {
  const recipe = {};
  recipe.name = document.getElementById('name').value;
  recipe.description = document.getElementById('description').value;
  recipe.ingredients = [];
  let inputIngredients = document.getElementsByName('ingredients');
  for (let i=0; i < inputIngredients.length; i++) {
    recipe.ingredients.push(inputIngredients[i].value);
  }

  let display = document.querySelector(".display");
  document.getElementsByTagName('main')[0].removeChild(display);

  let form = document.getElementById("recipe-form");
  document.getElementsByTagName('main')[0].removeChild(form);

  const recipeTemplate = Handlebars.compile(document.getElementById('recipe-template').innerHTML);

  const formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  document.getElementsByTagName('main')[0].innerHTML += recipeTemplate(recipe);
}
