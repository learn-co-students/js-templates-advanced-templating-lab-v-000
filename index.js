function init() {
  //put any page initialization/handlebars initialization here
  //Handlebars registration code (think helpers & partials)
  let recipe = {
    ingredients: ["", "", "", "", "", "", "", "", "", ""]
  }
  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  let result = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML = result;

  Handlebars.registerPartial('recipeDetailsPartial',
  document.getElementById("recipe-details-partial").innerHTML);

  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString('<li name="ingredients">' + this + "</li>")
  })
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function handleSubmit() {
  let name = document.getElementById('name').value;
  let description = document.getElementById('description').value;
  let ingredientNodes = document.getElementsByName('ingredient');
  let ingredients = [];
  for(var i=0; i<ingredientNodes.length; i++) {
    if(!!ingredientNodes[i].value) {
      ingredients.push(ingredientNodes[i].value)
    }
  }
  let recipe = {
    name: name,
    description: description,
    ingredients: ingredients
  }
  let template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  let result = template(recipe)
  document.getElementsByTagName("main")[0].innerHTML = result;
}

function displayEditForm() {
  let name = document.getElementById('name').innerHTML;
  let description = document.getElementById('description').innerHTML;
  let ingredientNodes = document.getElementsByName('ingredients');
  let ingredients = [];
  for(var i=0; i<ingredientNodes.length; i++) {
    ingredients.push(ingredientNodes[i].innerHTML);
  }
  let recipe = {
    name: name,
    description: description,
    ingredients: ingredients
  }
  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  let result = template(recipe)//insert the context here - recipe info
  document.getElementsByTagName("main")[0].innerHTML = result;
}
