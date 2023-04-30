onEvent('recipes', (event) => {
    const id_prefix = 'ico:recipetypes/naturesaura/animal_spawner/';
    const recipes = [
        /*{
            inputs: [//Input item，Up to 4 types
                'item'
            ],
            entity: 'entity',//Summoning entities
            aura: value,//aura:
            time: value,//Required time
            id: 'id'
        }*/
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:animal_spawner';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        event.custom(recipe).id(recipe.id);
    });
});