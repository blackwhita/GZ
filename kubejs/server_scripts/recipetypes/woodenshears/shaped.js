onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'woodenshears:wooden_shears',
            pattern: [
                ' a ',
                ' ba',
                '   '
            ],
            key: {
                a: 'minecraft:oak_planks',
        b: 'hearthwell:crystal'
            },
            id: 'woodenshears:wooden_shears'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
