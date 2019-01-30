function init() {
  //put any page initialization/handlebars initialization here

  let template = document.getElementById("recipe-form-template").innerHTML;
  let templateFn = Handlebars.compile(template);
  let result = templateFn({ingredients: ['', '', '', '', '']});
  
  document.getElementsByTagName("main")[0].innerHTML += result; 

  Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("recipe-details-partial").innerHTML); 

  Handlebars.registerHelper("displayIngredient", function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + "</li>");
  });

}

function handleSubmit(recipe) {
  let template = document.getElementById("recipe-template").innerHTML;
  let templateFn = Handlebars.compile(template);
  let result = templateFn({ name: recipe.name, description: recipe.description });
  document.getElementsByTagName("main")[0].innerHTML += result;
}






document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
