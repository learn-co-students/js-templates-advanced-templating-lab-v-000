function getRecipes() {
  let name = document.getElementById('name').value;
  let description = document.getElementById('description').value;
  let ingredientsArr = document.getElementsByName('ingredients');
  let ingredients = [];
  for (let i = 0; i < ingredientsArr.length; i++){
    ingredients.push(ingredientsArr[i].value)
  }
  return {name: name, description: description, ingredients: ingredients}
}

function renderMain() {
  let template = document.getElementById("recipe-form-template").innerHTML;
  let templateFunction = Handlebars.compile(template);
  document.getElementById("main").innerHTML = templateFunction({'action': 'handleSubmit()'});
}

function handleSubmit() {
  let recipe = getRecipes();
  let template = document.getElementById("recipe-template").innerHTML;
  let tempfunction = Handlebars.compile(template);
  let html = tempfunction(recipe);
  document.getElementById("main").innerHTML = html;
}

function displayEditForm() {
  let name = document.getElementById('recipeName').innerHTML.trim();
  let description = document.getElementById('recipeDescription').innerHTML;
  let ingredientsArr = document.getElementsByName('ingredients');
  let ingredients = [];
  for (let i = 0; i < ingredientsArr.length; i++) {
    ingredients.push(ingredientsArr[i].innerHTML)
  }
  let template = document.getElementById('recipe-form-template').innerHTML;
  let tempfunction = Handlebars.compile(template);
  document.getElementById("main").innerHTML = tempfunction({
    name: name, description: description, ingredients: ingredients, action: 'handleSubmit()'
  });
}


function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerHelper('displayIngredient', function (ingredient) {
    if (ingredient !== '') {
      return new Handlebars.SafeString(`<li name="ingredients">${ingredient}</li>`);
    }
  })

  renderMain();

  
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
