/*onEvent('recipes', (event) => {
    const id_prefix = 'ico:recipetypes/botania/pure_daisy/';
    const recipes = [
        {
            input: 'block',//Block before conversion
            output: 'block',//Blocks before conversion Blocks after conversion
            id: 'id'
        }
    ];
    recipes.forEach((recipe) => {
        let ingredient =
            recipe.input.charAt(0) == '#'
                ? { type: 'tag', tag: recipe.input.slice(1) }
                : { type: 'block', block: recipe.input };
        const re = event.custom({
            type: 'botania:pure_daisy',
            input: ingredient,
            output: { name: recipe.output }
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});*/