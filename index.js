function init() {
  //put any page initialization/handlebars initialization here
  let formTemplate = document.getElementById('recipe-form-template').innerHTML;
  // Compile a template in JavaScript by using Handlebars.compile
  let formTemplateFn = Handlebars.compile(formTemplate);                   // 5 ingredients to fill
  document.getElementById('main').innerHTML = formTemplateFn({ingredients: ['','','','','']});

             // Handlebars partials allow for code reuse by creating shared templates
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);
             // Helpers receive the current context as the 'this' context of the function
  Handlebars.registerHelper('displayIngredient', function(ingredient){
    // If your helper returns HTML that you do not want escaped, make sure to return a new Handlebars.SafeString
    return new Handlebars.SafeString('<li name="ingredients">'+ ingredient + '</li>');
  })
}

function handleSubmit() {
  // empty object
  let recipe = {};
  let name = document.getElementById('name');
  let description = document.getElementById('description');
  let ingredients = document.getElementsByName('ingredients');
  // assigning properties to object
  recipe.name = name.value;
  recipe.description = description.value;
  recipe.ingredients = [];

  for (let element of ingredients) {
    // retrieving the input value of the element in 'ingredients' name tag
    recipe.ingredients.push(element.value);
  }

  let recipeTemplate = document.getElementById('recipe-template').innerHTML;
  let recipeTemplateFn = Handlebars.compile(recipeTemplate);
  document.getElementById('main').innerHTML = recipeTemplateFn(recipe);
}

function displayEditForm() {
  let recipe = {};
  let name = document.getElementById('recipeName');
  let description = document.getElementById('recipeDescription');
  let ingredients = document.getElementsByName('ingredients');

  recipe.name = name.innerHTML;
  recipe.description = description.innerHTML;
  recipe.ingredients = [];

  for (let element of ingredients) {
    // retrieving the set value of [object HTMLLIElement]
    recipe.ingredients.push(element.innerHTML);
  }

  let recipeFormTemplate = document.getElementById('recipe-form-template').innerHTML;
  let recipeFormTemplateFn = Handlebars.compile(recipeFormTemplate);
  document.getElementById('main').innerHTML = recipeFormTemplateFn(recipe);
}

document.addEventListener('DOMContentLoaded', function(event) {
  init()
});
