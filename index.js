function init() {
  //put any page initialization/handlebars initialization here
  function renderForm() {
    const formTemplate = document.getElementById("recipe-form-template").innerHTML;
    const compileForm = Handlebars.compile(formTemplate);
    const ingredientsContext = {ingredients: ["","","","",""]};
    document.getElementById("main").innerHTML = compileForm(ingredientsContext);
  };
  renderForm();

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>');
  });
};

function displayEditForm() {
  const recipeName = document.getElementById("recipeName").innerHTML;
  const recipeDescription = document.getElementById("recipeDescription").innerHTML;
  const ingredientsNodes = document.getElementsByName('ingredients');
  const recipeIngredients = [];

  for (let i = 0 ; i < ingredientsNodes.length ; i++) {
    recipeIngredients.push(ingredientsNodes[i].innerHTML);
  }
  const recipeContext = {name: recipeName, description: recipeDescription, ingredients: recipeIngredients};

  const formTemplate = document.getElementById("recipe-form-template").innerHTML;
  const compileForm = Handlebars.compile(formTemplate);
  document.getElementById("main").innerHTML = compileForm(recipeContext);
};

function handleSubmit() {
  const recipeName = document.getElementById("name").value;
  const recipeDescription = document.getElementById("description").value;
  const ingredientsNodes = document.getElementsByName('ingredients');
  const recipeIngredients = [];
  
  for (let i = 0 ; i < ingredientsNodes.length ; i++) {
    recipeIngredients.push(ingredientsNodes[i].value);
  }
  const recipeContext = {name: recipeName, description: recipeDescription, ingredients: recipeIngredients};

  const recipeTemplate = document.getElementById("recipe-template").innerHTML;
  const compileForm = Handlebars.compile(recipeTemplate);
  document.getElementById("main").innerHTML = compileForm(recipeContext);
};

document.addEventListener("DOMContentLoaded", function(event) {
  init()
});
