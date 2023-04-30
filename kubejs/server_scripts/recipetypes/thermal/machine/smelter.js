onEvent('recipes', (event) => {
    const id_prefix = 'ico:recipetypes/thermal/smelter/';
    const recipes = [
        /*{
            inputs: [Item.of('item', value), 'item'],//Input item，Input quantity，Input item
            outputs: [Item.of('item', value)],//Output items
            id: 'id'
        }*/
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.smelter(recipe.outputs, recipe.inputs).id(recipe.id);
    });
});
