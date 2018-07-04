function init() {
  //put any page initialization/handlebars initialization here
  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  var typeOfSubmit = {submitType: "createRecipe();return false;"};

  //Add the form template to the DOM
  document.getElementsByTagName("main")[0].innerHTML += formTemplate(typeOfSubmit);

  //get the recipe template and add it to the DOM
  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML += recipeTemplate();

}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


function createRecipe() {
    catchFormValues();  //gets the form values and assigns them to a global hash variable
    removeForm(); //Remove form from DOM
    // Get recipe Template
    getRecipeTemplate();
    // Add recipeTemplate to DOM and pass in recipeDetails
    addRecipeTemplateToDom();
  };
