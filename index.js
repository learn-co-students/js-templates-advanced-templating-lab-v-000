function init() {
  //put any page initialization/handlebars initialization here
  let recipe = {
      description: 'yummy chicken noodle soup',
      ingredients: [
        {quantity: "1 cup", name: 'chicken'},
        {quantity: "3 nanoliters", name: 'stock'},
        {quantity: "12", name: 'noodles'}
      ]
    }

    let template = document.getElementById("my-template").innerHTML;
    let templateFn = Handlebars.compile(template);
    let html = templateFn(recipe);
    document.getElementsByTagName("main")[0].innerHTML += html;
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
