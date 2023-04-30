onEvent('recipes', (event) => {
    const id_prefix = 'ico:recipetypes/thermal/sawmill/';
    const recipes = [
        /*{
            input: 'item',//Input item
            outputs: [//Output items
                Item.of('item'),
                Item.of('item').chance(value)//exportprobability
            ],
            id: 'id'
        }*/
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.sawmill(recipe.outputs, recipe.input).id(recipe.id);
    });
});
