// Define CALLBACKS
let currentRecipeDetails = {
  name: '',
  description: '',
  ingredient1: '',
  ingredient2: '',
  ingredient3: '',
  ingredient4: '',
  ingredient5: ''
};

function createRecipe(){
  const recipeName = document.getElementById('name').value;
  const recipeDescription = document.getElementById('description').value;
  const recipeIngredients = document.getElementsByName('ingredients');

  currentRecipeDetails.name = recipeName;
  currentRecipeDetails.description = recipeDescription;
  currentRecipeDetails.ingredient1 = recipeIngredients[0].value;
  currentRecipeDetails.ingredient2 = recipeIngredients[1].value;
  currentRecipeDetails.ingredient3 = recipeIngredients[2].value;
  currentRecipeDetails.ingredient4 = recipeIngredients[3].value;
  currentRecipeDetails.ingredient5 = recipeIngredients[4].value;

  const recipeTemplateFn = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  const recipeTemplateHTML = recipeTemplateFn({
    name: recipeName,
    description: recipeDescription,
    ingredients: recipeIngredients
  });

  document.getElementById('recipe-form').remove();

  document.getElementById('main').innerHTML += recipeTemplateHTML;
}

function displayEditForm(){
  const oldRecipeDetails = document.getElementById('recipe-details');
  if (oldRecipeDetails){
    oldRecipeDetails.remove();
  }

  const recipeFormFn = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  document.getElementById('main').innerHTML += recipeFormFn({
    functionToCallOnSubmit: 'updateRecipe',
    currentName: currentRecipeDetails.name,
    currentDescription: currentRecipeDetails.description,
    currentIngredient1: currentRecipeDetails.ingredient1,
    currentIngredient2: currentRecipeDetails.ingredient2,
    currentIngredient3: currentRecipeDetails.ingredient3,
    currentIngredient4: currentRecipeDetails.ingredient4,
    currentIngredient5: currentRecipeDetails.ingredient5,
  });
}

function updateRecipe(){
  const oldRecipeDetails = document.getElementById('recipe-details');
  if (oldRecipeDetails){
    oldRecipeDetails.remove();
  }

  createRecipe();
}

function init() {
  // Register HELPERS
  Handlebars.registerHelper('displayIngredient', function(){
    const safeName = Handlebars.escapeExpression(this.value);

    return new Handlebars.SafeString("<li>" + safeName + "</li>");
  });

  // Register PARTIALS
  Handlebars.registerPartial(
    'recipeDetailsPartial',
    document.getElementById('recipe-details-partial').innerHTML
  );

  Handlebars.registerPartial(
    'recipeFormPartial',
    document.getElementById('recipe-form-partial').innerHTML     
  );

  // display recipe form
  const recipeFormFn = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  document.getElementById('main').innerHTML += recipeFormFn({
    functionToCallOnSubmit: 'createRecipe',
    currentName: currentRecipeDetails.name,
    currentDescription: currentRecipeDetails.description,
    currentIngredients1: currentRecipeDetails.ingredient1,
    currentIngredients2: currentRecipeDetails.ingredient2,
    currentIngredients3: currentRecipeDetails.ingredient3,
    currentIngredients4: currentRecipeDetails.ingredient4,
    currentIngredients5: currentRecipeDetails.ingredient5,
  });
}



document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
