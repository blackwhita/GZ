onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'naturesaura:gold_fiber',
            pattern: [
                'aba',
                'bcb',
                'aba'
            ],
            key: {
                a: 'minecraft:oak_leaves',
                b: 'minecraft:yellow_dye',
                c: 'hearthwell:myst_dust'
            },
            id: 'naturesaura:gold_fiber'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
