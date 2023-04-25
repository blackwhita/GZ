onEvent('recipes', (event) => {
    const itemsToAllRemove = [];
    materialsToUnify.forEach((material) => {
        types.forEach((type) => {
            itemsToAllRemove.push(
                //Delete composite table based on hidden items
                'immersiveengineering:' + material + '_' + type,
                'mekanism:' + material + '_' + type,
                'thermal:' + material + '_' + type,
                'create:' + material + '_' + type,
                'silentgems:' + material + '_' + type,
                'industrialforegoing:'+ material + '_gear'
            );
        });
    });
    itemsToAllRemove.forEach((item_remove) => {
        if (Item.exists(item_remove)) {
            //event.remove({ input: item_remove })
            event.remove({ output: item_remove })
        }
    })
})
