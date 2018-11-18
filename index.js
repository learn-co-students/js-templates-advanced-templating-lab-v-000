//
function init() {
  //put any page initialization/handlebars initialization here
  renderMainForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
//

function renderMainForm() {
  let html  = document.getElementById("recipe-form-template").innerHTML
  document.getElementById("main").innerHTML = html
}

function handleSubmit() {

}
