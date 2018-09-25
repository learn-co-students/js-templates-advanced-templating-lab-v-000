

function createRecipe(){
  let ing = document.getElementsByName('ingredients');

  let ingArray = []
  for(let i=0; i < ing.length; i++){
    ingArray.push(ing[i].value)
  }

  let recipe = {
    name: document.getElementById('name').value,
    description: document.getElementById('description').value,
    ingredients: ingArray
  }

  let template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);

  let result = template(recipe);
}

function displayEditForm(){
  Handlebars.compile(document.getElementById('recipe-form-template').innerHTML)
}

function updateRecipe(){
  Handlebars.compile(document.getElementById('recipe-template').innerHTML)
}

function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form").innerHTML)
  // function renderMain() {
  //   let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  //   let html = template({name: 'Gordon Ramsay'});
  // }

  Handlebars.registerHelper('displayIngredient', function(){
    Handlebars.SafeString(this.ingredients)
  })
}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


// let recipe = {
//   description: 'yummy chicken noodle soup',
//   ingredients: [
//     {quantity: "1 cup", name: 'chicken'},
//     {quantity: "3 nanoliters", name: 'stock'},
//     {quantity: "12", name: 'noodles'}
//   ]
// }
//
// let template = Handlebars.compile(document.getElementById("my-template").innerHTML);
// let html = template(recipe);
// }
