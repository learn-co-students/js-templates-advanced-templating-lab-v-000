function init() {
  //put any page initialization/handlebars initialization here

  //Register the recipe-details-partial
  Handlebars.registerPartial('recipeDetailsPartial',document.getElementById("recipe-details-partial").innerHTML)

  Handlebars.registerPartial('recipeFormPartial',document.getElementById("recipe-details-partial").innerHTML)

    //Register the custom helper
   Handlebars.registerHelper('displayIngredient', function(){
     return new Handlebars.SafeString(this.ingredient)
   });

  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  var typeOfSubmit = {submitType: "createRecipe();return false;"};

  //Add the form template to the DOM
  document.getElementsByTagName("main")[0].innerHTML += formTemplate(typeOfSubmit);

  //get the recipe template and add it to the DOM
  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML += recipeTemplate();


}

let recipeDetails = {};

function catchFormValues() {
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    let ingredients = document.getElementsByName("ingredients");
    // Using forEach
    var ingredientsArray = [];
    //ingredients.forEach(function(element){
    Array.from(ingredients).forEach(function(element){
      var newObject = {ingredient: element.value}
      ingredientsArray.push(newObject);
    });

    //Put description and ingredients in a variable hash
    recipeDetails = {
      name: name,
      description: description,
      ingredients: ingredientsArray
    }
}

function removeForm(){
  //var parent = document.getElementsByTagName("main");
  var recipeForm = document.getElementById("recipe-form");
    recipeForm.remove();
}

function getRecipeTemplate() {
  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
}

function addRecipeTemplateToDom() {
  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML += recipeTemplate(recipeDetails);
}

function createRecipe() {
    catchFormValues();  //gets the form values and assigns them to a global hash variable
    removeForm(); //Remove form from DOM
    // Get recipe Template
    //getRecipeTemplate();
    // Add recipeTemplate to DOM and pass in recipeDetails
    addRecipeTemplateToDom();
  };

  function displayEditForm() {
    //get the form from the template
    var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
    //add the submit type to the passed variables
    recipeDetails.submitType = "updateRecipe();return false;"
    //put the form on the page
    document.getElementsByTagName("main")[0].innerHTML += formTemplate(recipeDetails);
  };

  function updateRecipe() {
    //remove the recipe from the page
    //var recipeTemplate = document.getElementById("recipe-template");
    //recipeTemplate.remove();
    catchFormValues();
    removeForm(); //Remove form from DOM
    // Get recipe Template
    //getRecipeTemplate();
    // Add recipeTemplate to DOM and pass in recipeDetails
    addRecipeTemplateToDom();

  }

  document.addEventListener("DOMContentLoaded", function(event) {
    init()
  })
