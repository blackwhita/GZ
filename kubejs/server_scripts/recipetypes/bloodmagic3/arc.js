/*onEvent('recipes', (event) => {
  const id_prefix = 'ico:recipetypes/alchemytable/arc/';
    const recipes = [
        {
            output: 'item',//Output items
            input: 'item',//Input item
            tool: '#bloodmagic:arc/reverter',//tool
            extraOutputs: [],//extra export
            consume: true,
            id: 'id'
        }
    ];
    recipes.forEach((recipe) => {
        const re = event.recipes.bloodmagic
            .arc(recipe.output, recipe.input, recipe.tool, recipe.extraOutputs)
            .consumeIngredient(recipe.consume)
            .id(recipe.id);
        if (recipe.outputFluid) {
            re.outputFluid(recipe.outputFluid);
        }
    });
});*/