function init() {
  //put any page initialization/handlebars initialization here

  //this gets the template and stores it in a variable
  //get the form and render it to the page
  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  //this takes the template and adds it to a node
  document.getElementsByTagName("main")[0].innerHTML += formTemplate();

  //partial
  Handlebars.registerPartial('recipePartial', document.getElementById("recipe-details-partial").innerHTML);

  //get the recipe-template and render it to the page
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  debugger;

  //Add the html to the page
  var html = recipeTemplate({ ingredients: [
    {quantity: "1 cup", name: 'chicken'},
    {quantity: "3 nanoliters", name: 'stock'},
    {quantity: "12", name: 'noodles'}
    ]
  });
  document.getElementsByTagName("main")[0].innerHTML += recipeTemplate();




//////////////////////////////////////////////////////////////////////////
//this is telling javascript that we are turning a template into a partial
    //declaring that you are creating a partial
//you give the partial a name ('namePartial')which will be passed into the receiving template as a variable   {{> namePartial }}
//then you get the innerHTML of the template you are using as a partial
  Handlebars.registerPartial('namePartial', document.getElementById("partial-template").innerHTML)

//this is getting the template where you are going to place the partial
  //this is where the partial is going
  var template = Handlebars.compile(document.getElementById("main-template").innerHTML);

// at this point, the partial variable is in the receiving template and is waiting for the variables(data) it needs to render the innerHTML
  //here we are placing a value for the name: variable in the receiving template
  // this stores the html that is the result of the receiving template using the partial with the variable
  //you have to add this html to the page
  var html = template({name: 'Gordon Ramsay'});
  //document.getElementsByTagName("main")[0].innerHTML += html;
/////////////////////////////////////////////////////////////////////////////



//this is where the partial is going
  function renderMain() {
    var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
    var html = template({ingredient: 'test ingredient'});
  }


}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


//create a form that can be used to both create and edit a recipe
//display the recipe data (name, ingredients, etc)
//use a partial with an iterator to display the recipe
