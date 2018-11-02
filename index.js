function init() {
  //put any page initialization/handlebars initialization here
  initHandlebars();
  initForms();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function initHandlebars() {
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>');
  });
}

function initForms() {
  let formTemplate = document.getElementById("recipe-form-template").innerHTML
  let template = Handlebars.compile(formTemplate);
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

function recipeValues() {
  let name = document.getElementById('name').value;
  let description = document.getElementById('description').value;
  let ingredients = [];

  let ingredientEntries = document.getElementsByName('ingredients');

  for(let i = 0; i < ingredientEntries.length; i++) {
    if(ingredientEntries[i].value !== "") {
      ingredients.push(ingredientEntries[i].value);
    }
  }

  let recipe = {name, ingredients, description};
  return(recipe);
}

function createRecipe() {
  let recipe = recipeValues();

  let recipeTemplate = document.getElementById("recipe-template").innerHTML;
  let template = Handlebars.compile(recipeTemplate);
  document.getElementById('main').innerHTML = template(recipe);
}

function displayEditForm() {
  let recipe = recipeValues();

  let recipeFormTemplate = document.getElementById('recipe-form-template').innerHTML;
  let template = Handlebars.compile(recipeFormTemplate);
  document.getElementById('main').innerHTML = template(recipe);
}

function updateRecipe() {
  let recipe = recipeValues();
  let recipeTemplate = document.getElementById("recipe-template").innerHTML;
  let template = Handlebars.compile(recipeTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}
