function init() {
  //put any page initialization/handlebars initialization here
   Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
   Handlebars.registerPartial('recipeFormPartial',document.getElementById("recipe-form-template").innerHTML);


  Handlebars.registerHelper("displayIngredient",function(ingredient){
    return Handlebars.SafeString("<p>{{quantity}} {{name}}</p>");
  });
  
  var template=Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  
  var dest=document.getElementById("main");
  var result=template();
  dest.innerHTML=result;
 
}
document.addEventListener("DOMContentLoaded", function(event) {
  init();
  
  
  
  
});

function createRecipe(){
  var name=document.getElementsByName("name")[0].value;
  var description=document.getElementsByName('description')[0].value;
  var ings=[];
  var ingNodes=document.getElementsByName("ingredients");
  for(const node in ingNodes){
    ings.push(node.value);
  }

  
  
  var template=Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var result=template({"name":name, "description":description, "ingredients":ings});
  
  document.getElementById("main").innerHTML+=result;
  
}



function displayEditForm(){
  var name=document.getElementsByName("name")[0].value;
  var description=document.getElementsByName('description')[0].value;
  var ings=[];
  
  
  var template=Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var result=template({"name":name, "description":description, "ingredients":ings});
  document.getElementById("main").innerHTML+=result;
  
}

function updateRecipe(){
  var name=document.getElementsByName("name")[0].value;
  var description=document.getElementsByName('description')[0].value;
  var ings=[];
  
  
  var template=Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var result=template({"name":name, "description":description, "ingredients":ings});
  document.getElementById("main").innerHTML+=result;
  
}




