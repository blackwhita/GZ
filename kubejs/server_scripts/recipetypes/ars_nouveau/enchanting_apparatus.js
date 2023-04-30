/*onEvent('recipes', (event) => {
  const id_prefix = 'ico:recipetypes/ars_nouveau/enchanting_apparatus/';
  const recipes = [
    {
      inputs: [
        'item',//1
        'item',//2
        'item',//3
        'item',//4
        'item',//5
        'item',//6
        'item',//7
        'item',//8
      ],
      reagent: 'item',//The core item of an enchanter
      sourceCost: value,//Consume Magic Source，Maximum 10000//Negligible
      output: 'item',//Output items
      id: 'id'
    },
    {
      event
    }
  ]
  recipes.forEach((recipe) => {
    recipe.sourceCost
      ? event.recipes.ars_nouveau
        .enchanting_apparatus(recipe.output, recipe.reagent, recipe.inputs)
        .merge({ sourceCost: recipe.sourceCost })
        .id(recipe.id)
      : event.recipes.ars_nouveau
        .enchanting_apparatus(recipe.output, recipe.reagent, recipe.inputs)
        .id(recipe.id);
  });
});*/