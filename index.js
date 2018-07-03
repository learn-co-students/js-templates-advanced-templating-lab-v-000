function init() {
  //put any page initialization/handlebars initialization here
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  var result = template;

  document.getElementsbyTagName("main")[0].innerHTML += result;
}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


//create a form that can be used to both create and edit a recipe
//display the recipe data (name, ingredients, etc)
//use a partial with an iterator to display the recipe
