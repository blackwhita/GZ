/*onEvent('recipes', (event) => {
  const id_prefix = 'ico:recipetypes/alchemytable/array/';
    const recipes = [
        {
            input: 'item',//Input item
            addedInput: 'item',//secondary Input item
            output: 'item',//Output items
            texture: 'bindinglightningarray',//material quality
            id: 'id'
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.bloodmagic
            .array(recipe.output, recipe.input, recipe.addedInput)
            .texture(`bloodmagic:textures/models/alchemyarrays/${recipe.texture}.png`)
            .id(recipe.id);
    });
});*/