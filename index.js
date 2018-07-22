function init() {
  //put any page initialization/handlebars initialization here
  console.log('Run init');

  // Register Partials
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);

  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);

  // Register Helper
  Handlebars.registerHelper('displayIngredient', function() {
    // console.log('this is = ', this);
    if (this != '') {
      // console.log('show string');
      return new Handlebars.SafeString("<li>" + this + "</li>")
    } // else {
    //   console.log('show nothing');
    // }
  })

  // Add recipe form to HTML view
  const formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  const params = {"submit_value" : "createRecipe();return false;"};
  const newForm = formTemplate(params);
  document.getElementById("show-form").innerHTML += newForm;
}


function createRecipe() {
  console.log('Create Recipe');
  const recipeName = document.getElementById("name").value;
  const recipeDescription = document.getElementById("description").value;
  const recipeIngredients = document.getElementsByName("ingredients");

  const newRecipe = {};
  newRecipe["description"] = recipeName;
  newRecipe["name"] = recipeDescription;
  newRecipe["ingredients"] = [];
  
  // NOTE : forEach not working with Learn tests
  // recipeIngredients.forEach(function(ingredient) {
  //   newRecipe["ingredients"].push(ingredient.value);
  // });
  
  for (let i=0; i<recipeIngredients.length; i++ ) {
    newRecipe["ingredients"].push(recipeIngredients[i].innerHTML); 
  }

    // console.log('new recipe = ', newRecipe);
  
  // Add recipe template to HTML view
  const recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  const showRecipe = recipeTemplate(newRecipe);
  document.getElementById("show-recipes").innerHTML += showRecipe;
  
  // Only allow single recipe creation for now
  document.getElementById("show-form").innerHTML = '';
}

function displayEditForm() {
  console.log('Display Edit Form');
  
  // Get recipe values
  const recipe = document.getElementById("recipe");
  const recipeName = recipe.getElementsByTagName('p')[1].innerHTML;
  const recipeDescription = recipe.getElementsByTagName('p')[0].innerHTML;
  const recipeIngredients = recipe.querySelectorAll('ul li');
  
  const editRecipe = {};
  editRecipe["name"] = recipeName;
  editRecipe["description"] = recipeDescription;
  editRecipe["ingredients"] = [];

  // NOTE : forEach not working with Learn tests
  // recipeIngredients.forEach(function(ingredient) {
  //   editRecipe["ingredients"].push(ingredient.innerHTML); 
  // });
  
  for (let i=0; i<recipeIngredients.length; i++ ) {
    editRecipe["ingredients"].push(recipeIngredients[i].innerHTML); 
  }
  
  editRecipe["submit_value"] = "updateRecipe();return false;";
  // console.log('show recipe = ', editRecipe);
  
  // Add recipe form to HTML view
  const formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  const editForm = formTemplate(editRecipe);
  document.getElementById("show-form").innerHTML = editForm;
  
  // Hide current recipe showing
  document.getElementById("show-recipes").innerHTML = '';
  
  // Update form submission action
  // const form = document.getElementById('recipe-form').onsubmit = function() {updateRecipe()};
}

function updateRecipe() {
  console.log('Update Recipe');

  const recipeName = document.getElementById("name").value;
  const recipeDescription = document.getElementById("description").value;
  const recipeIngredients = document.getElementsByName("ingredients");

  const newRecipe = {};
  newRecipe["description"] = recipeName;
  newRecipe["name"] = recipeDescription;
  newRecipe["ingredients"] = [];
  
  for (let i=0; i<recipeIngredients.length; i++ ) {
    newRecipe["ingredients"].push(recipeIngredients[i].innerHTML); 
  }
  
  // Add recipe template to HTML view
  const recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  const showRecipe = recipeTemplate(newRecipe);
  document.getElementById("show-recipes").innerHTML += showRecipe;
  
  // Only allow single recipe creation for now
  document.getElementById("show-form").innerHTML = '';

}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
