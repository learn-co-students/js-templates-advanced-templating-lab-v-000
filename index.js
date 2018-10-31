function registerHandlebars(){
  Handlebars.registerPartial(`recipeFormPartial`, document.getElementById(`recipe-form-partial`).innerHTML);

  Handlebars.registerPartial(`recipeDetailsPartial`, document.getElementById(`recipe-details-partial`).innerHTML);

  Handlebars.registerHelper(`displayIngredient`, function(){
    return new Handelbars.SafeString(this.ingredients)
  })
};

function renderForm(){
  let formTemplate = Handlebars.compile(document.getElementById(`recipe-form-template`).innerHTML);
  document.getElementsByTagName(`main`)[0].innerHTML += formTemplate();
};

function recipeValues(){
  let name = document.getElementById(`name`).value;
  let description = document.getElementById(`description`).value;
  let ingredients = document.getElementsByName(`ingredients`) //array

  let ingArray = []
  for(let i=0; i < ingredients.length; i++){
    if (ingredients[i].value !== "") {
      ingArray.push(ingredients[i].value)
    }
  }

  let recipe = {
    name: name,
    description: description,
    ingredients: ingArray
  }

  return recipe
};

function createRecipe(){
  let recipe = recipeValues()
  let template = Handlebars.compile(document.getElementById(`recipe-template`).innerHTML);
  document.getElementById('main').innerHTML = template(recipe)
}

function displayEditForm(){
  Handlebars.compile(document.getElementById(`recipe-form-template`).innerHTML)
};

function updateRecipe(){
  Handlebars.compile(document.getElementById('recipe-template').innerHTML)
}


function init() {
  //put any page initialization/handlebars initialization here
  registerHandlebars()
  renderForm()

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
