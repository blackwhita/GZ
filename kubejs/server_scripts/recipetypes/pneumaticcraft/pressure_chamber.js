onEvent('recipes', (event) => {
  const id_prefix = 'ico:recipetypes/pneumaticcraft/pressure_chamber/';
    const recipes = [
        /*{
            inputs: [//Input item
                { tag: 'tag', count: value },
                { item: 'item', count: value }
            ],
            pressure: value,//Required pressure (can be negative)
            results: [{ item: 'item', count: value }],//Output items，Output quantity
            id: 'id'
        }*/
    ];
    recipes.forEach((recipe) => {
        let ingredients = [];
        recipe.inputs.forEach((input) => {
            input.type = 'pneumaticcraft:stacked_item';
            ingredients.push(input);
        });

        event
            .custom({
                type: 'pneumaticcraft:pressure_chamber',
                inputs: ingredients,
                pressure: recipe.pressure,
                results: recipe.results
            })
            .id(recipe.id);
    });
});
