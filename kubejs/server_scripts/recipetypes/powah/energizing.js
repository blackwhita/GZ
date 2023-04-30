onEvent('recipes', (event) => {
    const id_prefix = 'ico:recipetypes/powah/energizing/';
    const recipes = [
        /*{
            ingredients: [//Input item
                { tag: 'tag' },
                { item: 'item' }
            ],
            energy: value,//Required energy
            result: {//Output items，Output quantity
                item: 'item',
                count: value
            },
            id: 'id'
        }*/
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        event.custom(recipe).id(recipe.id);
    });
});