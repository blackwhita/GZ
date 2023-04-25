onEvent('recipes',event =>{

    event.remove({id:'woodenshears:wooden_shears'})//木剪刀
    event.remove({id:'botania:diluted_pool'})//稀释魔力池
    event.remove({id:'minecraft:composter'})//堆肥桶
    event.remove({id:'botania:apothecary_default'})//花药台
    event.remove({id:'minecraft:furnace'})//熔炉
    event.remove({id:'quark:building/crafting/furnaces/cobblestone_furnace'})//熔炉
    event.remove({id:'botania:petal_apothecary/endoflame'})//火红莲
    event.remove({id:'botania:petal_apothecary/pure_daisy'})//白雏菊
    event.remove({id:'botania:petal_apothecary/hydroangeas'})//水绣球
    event.remove({id:'botania:twig_wand'})//森林法杖

    event.recipes.botania.mana_infusion('botania:manasteel_ingot','hearthwell:myst_ingot',6000,'naturesaura:ancient_log')//魔力钢
    event.recipes.botania.mana_infusion('botania:grass_seeds','minecraft:oak_sapling',8000,'naturesaura:ancient_log')//草地之种
    event.recipes.botania.mana_infusion('minecraft:sugar_cane','minecraft:cactus',5000,'naturesaura:ancient_log')//甘蔗
    event.recipes.botania.petal_apothecary('botania:endoflame', ['hearthwell:myst_dust','botania:brown_petal','botania:red_petal','botania:light_gray_petal','minecraft:furnace'])//火红莲
    event.recipes.botania.petal_apothecary('botania:pure_daisy',['botania:white_petal','botania:white_petal','botania:white_petal','botania:white_petal','hearthwell:crystal_green'])//白雏菊
    event.recipes.botania.petal_apothecary('botania:hydroangeas',['botania:cyan_petal','botania:blue_petal','botania:light_blue_petal','hearthwell:crystal_blue','hearthwell:myst_dust'])//水绣球

    event.shaped( '2x create:andesite_alloy',[
        'bc ',
        'cb ',
        '   '
    ],{
        c: 'botania:manasteel_nugget',
        b: '#forge:stone'
    })//安山合金

    event.shaped( 'minecraft:furnace',[
        'ccc',
        'c c',
        'ccc'
    ],{
        c: '#forge:stone'
    })//熔炉
    
    event.shaped( 'hearthwell:prayer_letter',[
        '   ',
        'cc ',
        '   '
    ],{
        c: '#minecraft:wooden_pressure_plates'

    })//祷告信

    event.shaped( 'minecraft:coarse_dirt',[
        ' c ',
        'cvc',
        ' c '
    ],{
        c: 'minecraft:cactus',
        v: '#forge:sandstone'
    })//砂土

    event.shaped( 'botania:diluted_pool',[
        '   ',
        'c c',
        'vcv'
    ],{
        c: 'botania:livingrock',
        v: 'hearthwell:myst_ingot'
    })//稀释魔力池

    event.shaped( 'minecraft:composter',[
        'a a',
        'a a',
        'cbc' 
    ],{
        a: 'minecraft:oak_slab',
        b: 'minecraft:stripped_oak_log',
        c: 'minecraft:oak_planks'
    })//堆肥桶

    event.shaped( 'botania:apothecary_default',[
        'aba',
        ' c ',
        'ded'
    ],{
        a: 'minecraft:cobblestone_slab',
        b: '#botania:petals',
        c: 'hearthwell:crystal',
        d: '#forge:cobblestone',
        e: 'hearthwell:myst_ingot'
    })//花药台

    event.shaped( 'naturesaura:gold_fiber',[
        'aba',
        'bcb',
        'aba'
    ],{
        a: 'minecraft:oak_leaves',
        b: 'minecraft:yellow_dye',
        c: 'hearthwell:myst_dust'
    })//闪耀纤维

    event.shaped( 'woodenshears:wooden_shears',[
        ' a ',
        ' ba',
        '   '
    ],{
        a: 'minecraft:oak_planks',
        b: 'hearthwell:crystal'
    })//木剪刀

    event.shaped( '2x minecraft:stone_pressure_plate',[
        'aa ',
        '   ',
        '   '
    ],{
        a: 'minecraft:cobblestone'
    })//石压力板

    event.shaped( 'minecraft:stone',[
        ' a ',
        ' a ',
        ' a '
    ],{
        a: 'minecraft:stone_pressure_plate'
    })//石头

    event.shaped( 'botania:twig_wand',[
        ' ab',
        ' ca',
        'b  '
    ],{
        a: '#botania:petals',
        b: 'botania:livingwood_twig',
        c: 'hearthwell:crystal_green'
    })//森林法杖

    event.shapeless( 'minecraft:grass_block',['minecraft:dirt','hearthwell:crystal_green']).keepIngredient('hearthwell:crystal_green')//草方块

    event.shapeless( Item.of('woodenbucket:wooden_bucket', '{Damage:0,Fluid:{Amount:1000,FluidName:"minecraft:water"}}'),[
        Item.of('minecraft:potion', '{Potion:"minecraft:water"}'),Item.of('minecraft:potion', '{Potion:"minecraft:water"}'),
        Item.of('minecraft:potion', '{Potion:"minecraft:water"}'),Item.of('woodenbucket:wooden_bucket', '{Damage:0}')
    ]).replaceIngredient(Item.of('minecraft:potion', '{Potion:"minecraft:water"}'),'minecraft:glass_bottle')//水桶
 })
 
onEvent('block.right_click', event => {
    if (event.block == 'minecraft:dead_bush' && event.player.getHeldItem(event.hand) == 'minecraft:cactus')
    {
    event.server.runCommandSilent(`setblock ${event.block.x} ${event.block.y} ${event.block.z} minecraft:oak_sapling`)
    event.player.mainHandItem.count-=1
    event.player.attack(1)

    }//树苗

    if (event.block == 'minecraft:oak_leaves' && event.player.getHeldItem(event.hand) == 'minecraft:glass_bottle')
    {
    event.server.runCommandSilent(`setblock ${event.block.x} ${event.block.y} ${event.block.z} minecraft:air`)
    event.player.mainHandItem.count-=1
    event.player.give(Item.of('minecraft:potion', '{Potion:"minecraft:water"}'))
    }//水瓶
    
    })  

 