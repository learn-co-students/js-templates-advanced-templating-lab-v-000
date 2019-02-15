function init() {
  //put any page initialization/handlebars initialization here
  let formTemplate = document.getElementById('recipe-form-template').innerHTML
  let formTemplateFcn = Handlebars.compile(formTemplate);
  let formHTML = formTemplateFcn(
    { ingredients: ['','','','',''] }
  );

  document.getElementsByTagName('main')[0].innerHTML += formHTML;

  // register partials
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  //register helpers
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>') ;
  })
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function handleSubmit() {
  // Variable declarations
  
}
