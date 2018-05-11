function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);

  function renderRecipe() {
    var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
    var html = template({name: 'Gordon Ramsay'});
  }

}




document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
