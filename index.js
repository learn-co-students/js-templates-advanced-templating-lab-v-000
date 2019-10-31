function init() {
  //put any page initialization/handlebars initialization here
  addHandlebarRegistrations();
  displayForm();
}

document.addEventListener("DOMContentLoaded", function (event) {
  init();
});

function displayForm() {
  const template = Handlebars.compile(
    document.getElementById('recipe-form-template').innerHTML
  );

  document.getElementsByTagName('main')[0].innerHTML +=
    template({ submitAction: `createRecipe()` });
}

function addHandlebarRegistrations() {
  Handlebars.registerPartial('recipeFormPartial',
    document.getElementById('recipe-form-partial').innerHTML);

  Handlebars.registerPartial('recipeDetailsPartial',
    document.getElementById('recipe-details-partial').innerHTML);

  Handlebars.registerHelper('displayIngredient', function (ingredient) {
    return new Handlebars.SafeString(
      '<li name="ingredients">' + ingredient + '</li>'
    );
  });
}

function getRecipeInfo() {
  const name = document.getElementById('name').value;

  const description = document.getElementById('description').value;

  const ingredientsArr = document.getElementsByName('ingredients');

  const ingredients = [];

  for (const element of ingredientsArr) {
    if (element.value != '') {
      ingredients.push(element.value);
    }
  }

  return { name, description, ingredients };
}

function createRecipe() {
  const recipe = getRecipeInfo();

  const template = Handlebars.compile(
    document.getElementById('recipe-template').innerHTML
  );

  const html = template(recipe);

  document.getElementsByTagName('main')[0].innerHTML = html;
}

function displayEditForm() {
  const name = document.getElementById('recipeName').innerHTML;

  const description = document.getElementById('recipeDescription').innerHTML;

  const ingredientsArr = document.getElementsByName('ingredients');

  const ingredients = [];

  for (const element of ingredientsArr) {
    ingredients.push(element.innerHTML);
  }

  const recipe = {
    name,
    description,
    ingredients,
    submitAction: `updateRecipe()`,
  };

  const template = Handlebars.compile(
    document.getElementById('recipe-form-template').innerHTML
  );

  document.getElementsByTagName('main')[0].innerHTML = template(recipe);
}

function updateRecipe() {
  const recipe = getRecipeInfo();

  const template = Handlebars.compile(
    document.getElementById('recipe-template').innerHTML
  );

  const html = template(recipe);

  document.getElementsByTagName('main')[0].innerHTML = html;
}
