onEvent('recipes', (event) => {
    const recipes = [
        {
            output: '2x minecraft:stone_pressure_plate',
            inputs: ['2x minecraft:cobblestone'],
            id: 'minecraft:stone_pressure_plate'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
    event.shapeless( 'minecraft:grass_block',['minecraft:dirt','hearthwell:crystal_green']).keepIngredient('hearthwell:crystal_green')
});
