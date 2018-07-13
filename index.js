function createForm() {
  let formTemplate = Handlebars.compile(
    document.getElementById('recipe-form-template').innerHTML
  );
  document.getElementsByTagName('main')[0].innerHTML = formTemplate({'submitAction': 'createRecipe()'});
}

function displayEditForm() {
  let formTemplate = Handlebars.compile(
    document.getElementById('recipe-form-template').innerHTML
  );
  document.getElementsByTagName('main')[0].innerHTML += formTemplate({'submitAction': 'updateRecipe()'});
}

function createRecipe() {
  // let name = document.getElementById('name').value;
  // let description = document.getElementById('description').value;
  // let ingredients = [];
  // let ingNodes = document.getElementsByName('ingredients')
  // for (var i = 0; i < ingNodes.length; i++) {
  //   ingredients.push(ingNodes[i]);
  // };
  let recipe = getRecipeVals();

  let recipeTemplate = Handlebars.compile(
    document.getElementById('recipe-template').innerHTML
  );

  document.getElementsByTagName('main')[0].innerHTML += recipeTemplate(recipe);
  // document.getElementsByTagName('main')[0].innerHTML += recipeTemplate({
  //   'name': name,
  //   'description': description,
  //   'ingredients': ingredients,
  // });
}

function updateRecipe() {
  // let name = document.getElementById('name').value;
  // let description = document.getElementById('description').value;
  // let ingredients = [];
  // let ingNodes = document.getElementsByName('ingredients')
  // for (var i = 0; i < ingNodes.length; i++) {
  //   ingredients.push(ingNodes[i]);
  // };
  let recipe = getRecipeVals();

  let recipeTemplate = Handlebars.compile(
    document.getElementById('recipe-template').innerHTML
  );

  document.getElementById('main').innerHTML = recipeTemplate(recipe);
  // document.getElementById('main').innerHTML = recipeTemplate({
  //   'name': name,
  //   'description': description,
  //   'ingredients': ingredients,
  // });
}

function getRecipeVals() {
  let name = document.getElementById('name').value;
  let description = document.getElementById('description').value;
  let ingredients = [];
  let ingNodes = document.getElementsByName('ingredients')
  for (var i = 0; i < ingNodes.length; i++) {
    ingredients.push(ingNodes[i]);
  };

  return {name, description, ingredients};
}

function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);

  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li class="ingredients">' + ingredient + '</li>');
  })

  createForm();

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
