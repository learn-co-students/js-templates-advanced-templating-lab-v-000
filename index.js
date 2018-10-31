function registerHandlebars(){
  Handlebars.registerPartial(`recipe_form`, document.getElementById(`recipe-form`).innerHTML);

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
  let name = document.getElementById(`fname`).value;
  let description = document.getElementById(`fdescription`).value;
  let ingredients = document.getElementsbyName(`ingredients`) //array

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

function handleSubmit(){
  let recipe = recipeValues()
  let template = Handlebars.compile(getElementById(`recipe-template`).innerHTML);
  document.getElementById('main').innerHTML = template(recipe)
}


function init() {
  //put any page initialization/handlebars initialization here
  renderForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
