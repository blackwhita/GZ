onEvent( 'recipes', event =>{
    event.remove({id:'botania:runic_altar/water'})//水之符文
    event.remove({id:'botania:runic_altar/air'})//风之符文
    event.remove({id:'botania:runic_altar/fire'})//火之符文
    event.remove({id:'botania:runic_altar/earth'})//地之符文
    event.remove({id:'botania:runic_altar/mana'})//魔力符文
    event.remove({id:'botania:terra_plate'})//泰拉凝聚板
    event.remove({id:'botania:lens_normal'})//魔力透镜
    event.remove({id:'botania:fel_pumpkin'})//恶魔头南瓜
    event.remove({id:'botania:mana_pylon'})//魔法水晶
    event.remove({id:'botania:natura_pylon'})//自然水晶
    event.remove({id:'naturesaura:wood_stand'})//木基座
    event.remove({id:'naturesaura:tree_ritual/nature_altar'})//自然祭坛
    event.remove({id:'botania:runic_altar'})//符文祭坛
    event.remove({id:'naturesaura:rf_converter'})//充能灵气锻炉
    event.remove({id:'integrateddynamics:crafting/squeezer'})//挤压机

    event.recipes.botania.runic_altar('botania:rune_water',['botania:manasteel_ingot','botania:mana_powder',Item.of('woodenbucket:wooden_bucket', '{Damage:0,Fluid:{Amount:1000,FluidName:"minecraft:water"}}'),'hearthwell:token_1','minecraft:fishing_rod'],8000)//水之符文
    event.recipes.botania.runic_altar('botania:rune_air',['hearthwell:token_3','botania:mana_powder','botania:manasteel_ingot','#minecraft:carpets','minecraft:string'],8000)//风之符文
    event.recipes.botania.runic_altar('botania:rune_fire',['hearthwell:token_2','botania:mana_powder','botania:manasteel_ingot','minecraft:gunpowder','#forge:storage_blocks/charcoal'],8000)//火之符文1
    event.recipes.botania.runic_altar('botania:rune_fire',['hearthwell:token_2','botania:mana_powder','botania:manasteel_ingot','minecraft:gunpowder','#forge:storage_blocks/coal'],8000)//火之符文2
    event.recipes.botania.runic_altar('botania:rune_mana',['botania:manasteel_ingot','botania:mana_pearl','botania:mana_diamond','botania:mana_powder','hearthwell:crystal','hearthwell:token_5'],8000)//魔力符文
    event.recipes.botania.runic_altar('botania:rune_earth',['hearthwell:token_0','botania:mana_powder','botania:manasteel_ingot','botania:livingwood','minecraft:stone'],8000)//地之符文
    event.recipes.botania.runic_altar('botania:terra_plate',['botania:rune_water','botania:rune_earth','botania:rune_fire','botania:rune_air','botania:rune_mana','#forge:storage_blocks/lapis','botania:lens_normal','hearthwell:crystal_green'],50000)//泰拉凝聚板
    event.recipes.botania.runic_altar('botania:fel_pumpkin',['minecraft:pumpkin','minecraft:bone','minecraft:rotten_flesh','botania:mana_powder','hearthwell:myst_dust','naturesaura:gold_powder'],15000)//恶魔头南瓜
    event.recipes.botania.runic_altar('botania:alfheim_portal',['botania:glimmering_livingwood','botania:glimmering_livingwood','botania:glimmering_livingwood','botania:glimmering_livingwood',
       'botania:terrasteel_ingot','hearthwell:token_9','botania:mana_pearl','botania:mana_diamond'],66666)//精灵门核心
    event.recipes.botania.runic_altar('botania:mana_pylon',['botania:manasteel_ingot','botania:manasteel_ingot','botania:mana_diamond','botania:mana_glass','minecraft:gold_ingot'],12000)//魔法水晶
    event.recipes.botania.runic_altar('8x naturesaura:wood_stand',['#minecraft:logs','#minecraft:logs','#minecraft:logs','#minecraft:logs','naturesaura:gold_leaf','naturesaura:gold_leaf','botania:mana_powder','botania:mana_powder'],25000)//木基座
    event.recipes.botania.mana_infusion('3x botania:mana_diamond','hearthwell:crystal_blue',18000,'naturesaura:ancient_log')//魔力钻石
    event.recipes.botania.mana_infusion('3x botania:mana_pearl','hearthwell:burst_seed',15000,'naturesaura:ancient_log')//魔力珍珠
    event.recipes.botania.mana_infusion('minecraft:cobblestone','#forge:sandstone',666,'naturesaura:ancient_log')//魔力珍珠
    event.recipes.botania.terra_plate('botania:natura_pylon',['botania:mana_pylon','botania:terrasteel_ingot','hearthwell:crystal_green','botania:glimmering_livingwood'],66666)//自然水晶




    event.shaped( 'botania:lens_normal',[
        ' a ',
        'aba', 
        ' a '
    ],{
        a: 'botania:manasteel_ingot',
        b: 'botania:mana_glass'
    })//魔力透镜

    event.shaped( 'minecraft:blaze_rod',[
        ' a ',
        ' a ',
        ' a '
    ],{
        a: 'minecraft:blaze_powder'
    })//烈焰棒

    event.shaped( 'botania:runic_altar',[
        '   ',
        'aba',
        'bcb'
    ],{
        a: 'hearthwell:crystal',
        b: 'botania:livingrock',
        c: 'botania:mana_pearl' 
    })//植魔符文祭坛

    event.shaped( 'botania:runic_altar',[
        '   ',
        'aba',
        'bcb'
    ],{
        a: 'hearthwell:crystal',
        b: 'botania:livingrock',
        c: 'botania:mana_diamond'
    })//植魔符文祭坛

    event.shaped( '2x minecraft:cobblestone',[
        ' a ',
        'aba',
        ' a '
    ],{
        a: 'hearthwell:petrified_wood',
        b: 'minecraft:sandstone'
    })//圆石

    event.shaped( 'integrateddynamics:squeezer',[
        'asa',
        'a a',
        'dcd'
    ],{ 
        a: 'minecraft:iron_bars',
        s: 'minecraft:iron_block',
        d: 'botania:livingwood',
        c: 'naturesaura:infused_iron'
    })//挤压机 

    event.shaped( 'mekanism:basic_fluid_tank',[
        'asa',
        'd d',
        'asa'
    ],{
        a: 'botania:mana_powder',
        s: 'naturesaura:infused_iron',
        d:  'botania:manasteel_ingot'
    })//mek流体储罐

    event.shaped( 'create:windmill_bearing',[
        'asa',
        ' d ',
        ' c '
    ],{
        a: 'botania:terrasteel_nugget',
        s: 'naturesaura:ancient_slab',
        d: 'create:andesite_casing',
        c: 'create:shaft'
    })//风车轴承

    const recipes = [
        {
            ingredients: [
            'naturesaura:token_joy',
            '#forge:stone',
            '#forge:stone',
            '#forge:stone',
            'naturesaura:gold_leaf',
            'botania:terrasteel_ingot'
            ],
            output: 'naturesaura:nature_altar',
            time: 500,
            sapling: 'minecraft:oak_sapling',
            id: 'naturesaura:tree_ritual/nature_altar'
        },//自然祭坛
        {
            ingredients: [
            'minecraft:redstone_block',
            'minecraft:redstone_block',
            'naturesaura:tainted_gold',
            'naturesaura:conversion_catalyst',
            'naturesaura:infused_iron',
            'naturesaura:infused_iron',
            'hearthwell:myst_ingot',
            'botania:mana_fluxfield'                        
            ],
            output: 'naturesaura:rf_converter',
            time: 500,
            sapling: 'minecraft:oak_sapling',
            id: 'naturesaura:tree_ritual/rf_converter'
        }//充能灵气锻炉
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:tree_ritual';
        recipe.ingredients = recipe.ingredients.map((input) => Ingredient.of(input).toJson());
        recipe.sapling = Item.of(recipe.sapling).toJson();
        recipe.output = Item.of(recipe.output).toResultJson();

        event.custom(recipe).id(recipe.id);
    });

    /*event.recipes.createMixing('2x create:limestone',[
        'minecraft:bone_meal',
        'minecraft:bone_meal',
        '#forge:gravel',
        '#forge:sand'
    ]).heated//石灰岩

    event.recipes.createMixing('rainbowcompound:blazeite_ingot',[
        '#forge:ingots/brass',
        '#forge:ingots/copper',
        '#forge:rods/blaze'
    ]).superheated//烈焰合金*/


})  
    