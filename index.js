function init() {
  //put any page initialization/handlebars initialization here

  let template = document.getElementById("recipe-form-template").innerHTML;
  let templateFn = Handlebars.compile(template);
  let result = templateFn();
  
  document.getElementsByTagName("main")[0].innerHTML += result; 

}








document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
