onEvent('recipes', (event) => {
    const recipes = [
        {
            output: Item.of('create:andesite_alloy', 2),
            pattern: [
                'bc ',
                'cb ',
                '   '
            ],
            key: {
                c: 'botania:manasteel_nugget',
                b: '#forge:stone'
            },
            id: 'create:andesite_alloy'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
