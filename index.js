//put any page initialization/handlebars initialization here

function init() {
  handlebarsRegistration();
  createForm();
}

function createForm() {
  const template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML += template({'submitAction': 'createRecipe()'});
}

function handlebarsRegistration() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li>' + ingredient + '</li>');
  })
}

function createRecipe() {
  const name = document.getElementById("name").value;
  const description = document.getElementById("recipeDescription").value;
  const ingredientsNodes = document.getElementsByName("ingredients");
  let ingredientsList = []
  for (let i = 0; i < ingredientsNodes.length; i++) {
    if(ingredientsNodes[i].value !== "") {
    ingredientsList.push(ingredientsNodes[i].value)
    }
  }

  const recipe = {'name': name, 'description': description, 'ingredients': ingredientsList};

  const template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  const result = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += result;
}

function updateRecipe() {
  createRecipe();
}

function displayEditForm() {
  const template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
