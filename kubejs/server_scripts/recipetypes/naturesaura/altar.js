onEvent('recipes', (event) => {
    const id_prefix = 'ico:recipetypes/naturesaura/altar/';
    const recipes = [
        /*{
            input: 'item',//Input item
            output: { item: 'item', count: value },//Output items，Output quantity
            aura_type: 'aura_type',//Altar type
            aura: value,//Required aura
            time: value,//Required time
            id: 'id'
        }*/
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:altar';
        recipe.input = Ingredient.of(recipe.input).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
/*
'naturesaura:overworld',
'naturesaura:nether'
*/