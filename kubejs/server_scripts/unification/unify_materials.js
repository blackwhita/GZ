//priority: 999
onEvent('recipes', (event) => {
    const id_prefix = 'ico:unification/unify_materials/';
    materialsToUnify.forEach((material) => {
        var ingot = getPreferredItemInTag(Ingredient.of(`#forge:ingots/${material}`)).id;
        var nugget = getPreferredItemInTag(Ingredient.of(`#forge:nuggets/${material}`)).id;
        var gem = getPreferredItemInTag(Ingredient.of(`#forge:gems/${material}`)).id;
        var plate = getPreferredItemInTag(Ingredient.of(`#forge:plates/${material}`)).id;
        var gear = getPreferredItemInTag(Ingredient.of(`#forge:gears/${material}`)).id;
        var rod = getPreferredItemInTag(Ingredient.of(`#forge:rods/${material}`)).id;
        var wire = getPreferredItemInTag(Ingredient.of(`#forge:wires/${material}`)).id;
        let crushed_ore = getPreferredItemInTag(Ingredient.of(`#create:crushed_ores/${material}`)).id;
        var ore = getPreferredItemInTag(Ingredient.of(`#forge:ores/${material}`)).id;
        var mana_cluster = getPreferredItemInTag(Ingredient.of(`#emendatusenigmatica:mana_clusters/${material}`)).id;
        var fulminated_cluster = getPreferredItemInTag(Ingredient.of(`#emendatusenigmatica:fulminated_clusters/${material}`)).id;
        var levigated_material = getPreferredItemInTag(Ingredient.of(`#emendatusenigmatica:levigated_materials/${material}`)).id;
        var crystalline_sliver = getPreferredItemInTag(Ingredient.of(`#emendatusenigmatica:crystalline_slivers/${material}`)).id;
        gear_unification(event, material, ingot, gem, gear)
        rod_unification(event, material, ingot, gem, rod)
        plate_unification(event, material, ingot, gem, plate)
        wire_unification(event, material, ingot, gem, wire, plate)
    })
    function gear_unification(event, material, ingot, gem, gear) {
        if (gear == air) {
            return;
        }
        event.remove({ output: gear });
        var output,
            input,
            mold = 'immersiveengineering:mold_gear';
        if (Item.exists(`emendatusenigmatica:${material}_gear`)) {
            output = `emendatusenigmatica:${material}_gear`
        } else {
            output = gear
        }
        if (ingot != air) {
            input = `#forge:ingots/${material}`;
        } else if (gem != air) {
            input = `#forge:gems/${material}`;
        } else {
            return;
        }
        event.recipes.thermal
            .press(output, [Ingredient.of(input, 4), mold])
            .id(`thermal:machine/press/press_${material}_ingot_to_gear`);
        event.recipes.immersiveengineering
            .metal_press(`4x ${output}`, Ingredient.of(`16x ${input}`), mold)
            .id(`immersiveengineering:metalpress/${material}_gear`);
        event
            .shaped(output, ['CAC', 'ABA', 'CAC'], {
                A: input,
                B: '#forge:plates/iron',
                C: '#forge:nuggets/aluminum'
            })
            .id(`ico:${material}_gear`);
    }
    function rod_unification(event, material, ingot, gem, rod) {
        if (rod == air) {
            return;
        }
        event.remove({ output: rod });
        var output,
            input,
            mold = '#thermal:crafting/dies/rod';
        const hammer = Item.of('immersiveengineering:hammer').ignoreNBT();
        const plateTag = `#forge:plates/${material}`;
        if (Item.exists(`emendatusenigmatica:${material}_rod`)) {
            output = `emendatusenigmatica:${material}_rod`
        } else {
            output = rod
        }
        if (ingot != air) {
            input = `#forge:ingots/${material}`;
        } else if (gem != air) {
            input = `#forge:gems/${material}`;
        } else {
            return;
        }
        event.recipes.thermal
            .press(output, [input, mold])
            .energy(2400)
            .id(`thermal:machine/press/press_${material}_ingot_to_rod`);
        event.recipes.immersiveengineering
            .metal_press(`4x ${output}`, Ingredient.of(`4x ${input}`), mold)
            .id(`immersiveengineering:metalpress/${material}_rod`);
        event.shapeless(output, [plateTag, hammer, plateTag]).id(`ico:shapeless_crafting_${material}_rod`);
    }
    function plate_unification(event, material, ingot, gem, plate) {
        if (plate == air) {
            return;
        }
        event.remove({ output: plate });
        event.remove({ id: /immersiveengineering:crafting\/plate_/ });
        event.remove({ id: /create:pressing\/\w*_ingot/ });
        var output,
            input,
            mold = '#thermal:crafting/dies/plate',
            hammer = Item.of('immersiveengineering:hammer').ignoreNBT();
        if (Item.exists(`emendatusenigmatica:${material}_plate`)) {
            output = `emendatusenigmatica:${material}_plate`
        } else {
            output = plate
        }
        if (ingot != air) {
            input = `#forge:ingots/${material}`;
        } else if (gem != air) {
            input = `#forge:gems/${material}`;
        } else {
            return;
        }
        event.shapeless(output, [input, hammer, input]).id(`ico:shapeless_crafting_${material}_plate`);
        event.recipes.immersiveengineering
            .metal_press(`4x ${output}`, `4x ${input}`, mold)
            .id(`immersiveengineering:metalpress/${material}_plate`);
        event.recipes.create.pressing(output, input).id(`ico:create_pressing_${material}_plate`);
        event.recipes.thermal
            .press(Item.of(output), input)
            .energy(2400)
            .id(`thermal:machine/press/press_${material}_ingot_to_plate`);
    }
    function wire_unification(event, material, ingot, gem, wire, plate) {
        if (wire == air) {
            return;
        }
        event.remove({ output: wire });
        const wireCutters = Item.of('immersiveengineering:wirecutter').ignoreNBT();
        var input,
            output = wire,
            mold = '#thermal:crafting/dies/wire';
        if (ingot != air) {
            input = `#forge:ingots/${material}`;
        } else if (gem != air) {
            input = `#forge:gems/${material}`;
        } else {
            return;
        }
        event.recipes.thermal
            .press(Item.of(output, 4), [plate, mold])
            .energy(2400)
            .id(`immersiveengineering:metalpress/${material}_wire`);
        event.recipes.immersiveengineering
            .metal_press(`16x ${output}`, `4x ${plate}`, mold)
            .id(`immersiveengineering:metalpress/${material}_wire`);
        event.shapeless(Item.of(output, 2), [plate, plate, wireCutters]).id(`ico:shaped_crafting_${material}_wire`);
    }

})
