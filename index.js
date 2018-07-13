function createForm() {
  let formTemplate = Handlebars.compile(
    document.getElementById('recipe-form-template').innerHTML
  );
  document.getElementsByTagName('main')[0].innerHTML = formTemplate({'submitAction': 'createRecipe()'});
}

function displayEditForm() {
  let name = document.querySelector('div#recipe h2').innerHTML;
  let description = document.querySelector('div#recipe p').innerHTML;
  let ingredients = [];
  let ingNodes = document.querySelectorAll('div ul li')
  for (var i = 0; i < ingNodes.length; i++) {
    ingredients.push(ingNodes[i].innerHTML);
  };

  let formTemplate = Handlebars.compile(
    document.getElementById('recipe-form-template').innerHTML
  );
  document.getElementsByTagName('main')[0].innerHTML = formTemplate({
    'submitAction': 'updateRecipe()',
    'name': name,
    'description': description,
    'ingredients': ingredients
  });
}

function createRecipe() {
  let recipe = getRecipeVals();

  let recipeTemplate = Handlebars.compile(
    document.getElementById('recipe-template').innerHTML
  );

  document.getElementsByTagName('main')[0].innerHTML = recipeTemplate(recipe);
}

function updateRecipe() {
  let recipe = getRecipeVals();

  let recipeTemplate = Handlebars.compile(
    document.getElementById('recipe-template').innerHTML
  );

  document.getElementById('main').innerHTML = recipeTemplate(recipe);
}

function getRecipeVals() {
  let name = document.getElementById('name').value;
  let description = document.getElementById('description').value;
  let ingredients = [];
  let ingNodes = document.getElementsByName('ingredients')
  for (var i = 0; i < ingNodes.length; i++) {
    ingredients.push(ingNodes[i].value);
  };

  return {name, description, ingredients};
}

function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);

  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    if (ingredient !== '') {
      return new Handlebars.SafeString('<li class="ingredients">' + ingredient + '</li>');
    }
  })

  createForm();

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
