onEvent('recipes', (event) => {
    const id_prefix = 'ico:recipetypes/mythicbotany/shaped/';
    const recipes = [
        /*{
            output: 'kubejs:basic_circuit_package',
            pattern: ['AA ', 'BB ', 'CCD'],
            key: {
                A: 'item'
            },
            id: `${id_prefix}id`
        }*/
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
