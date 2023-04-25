onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'hearthwell:prayer_letter',
            pattern: [
                '   ',
                'cc ',
                '   '
            ],
            key: {
                c: '#minecraft:wooden_pressure_plates'
            },
            id: 'hearthwell:prayer_letter'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
