onEvent('recipes', (event) => {
  const id_prefix = 'ico:recipetypes/create/sequenced_assembly/';
  const recipes = [
    /*{
      input: 'item',//Output items
      outputs: ['item'],//Output items
      transitionalItem: 'item',//过度item  
      loops: value,//循环次数
      sequence: [//一次循环所经历的步骤
        {
          type: 'type',//第一步处理类型
          input: 'type_1',
          output: 'taye_2'
        },
        {
          type: 'type',//第二步处理类型
          input: 'type_1',
          output: 'taye_2'
        }
      ],
      id: 'id'
    }*/
  ];
  /*
  type: 'deploying',//机械手装配
  input: ['item_1', 'item_2'],//item_2是import机械手的item_1是要装配的（原本item  ）
  output: 'item'//export物

  type: 'cutting',//切割
  input: item,//Input item（原本item  ）
  output: 'item'//Output items
  processingTime:value//consume time 

  type: 'filling',//infusefluid （未完善）
  input: Fluid.of('fluid', value),//Input fluidid，Input fluid value
  output: 'item'Output items
  
  type: 'pressing',//挤压
  input: item,//Input item（原本item  ）
  output: 'item'//Output items
  */
  //批 value四步自定义循环次数装配
  let armorTypes = [
    /*{
      loops: value,
      armors: [
        {
          base: 'item',//Output items
          material_1: 'item',//第一步装配item  
          material_2: 'item',//第二步装配item  
          material_3: 'item',//第三步装配item  
          material_4: 'item',//第四部装配item  
          result: 'item',//Output items
          id: 'id'
        },
        {
          event
        }
      ]
    }*/
  ];
  armorTypes.forEach((armorType) => {
    armorType.armors.forEach((armor) => {
      recipes.push({
        input: Ingredient.customNBT(
          Item.of(armor.base, '{Damage:0}').weakNBT(),
          (nbt) => !nbt.SequencedAssembly
        ),
        outputs: [armor.result],
        transitionalItem: armor.base,
        loops: armorType.loops,
        sequence: [
          {
            type: 'deploying',
            input: [armor.base, armor.material_1],
            output: armor.base
          },
          {
            type: 'deploying',
            input: [armor.base, armor.material_2],
            output: armor.base
          },
          {
            type: 'deploying',
            input: [armor.base, armor.material_3],
            output: armor.base
          },
          {
            type: 'deploying',
            input: [armor.base, armor.material_4],
            output: armor.base
          },
        ],
        id: armor.id
      });
    });
  });
  recipes.forEach((recipe) => {
    let sequence = [];
    recipe.sequence.forEach((step) => {
      if (step.type == 'deploying') {
        sequence.push(event.recipes.create.deploying(step.output, step.input));
      } else if (step.type == 'cutting') {
        sequence.push(
          event.recipes.create.cutting(step.output, step.input).processingTime(step.processingTime)
        );
      } else if (step.type == 'filling') {
        sequence.push(event.recipes.create.filling(step.output, step.input));
      } else if (step.type == 'pressing') {
        sequence.push(event.recipes.create.pressing(step.output, step.input));
      }
    });

    event.recipes.create
      .sequenced_assembly(recipe.outputs, recipe.input, sequence)
      .loops(recipe.loops)
      .transitionalItem(recipe.transitionalItem)
      .id(recipe.id);
  });
});