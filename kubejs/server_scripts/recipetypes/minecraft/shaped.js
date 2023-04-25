onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'minecraft:furnace',
            pattern: [
                'ccc',
                'c c',
                'ccc'
            ],
            key: {
                c: '#forge:stone'
            },
            id: 'minecraft:furnace'
        },
        {
            output: 'minecraft:coarse_dirt',
            pattern: [
                ' c ',
                'cvc',
                ' c '
            ],
            key: {
                c: 'minecraft:cactus',
                v: '#forge:sandstone'
            },
            id: 'minecraft:coarse_dirt'
        },
        {
            output: 'minecraft:composter',
            pattern: [
                'a a',
                'a a',
                'cbc'
            ],
            key: {
                a: 'minecraft:oak_slab',
                b: 'minecraft:stripped_oak_log',
                c: 'minecraft:oak_planks'
            },
            id: 'minecraft:composter'
        },
        {
            output: 'minecraft:stone',
            pattern: [
                ' a ',
                ' a ',
                ' a '
            ],
            key: {
                a: 'minecraft:stone_pressure_plate'
            },
            id: 'minecraft:stone'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
