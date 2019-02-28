function init() {
  let formTemplateFn = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementById('main').innerHTML = formTemplateFn({name: '', description: '', ingredients: ['', '', '', '', '']})
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


