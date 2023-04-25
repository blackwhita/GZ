onEvent('recipes', (event) => {
    const recipes = [
        /*{
            output: 'item',
            inputs: ['item'],
            id: 'id'
        }*/
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
    event.shapeless( Item.of('woodenbucket:wooden_bucket', '{Damage:0,Fluid:{Amount:1000,FluidName:"minecraft:water"}}'),[
        Item.of('minecraft:potion', '{Potion:"minecraft:water"}'),Item.of('minecraft:potion', '{Potion:"minecraft:water"}'),
        Item.of('minecraft:potion', '{Potion:"minecraft:water"}'),Item.of('woodenbucket:wooden_bucket', '{Damage:0}')
    ]).replaceIngredient(Item.of('minecraft:potion', '{Potion:"minecraft:water"}'),'minecraft:glass_bottle')
});
