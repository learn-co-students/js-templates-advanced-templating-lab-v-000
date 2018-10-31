function init() {

  function showForm() {

    let recipe = {
      name: '',
      description: '',
      ingredients: [{name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}]
    }

    let template = document.getElementById("recipe-form-template").innerHTML;
    let templateFn = Handlebars.compile(template);
    let html = templateFn(recipe);
    document.querySelector('main').innerHTML += html;
  }

  showForm();


}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

Handlebars.registerHelper('displayIngredient', function() {
  return new Handlebars.SafeString('Ingredient: <input type="text" name="ingredients" value="' + this.name + '"/><br />')
})



function handleSubmit() {
  let recipeName = document.getElementsByName('name')[0].value;
  let recipeDesc = document.getElementsByName('description')[0].value;
  let ingredients = document.getElementsByName('ingredients');

  let recipe = {
    name: recipeName,
    description: recipeDesc,
    ingredients: [{name: ingredients[0].value}, {name: ingredients[1].value}, {name: ingredients[2].value}, {name: ingredients[3].value}, {name: ingredients[4].value}]
  }

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);

  let template = document.getElementById("recipe-template").innerHTML;
  let templateFn = Handlebars.compile(template);
  let html = templateFn(recipe);
  document.querySelector('main').innerHTML = html;
}

function displayEditForm() {

  let recipeName = document.getElementById('name').innerHTML;
  let recipeDesc = document.getElementById('description').innerHTML;
  let ingredients = [document.getElementById('ingredient_0').innerHTML.trim(), document.getElementById('ingredient_1').innerHTML.trim(), document.getElementById('ingredient_2').innerHTML.trim(), document.getElementById('ingredient_3').innerHTML.trim(), document.getElementById('ingredient_4').innerHTML.trim()]

  let recipe = {
    name: recipeName,
    description: recipeDesc,
    ingredients: [{name: ingredients[0]}, {name: ingredients[1]}, {name: ingredients[2]}, {name: ingredients[3]}, {name: ingredients[4]}]
  }

  document.querySelector('main').innerHTML = '';

  let template = document.getElementById("recipe-form-template").innerHTML;
  let templateFn = Handlebars.compile(template);
  let html = templateFn(recipe);
  document.querySelector('main').innerHTML += html;
}
