onEvent('recipes', (event) => {
  const id_prefix = 'ico:recipetypes/create/pressing/';
  const recipes = [
    /*{
      output: 'item',//Output items
      inputs: ['item'],//Input item
      id: 'id'
    }*/
  ];
  recipes.forEach((recipe) => {
    event.recipes.create.pressing(recipe.output, recipe.inputs).id(recipe.id);
  });
});