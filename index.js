function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function(name) {
    return '<li name="ingredients">' + name + '</li>';
  });
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial'));

  function renderForm() {
    const formTemplate = document.getElementById("recipe-form-template").innerHTML;
    const compileForm = Handlebars.compile(formTemplate);
    document.getElementById("main").innerHTML = compileForm();
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
  const context = {name: name};

  const recipeTemplate = document.getElementById("recipe-template").innerHTML;
  const compileForm = Handlebars.compile(recipeTemplate);
  document.getElementById("main").innerHTML += compileForm(context);
};
