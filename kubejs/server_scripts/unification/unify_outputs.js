onEvent('recipes', (event) => {
    materials_add.forEach((material) => {
        materials_types.forEach((type) => {
            if (!entryIsBlacklisted(material, type)) {
                if (type == 'block') {
                    let tagString = `#forge:storage_${type}s/${material}`;
                    let tag = Ingredient.of(tagString);
                    if (tag.stacks.size() > 1) {
                        let prefItem = getPreferredItemInTag(tag);
                        event.replaceOutput({}, tagString, prefItem);
                    }
                } else if (type == 'raw') {
                    let tagString = `forge:${type}_materials/${material}`;
                    let tag = Ingredient.of(tagString);
                    if (tag.stacks.size() > 1) {
                        let prefItem = getPreferredItemInTag(tag);
                        event.replaceOutput({}, tagString, prefItem);
                    }
                } else {
                    let tagString = `forge:${type}s/${material}`;
                    let tag = Ingredient.of(tagString);
                    if (tag.stacks.size() > 1) {
                        let prefItem = getPreferredItemInTag(tag);
                        event.replaceOutput({}, tagString, prefItem);
                    }
                }
            }
        });
    });
});
