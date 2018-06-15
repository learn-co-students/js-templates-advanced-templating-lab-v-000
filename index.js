function init() {
    //put any page initialization/handlebars initialization here
    const template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
    document.getElementById("recipe-form").innerHTML += template();

}
document.addEventListener("DOMContentLoaded", function(event) {
    init()
})

function createRecipe() {
    //const recipe = { name: document.getElementsByName("name")[0].value }

    const recipe = {
        name: document.getElementsByName("name")[0].value,
        // description: document.getElementsByName('description')[0].value,
        // ingredients: [
        //     { quantity: "1 cup", name: document.getElementsByName("ingredient")[0].value },
        //     { quantity: "3 nanoliters", name: document.getElementsByName("ingredient")[1].value },
        //     { quantity: "12", name: document.getElementsByName("ingredient")[2].value }
        // ]
    }
    console.log(recipe)
    const template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
    const html = template(recipe)
    document.getElementById("recipes").innerHTML += html;

    return false;

}