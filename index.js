function init() {
  //put any page initialization/handlebars initialization here (new Handlebars) for custom helpers
  let main = document.getElementById('main');
  let recipeFormHTML = document.getElementById('recipe-form-template').innerHTML;
  let templateFn = Handlebars.compile(recipeFormHTML);

  let result = templateFn({ ingredients: ["", "", "", "", ""] });
  main.innerHTML = result;

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);
  Handlebars.registerHelper('displayIngredient', function(e) {
    e = Handlebars.Utils.escapeExpression(e);
    let result = '<li name="ingredients">' + e + '</li>';
    return new Handlebars.SafeString(result);
  })
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function handleSubmit() {
  let name = document.getElementById('name').value;
  //let getNames = document.querySelectorAll('#name');
  //let name = getNames[getNames.length - 1].value;
  let description = document.getElementById('description').value;
  //let getDescriptions = document.querySelectorAll('#description');
  //let description = getDescriptions[getDescriptions.length - 1].value;

  let getIngredients = document.getElementsByName('ingredients');
  let ingredients = [];
  //debugger
  let start = getIngredients.length - 5;
  for (let i = 0; i < getIngredients.length; i++) {
    ingredients.push(getIngredients[i].value);
  }

  let main = document.getElementById('main')
  let recipeTemplateHTML = document.getElementById('recipe-template').innerHTML;
  let templateFn = Handlebars.compile(recipeTemplateHTML);
  let result = templateFn({name: name, description: description, ingredients: ingredients});

  main.innerHTML = result;
}

function displayEditForm() {
  //let recipeNames = document.querySelectorAll('#recipeName');
  //let name = recipeNames[recipeNames.length - 1].innerHTML;
  let name = document.getElementById('recipeName').innerHTML;
  //let recipeDescriptions = document.querySelectorAll('#recipeDescription');
  //let description = recipeDescriptions[recipeDescriptions.length - 1].innerHTML
  let description = document.getElementById('recipeDescription').innerHTML;

  let getIngredients = document.getElementsByName("ingredients");
  let ingredients = [];
  //let start = getIngredients.length - 5;
  //for (let i = 0; i < getIngredients.length; i++) {
    //if(i >= start) {
    //  ingredients.push(getIngredients[i].innerHTML);
  //  }
//  }

  for (let i = 0; i < getIngredients.length; i++) {
    ingredients.push(getIngredients[i].innerHTML);
  }

  let recipeFormTemplateHTML = document.getElementById('recipe-form-template').innerHTML
  let templateFn = Handlebars.compile(recipeFormTemplateHTML)
  let result = templateFn({ name: name, description: description, ingredients: ingredients })

  document.querySelector('#main').innerHTML = result;
}
