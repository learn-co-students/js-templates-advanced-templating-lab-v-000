function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function(){
    return new Handlebars.SafeString("<li name='recipe-ingredients' >" + this.name + "</li>");
  });

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);

  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);

  renderRecipeForm();
}

document.addEventListener("DOMContentLoaded", function(event) {
  init();
})

function renderRecipeForm(recipeData = false){
  if (recipeData === false)
      recipeData = {
      'submitFunction': 'createRecipe();',
      'formId': 'recipe-form',
      'name': '',
      'description': '',
      'ingredients': [
        {'name': ''},
        {'name': ''},
        {'name': ''},
        {'name': ''},
        {'name': ''}
      ]
    }
  const form = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  const result = form(recipeData);
  document.getElementById('main').innerHTML += result;
};

function generateRecipeJSONFromForm(edit = false){
  const form = setCorrectForm(edit);
  const recipeName = form.querySelector('#name').value;
  const recipeDescription = form.querySelector('#description').value;
  const ingredientNodes = form.querySelectorAll('[name="ingredients"]')
  const recipeIngredients = [];
  for(let i = 0; i < ingredientNodes.length; i++){
    let name = ingredientNodes[i].value
    if (name !== ''){
      recipeIngredients.push({'name': name});
    }
  }
  return {'name': recipeName, 'description': recipeDescription, 'ingredients': recipeIngredients };
};

function setCorrectForm(edit){
  if (edit === false){
    return document.getElementById('recipe-form');
  } else {
    return document.getElementById('edit-recipe-form');
  };
};

function createRecipe(){
  // grab values
  const recipe = generateRecipeJSONFromForm();

  const template = Handlebars.compile(document.getElementById('recipe-template').innerHTML)
  const result =  template(recipe);

  document.getElementById('main').innerHTML += result;
};

function generateEditFormJSON(){
  const name = document.getElementById('recipe-name').innerText;
  const description = document.getElementById('recipe-description').innerText;
  const ingredientNodes = document.getElementsByName('li[name="recipe-ingredients"]');
  const ingredients = [];
  for(let i = 0; i < ingredientNodes.length; i++){
    ingredients.push({'name': ingredientNodes[i].innerText});
  }

  return {'submitFunction': 'updateRecipe();', 'formId': 'edit-recipe-form', 'name': name, 'description': description, 'ingredients': ingredients}
};
//passed in recipe before
function displayEditForm() {
  const formData = generateEditFormJSON();
  const form = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  const result = form(formData);
  // add to bottom of recipe
  document.getElementById('main').innerHTML += result;
};

function updateRecipe(){
  const recipe = generateRecipeJSONFromForm(true);;
  const template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  const result =  template(recipe);
  //remove old recipe, form - but tests don't allow for this.
  //document.getElementById('edit-recipe-form').remove();
  //document.getElementById('recipe-card').remove();
  //add new, update recipe
  document.getElementById('main').innerHTML += result;
};
