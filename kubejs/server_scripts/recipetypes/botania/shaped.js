onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'botania:diluted_pool',
            pattern: [
                '   ',
                'c c',
                'vcv'
            ],
            key: {
                c: 'botania:livingrock',
                v: 'hearthwell:myst_ingot'
            },
            id: 'botania:diluted_pool'
        },
        {
            output: 'botania:apothecary_default',
            pattern: [
                'aba',
                ' c ',
                'ded'
            ],
            key: {
                a: 'minecraft:cobblestone_slab',
                b: '#botania:petals',
                c: 'hearthwell:crystal',
                d: '#forge:cobblestone',
                e: 'hearthwell:myst_ingot'
            },
            id: 'botania:apothecary_default'
        },
        {
            output: 'botania:twig_wand',
            pattern: [
                ' ab',
                ' ca',
                'b  '
            ],
            key: {
                a: '#botania:petals',
                b: 'botania:livingwood_twig',
                c: 'hearthwell:crystal_green'
            },
            id: 'botania:twig_wand'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
