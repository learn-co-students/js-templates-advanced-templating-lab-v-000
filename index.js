function init() {
    //put any page initialization/handlebars initialization here
    var formTemplate = document.getElementById("recipe-form-template").innerHTML;
    var formTemplateFn = Handlebars.compile(formTemplate);
    document.getElementById('main').innerHTML = formTemplateFn({ingredients: ['', '', '', '', '']})

}
document.addEventListener("DOMContentLoaded", function(event) {
    init()
})
