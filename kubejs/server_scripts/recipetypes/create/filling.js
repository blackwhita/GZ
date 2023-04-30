onEvent('recipes', (event) => {
  const id_prefix = 'ico:recipetypes/create/filling/';
  const recipes = [
    /*{
        input: 'item',//Input item
        fluid: Fluid.of('fluid', value),//Input fluid，Input quantity
        output: 'item',//Output items 
        id: 'id'
    }*/
  ];

  recipes.forEach((recipe) => {
    event.recipes.create.filling(recipe.output, [recipe.fluid, recipe.input]).id(recipe.id);
  });
});