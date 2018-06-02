function init() {
  displayNewForm();
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML);
  Handlebars.registerHelper('displayIngredient', ingredient => new Handlebars.SafeString("<li>" + ingredient + "</li>"));
}

function displayNewForm(){
  const template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementById('main').innerHTML = template(
    {submitFunc: "createRecipe()",
     nVal:  "",
     dVal:  "",
     iVal1: "",
     iVal2: "",
     iVal3: "",
     iVal4: "",
     iVal5: ""});
}

function displayEditForm(){
  const template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementById('main').innerHTML = template(
    {submitFunc: "updateRecipe()",
     nVal:  document.getElementsByTagName('h3')[0].textContent,
     dVal:  document.getElementsByTagName( 'p')[0].textContent,
     iVal1: document.getElementsByTagName('li')[0].textContent,
     iVal2: document.getElementsByTagName('li')[1].textContent,
     iVal3: document.getElementsByTagName('li')[2].textContent,
     iVal4: document.getElementsByTagName('li')[3].textContent,
     iVal5: document.getElementsByTagName('li')[4].textContent});
}

function createRecipe(){
  const recipe = {
    name: document.getElementsByName('name')[0].value,
    description: document.getElementsByName('description')[0].value,
    ingredients: []
  };
  for (let i=0; i<5; i++){recipe.ingredients.push( document.getElementsByName('ingredients')[i].value )}
  const template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById('main').innerHTML = template(recipe);
}

function updateRecipe(){
  createRecipe();
}

document.addEventListener("DOMContentLoaded", function(event) {
  init();
});
