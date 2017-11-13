function init() {
  //put any page initialization/handlebars initialization here
  createFormTemplate()
  // register recipeDetailsPartial
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

// initiate createRecipe()
function createFormTemplate() {
  // Define the date to be put into the form
  var form = {
    name: 'Name:',
    description: "Description:",
    ingredients: [
    {ingredient: "Ingredient:"},
    {ingredient: "Ingredient:"},
    {ingredient: "Ingredient:"},
    {ingredient: "Ingredient:"},
    {ingredient: "Ingredient:"},
  ]
};

  // Grab the template script
  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
// Put the data inside the form template
  var formHTML = formTemplate(form);
  document.getElementsByTagName("main")[0].innerHTML += formHTML;
}



// createRecipe()
function createRecipe(){
  // Grab and compile template from index.html
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

  // Define data variable, user input
  var recipeFromInput = {
      name: document.getElementById("recipe-name").value,
      description: document.getElementById("recipe-description").value,
      ingredients: [
        {ingredient: document.getElementsByName("ingredients")[0].value},
        {ingredient: document.getElementsByName("ingredients")[1].value},
        {ingredient: document.getElementsByName("ingredients")[2].value},
        {ingredient: document.getElementsByName("ingredients")[3].value},
        {ingredient: document.getElementsByName("ingredients")[4].value},
      ]
    };
  // recipeName is getting here with the correct value

  // Now we populate our template with our date
  var recipeHTML = recipeTemplate(recipeFromInput);

  var recipeContainer = document.getElementById("recipe-container");
  recipeContainer.innerHTML = recipeHTML

}
