function init() {
  //put any page initialization/handlebars initialization here
  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  var typeOfSubmit = {submitType: "createRecipe();return false;"};

  document.getElementsByTagName("main")[0].innerHTML += formTemplate(typeOfSubmit);

    //Register the custom helper
  Handlebars.registerHelper('displayIngredient', function(){
    return new Handlebars.SafeString(this.ingredient)
  });


  //Register the recipe-details-partial
  Handlebars.registerPartial('recipeDetailsPartial',document.getElementById("recipe-details-partial").innerHTML)

}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
