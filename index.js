function initForm() {
  const formTemplate = document.getElementById('recipe-form-template')
    .innerHTML;
  const template = Handlebars.compile(formTemplate);
  document.getElementsByTagName('main')[0].innerHTML = template({
    submitAction: 'createRecipe()',
  });
}

function createRecipe() {
  const recipe = recipeInfo();
  const recipeTemplate = document.getElementById('recipe-template').innerHTML;
  const template = Handlebars.compile(recipeTemplate);
  document.getElementById('main').innerHTML = template(recipe);
}

function updateRecipe() {
  const recipe = recipeInfo();
  const recipeTemplate = document.getElementById('recipe-template').innerHTML;
  const template = Handlebars.compile(recipeTemplate);
  document.getElementById('main').innerHTML = template(recipe);
}

function displayEditForm() {
  const name = document.getElementById('nameHeader').innerText;
  const description = document.getElementById('recipeDescription').innerText;
  const ingredientList = document.getElementsByName('ingredientList');
  const ingredients = [];
  for (let i = 0; i < ingredientList.length; i++) {
    ingredients.push(ingredientsNodes[i].innerText);
  }

  const recipe = {
    name,
    description,
    ingredients,
    submitAction: 'createRecipe()',
  };

  const recipeFormTemplate = document.getElementById('recipe-form-template')
    .innerHTML;
  const template = Handlebars.compile(recipeFormTemplate);
  document.getElementById('main').innerHTML = template(recipe);
}

function recipeInfo() {
  const ingredientList = document.getElementsByName('ingredients');
  const ingredients = [];
  for (let i = 0; i < ingredientList.length; i++) {
    if (ingredientList[i].value !== '') {
      ingredients.push(ingredientsList[i].value);
    }
  }
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const recipe = { name, ingredients, description };
  return recipe;
}

function handlebarsSetup() {
  Handlebars.registerHelper(
    'displayIngredient',
    ingredient =>
      new Handlebars.SafeString(`<li name="ingredientList">${ingredient}</li>`),
  );
  Handlebars.registerPartial(
    'recipeDetailsPartial',
    document.getElementById('recipe-details-partial').innerHTML,
  );
  Handlebars.registerPartial(
    'recipeFormPartial',
    document.getElementById('recipe-form-partial').innerHTML,
  );
}

function init() {
  handlebarsSetup();
  initForm();
}
document.addEventListener('DOMContentLoaded', event => {
  init();
});
