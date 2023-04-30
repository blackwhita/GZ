/*onEvent('recipes', (event) => {
    const id_prefix = 'ico:recipetypes/ars_nouveau/glyph_recipe/';
    const recipes = [
        {
            input: 'item',//Input item
            output: 'itme',//Output items
            tier: 'tier',// 类型ONE/TWO/THREE
            id: 'id'
        },
    ];
    //Tiers
    //ONE: 魔法黏土
    //TWO: 非凡黏土
    //THREE: 神话黏土

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:glyph_recipe';
        event.custom(recipe).id(recipe.id);
    });
});*/