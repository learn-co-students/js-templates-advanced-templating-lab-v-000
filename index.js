function init() {
  //put any page initialization/handlebars initialization here
  // let recipe = {
  //     description: 'yummy chicken noodle soup',
  //     ingredients: [
  //       {quantity: "1 cup", name: 'chicken'},
  //       {quantity: "3 nanoliters", name: 'stock'},
  //       {quantity: "12", name: 'noodles'}
  //     ]
  //   }

    let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
    let html = template({});
    document.getElementsByTagName("main")[0].innerHTML += html;
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
