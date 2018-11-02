function init() {
  let template = document.getElementById("recipe-form-template").innerHTML;
  let templateFn = Handlebars.compile(template);

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  
  
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

