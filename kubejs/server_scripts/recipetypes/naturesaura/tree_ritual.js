onEvent('recipes', (event) => {
    const id_prefix = 'ico:recipetypes/naturesaura/tree_ritual/';
    const recipes = [
        /*{
            ingredients: [//Input item，Up to 8 types
                'item'
            ],
            output: 'item',//Output items
            time: value,//Required time
            sapling: 'tree',//Required saplings
            id: 'id'
        }*/
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:tree_ritual';
        recipe.ingredients = recipe.ingredients.map((input) => Ingredient.of(input).toJson());
        recipe.sapling = Item.of(recipe.sapling).toJson();
        recipe.output = Item.of(recipe.output).toResultJson();

        event.custom(recipe).id(recipe.id);
    });
});