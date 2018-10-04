function init() {
  //put any page initialization/handlebars initialization here
  var recipe = {
  description: 'yummy chicken noodle soup',
  ingredients: [
    {quantity: "1 cup", name: 'chicken'},
    {quantity: "3 nanoliters", name: 'stock'},
    {quantity: "12", name: 'noodles'}
  ]
}
 
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var html = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += html;
}

function createRecipe() {

    var recipe = 
    {
    description: document.getElementById("description").value,
    ingredients: [
      {name: document.getElementsByName("ingredients")[0].value},
      {name: document.getElementsByName("ingredients")[1].value},
      {name: document.getElementsByName("ingredients")[2].value},
      {name: document.getElementsByName("ingredients")[3].value},
      {name: document.getElementsByName("ingredients")[4].value},
      ]
      
    }
  
   var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var html = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += html
}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
function renderMain() {
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var html = template({name: 'Gordon Ramsay'});
}

function displayEditForm() {
  
  
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var html = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += html;
}
