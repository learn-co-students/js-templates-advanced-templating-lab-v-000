// function handlebar() {
    // get template script
    var source = document.getElementById("recipe-template").innerHTML;
    // // compile template
    var template = Handlebars.compile(source);

    var context = {
        name: "Chocolate Chip Cookies",
        description: "Crispy on the outside, gooey on the inside"
    };
    // // pass data to template
    var html = template(context);
// };
    // function createRecipe() {
    //   var name = document.getElementById("name");
    //   var description = document.getElementById("description"); 
    //   var recipe = {name, description}
    //   return recipe;
    // }
