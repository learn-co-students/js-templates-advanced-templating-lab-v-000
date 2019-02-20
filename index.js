function init() {
    //put any page initialization/handlebars initialization here
    let formTemplate = document.getElementById("recipe-form-template").innerHTML;
    let formTemplateFn = Handlebars.compile(formTemplate);
    document.getElementById('main').innerHTML = formTemplateFn({ingredients: ['', '', '', '', '']})

}
document.addEventListener("DOMContentLoaded", function(event) {
    init()
})


function handleSubmit() {
  console.log(document.getElementsByName("ingredients").value)
  let recipe = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    ingredient: document.getElementsByName("ingredients").value
  }

  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

 let result = recipeTemplate(recipe);

 document.getElementsByTagName("main")[0].innerHTML += result;
}
