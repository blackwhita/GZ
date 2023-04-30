onEvent('jei.hide.items', (event) => {
    materialsToUnify.forEach((material) => {
        types.forEach((type) => {
            modsToHide.forEach((mod) => {
                var push_items = mod + ':' + material + '_' + type
                if (Item.exists(item))
                    itemsToHide.push(push_items);
            });
        });
    });
    itemsToHide.forEach((disabledItem) => {
        event.hide(disabledItem);
    });
    //ae2
    event.hide(Item.of('ae2:facade').ignoreNBT());
    //colors
    //You can use it to hide all items with colors
    colors.forEach((color) => {
    });
});
const itemsToHide = []
const modsToHide = [
    'immersiveengineering',
    'mekanism',
    'thermal',
    'create',
    'silentgems'
]