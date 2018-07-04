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

function catchFormValues() {
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var ingredients = document.getElementsByName("ingredients");
    // Using forEach
    ingredientsArray = [];
    ingredients.forEach(function(element){
      var newObject = {ingredient: element.value}
      ingredientsArray.push(newObject);
    });

    //Put description and ingredients in a variable hash
    recipeDetails = {
      recipeName: name,
      recipeDescription: description,
      recipeIngredients: ingredientsArray
    }
}

function removeForm(){
  //var parent = document.getElementsByTagName("main");
  var recipeForm = document.getElementById("recipe-form");
    recipeForm.remove();
}

function getRecipeTemplate() {
  recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
}

function addRecipeTemplateToDom() {
  document.getElementsByTagName("main")[0].innerHTML += recipeTemplate(recipeDetails);
}


function createRecipe() {
    catchFormValues();  //gets the form values and assigns them to a global hash variable
    removeForm(); //Remove form from DOM
    // Get recipe Template
    getRecipeTemplate();
    // Add recipeTemplate to DOM and pass in recipeDetails
    addRecipeTemplateToDom();
  };
