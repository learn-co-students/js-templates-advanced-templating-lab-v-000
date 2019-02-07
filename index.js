function init() {
  //put any page initialization/handlebars initialization here
  function renderForm() {
    let formTemplate = document.getElementById("recipe-form-template").innerHTML;
    let compileForm = Handlebars.compile(formTemplate);
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
  Handlebars.registerHelper('displayIngredient', function() {
    return '<li name="ingredients">Quantity: Name: </li>';
  });
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
};
