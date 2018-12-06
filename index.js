let recipe = {
  name: '',
  description: '',
  ingredients: []
};


//////////////////
// DISPLAY FORM //
//////////////////
function displayRecipeForm() {

  let formSource = document.getElementById('recipe-form-template').innerHTML
  let formTemplate = Handlebars.compile(formSource);

  let formHTML = formTemplate(recipe);
  let bodyMain = document.querySelector('body main');
  bodyMain.innerHTML = formHTML;
}


/////////////////////////////////
// RETRIEVE RECIPE FORM VALUES //
/////////////////////////////////
function recipeFormValues() {
  recipe.name = document.getElementById("name").value;
  recipe.description = document.getElementById("description").value;
  recipe.ingredients = [];

  for (let ingredientNode of document.getElementsByName('ingredients')) {
    if (ingredientNode.value !== '') {
      recipe.ingredients.push(ingredientNode.value)
    }
  }
}


///////////////////
// CREATE RECIPE //
///////////////////
function renderRecipe() {
  recipeFormValues();
  let recipeSource = document.getElementById("recipe-template").innerHTML;
  let recipeTemplate = Handlebars.compile(recipeSource);
  //debugger;
  let recipeHTML = recipeTemplate(recipe)

  let bodyMain = document.querySelector('body main');
  bodyMain.innerHTML = recipeHTML;
}

//////////////////////////////////////////
// Event Listener Function: for 'click' //
//////////////////////////////////////////
function handleSubmit() {
  document.querySelector("#recipe-form #submit").addEventListener("click", renderRecipe());
}


///////////////
// EDIT FORM //
//////////////
function displayEditForm() {
  displayRecipeForm();
}


///////////////////////////////////////////////////////////
// A CONTAINER FUNCTION FOR ALL OF THE CUSTOM HANDLEBARS //
///////////////////////////////////////////////////////////
function runCustomHandlebars() {
  // [1] GENERATE INGREDIENT LIST ITEM [1]
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    if (ingredient) {
      return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>');
    }
  });

  // [2] GENERATE RECIPE PARTIAL [2]
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
}

function init() {
  //put any page initialization/handlebars initialization here
  displayRecipeForm();
  runCustomHandlebars();
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
