

function createRecipe(){
  let recipe = {}
}

function displayEditForm(){

}

function updateRecipe(){

}

function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  function renderMain() {
    let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
    let html = template({name: 'Gordon Ramsay'});
  }

  Handlebars.registerHelper('displayIngredient', function(){

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
