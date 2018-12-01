
function createForm(){
  let recipeForm = document.getElementById('recipe-form-template').innerHTML;
  let templateFn = Handlebars.compile(recipeForm);
  document.getElementsByTagName('main')[0].innerHTML = templateFn();
};

function setupHandlebars(){
  Handlebars.registerHelper('displayIngredient', function(ingredient){
  return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>')
  })

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)
  }


  // function recipeValues() {
  //   let template = document.getElementById("recipe-template").innerHTML
  //   let templateFn = Handlebars.compile(template)
  //
  //   let name = document.getElementById("name").value
  //   let description = document.getElementById("description").value
  //   let allIngredients = document.getElementsByName("ingredients")
  //
  //   let ingredients = []
  //   for(let i=0; i<allIngredients.length; i++){
  //     ingredients.push(allIngredients[i].value)
  //   }
  // }



function init() {
  //put any page initialization/handlebars initialization here
  setupHandlebars()
  createForm()

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})




function handleSubmit(){
  // recipeValues()
  let template = document.getElementById("recipe-template").innerHTML
  let templateFn = Handlebars.compile(template)

  let name = document.getElementById("name").value
  let description = document.getElementById("description").value
  let allIngredients = document.getElementsByName("ingredients")

  let ingredients = []
  for(let i=0; i<allIngredients.length; i++){
    ingredients.push(allIngredients[i].value)
  }

  let recipe = {name, description, ingredients}
  document.getElementById('main').innerHTML = templateFn(recipe);
}



function displayEditForm(){
  let template = document.getElementById("recipe-form-template").innerHTML
  let templateFn = Handlebars.compile(template)

  let name = document.getElementById("name").value
  let description = document.getElementById("description").value
  let allIngredients = document.getElementsByName("ingredients")

  let ingredients = []
  for(let i=0; i<allIngredients.length; i++){
    ingredients.push(allIngredients[i].value)
  }

  

}
