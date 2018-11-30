function init() {
  //put any page initialization/handlebars initialization here
  let recipeForm = document.getElementById('recipe-form-template').innerHTML;
  let template = Handlebars.compile(recipeForm);
  document.getElementsByTagName('main')[0].innerHTML = template();

  Handlebars.registerHelper('displayIngredient', function(ingredient){
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>')
  })

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})



function handleSubmit(){

}



function displayEditForm(){
}
