onEvent('recipes', (event) => {
    const id_prefix = 'ico:recipetypes/immersiveengineering/sawmill/';
    const recipes = [
        /*{
            input: 'item',//Input item
            output: Item.of('item', 8),//Output items
            extraOutput: Item.of('item').chance(value),//extra Output items，exportprobability(<=1)
            id: 'id'
        }*/
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering
            .sawmill(recipe.output, recipe.input, [{ stripping: false, output: recipe.extraOutput }])
            .id(recipe.id);
    });
});
