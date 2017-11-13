<!-- 'main'is where the recipe-form-template will go -->
<main id="main">
  <a href="#" onclick="createFormTemplate();">Load Recipe Form</a>
</main>

<!-- Recipte form template -->
<script id="recipe-form-template" type="text/x-handlebars-template">
  <form id="recipe-form" onclick="createRecipe();">
    {{name}} <input type=text id="recipe-name"><br>
    {{submit}} <input type="submit"  value="Submit">
  </form>
</script>
