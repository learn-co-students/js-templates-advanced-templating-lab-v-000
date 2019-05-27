function setupHandleBars() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial("recipeFormPartial", document.getElementById("recipe-form-partial").innerHTML);
  Handlebars.registerHelper('displayIngredient', function(ingredientEl) {
    return ingredientEl.value;
  })
}

function init() {
  //put any page initialization/handlebars initialization here
  setupHandleBars();
  
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var html = template({
    submitAction: 'createRecipe()'
  });
  document.getElementById('main').innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


function displayEditForm() {
  var name = document.getElementById('recipe-name').innerText;
  var description = document.getElementById('recipe-description').innerText;
  
  var ingredientList = document.getElementById('recipe-ingredients');
  // ingredientList (ul) is an HTML5 collection which looks like an array but it is not
  // using Array.from we can convert it to an array and use 'map' on it to get the innerText
  var ingredients = Array.from(ingredientList.children).map(li => li.innerText);

  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  var recipeHTML = template({
    name: name,
    description: description,
    ingredients: ingredients,
    submitAction: 'updateRecipe()'
  });

  document.getElementById('main').innerHTML = recipeHTML;
}

function createRecipe() {
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var formValues = getRecipeFormValues();
  var recipeHTML = template(formValues);
  document.getElementById('main').innerHTML = recipeHTML;
}

function updateRecipe() {
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var formValues = getRecipeFormValues();
  var recipeHTML = template(formValues);
  document.getElementById('main').innerHTML = recipeHTML; 
}


function getRecipeFormValues() {
  var name = document.getElementsByName('name')[0].value;
  var description = document.getElementsByName('description')[0].value;
  var ingredients = document.getElementsByName('ingredients');

  return {
    name: name,
    description: description,
    ingredients: ingredients
  }
}