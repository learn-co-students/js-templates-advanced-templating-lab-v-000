function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function(name) {
    return '<li name="ingredients">' + name + '</li>';
  });
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);

  function renderForm() {
    const formTemplate = document.getElementById("recipe-form-template").innerHTML;
    const compileForm = Handlebars.compile(formTemplate);
    const context = {ingredients: ["","","","","",""]};
    document.getElementById("main").innerHTML = compileForm(context);
  };

  renderForm();
};
document.addEventListener("DOMContentLoaded", function(event) {
  init()
});

function displayEditForm() {

};
function handleSubmit() {
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const context = {name: name, description: description};

  const recipeTemplate = document.getElementById("recipe-template").innerHTML;
  const compileForm = Handlebars.compile(recipeTemplate);
  document.getElementById("main").innerHTML += compileForm(context);

  // better solution:

  // var recipe = {}
  // var nameNode = document.getElementById('name');
  // var descriptionNode = document.getElementById('description');
  // var ingredientNodes = document.getElementsByName('ingredients');
  // recipe.name = nameNode.value;
  // recipe.description = descriptionNode.value;
  // recipe.ingredients = [];
  // for(var i = 0 ; i < ingredientNodes.length ; i++) {
  //   recipe.ingredients.push(ingredientNodes[i].value);
  // }
  // var recipeTemplate = document.getElementById("recipe-template").innerHTML;
  // var recipeTemplateFn = Handlebars.compile(recipeTemplate);
  // document.getElementById('main').innerHTML = recipeTemplateFn(recipe);
};
