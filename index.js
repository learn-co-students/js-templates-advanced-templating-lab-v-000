function init() {
    //put any page initialization/handlebars initialization here
    let formTemplate = document.getElementById("recipe-form-template").innerHTML;
    let formTemplateFn = Handlebars.compile(formTemplate);
    document.getElementById('main').innerHTML = formTemplateFn({ingredients: ['', '', '', '', '']})

    Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);

    Handlebars.registerHelper('displayIngredient', function() {
      return "Hello"
    })

}
// function displayIngredient(ingredients) {
//   // for (ingredient of ingredients) {
//   //   return ingredient
//   // }
// }



document.addEventListener("DOMContentLoaded", function(event) {
    init()
})


function handleSubmit() {
  let recipe = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    ingredients: {}
  }

  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

 let result = recipeTemplate(recipe);

 document.getElementsByTagName("main")[0].innerHTML += result;
}
