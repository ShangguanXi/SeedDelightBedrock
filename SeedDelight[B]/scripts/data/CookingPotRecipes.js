const cookingPotRecipes = [
    {
        "identifer": "seeddelight:acorn_tofu",
        "tags": ["cooking_pot"],
        "time": 200,
        "priority": 0,
        "experience": 1,
        "ingredients": [
            { "item": "seeddelight:acorn_kernel" },
            { "item": "seeddelight:acorn_kernel" },
            { "item": "seeddelight:acorn_kernel" },
            { "item": "seeddelight:acorn_kernel" },
            { "item": "seeddelight:acorn_kernel" }
        ],
        "result": { "item": "seeddelight:acorn_tofu" }
    },
    {
        "identifer": "seeddelight:cherry_jam_jar",
        "priority": 0,
        "container": { "item": "minecraft:glass_bottle" },
        "time": 200,
        "experience": 1,
        "ingredients": [
            { "item": "seeddelight:cherry" },
            { "item": "seeddelight:cherry" },
            { "item": "minecraft:sugar" }
        ],
        "result": { "item": "seeddelight:cherry_jam_jar" }
    },
    {
        "identifer": "seeddelight:cherry_pork",
        "priority": 0,
        "container": { "item": "minecraft:bowl" },
        "time": 200,
        "experience": 1,
        "ingredients": [
            { "item": "minecraft:porkchop" },
            { "item": "seeddelight:cherry" },
            { "item": "farmersdelight:onion" }
        ],
        "result": { "item": "seeddelight:cherry_pork" }
    },
    {
        "identifer": "seeddelight:cherry_wine",
        "priority": 0,
        "container": { "item": "minecraft:glass_bottle" },
        "time": 200,
        "experience": 1,
        "ingredients": [
            { "item": "seeddelight:cherry" },
            { "item": "seeddelight:cherry" }
        ],
        "result": { "item": "seeddelight:cherry_wine" }
    },
    {
        "identifer": "seeddelight:pine_needle_wine",
        "priority": 0,
        "container": { "item": "minecraft:glass_bottle" },
        "time": 200,
        "experience": 1,
        "ingredients": [
            { "item": "seeddelight:pinecone" },
            { "item": "seeddelight:pinecone" },
            { "item": "minecraft:sugar" }
        ],
        "result": { "item": "seeddelight:pine_needle_wine" }
    },
    {
        "identifer": "seeddelight:pinenut_gruel",
        "priority": 0,
        "container": { "item": "minecraft:bowl" },
        "time": 200,
        "experience": 1,
        "ingredients": [
            { "item": "farmersdelight:rice" },
            { "item": "seeddelight:pine_nut_kernel" }
        ],
        "result": { "item": "seeddelight:pinenut_gruel" }
    },
    {
        "identifer": "seeddelight:pinenut_with_meatballs",
        "priority": 0,
        "container": { "item": "minecraft:bowl" },
        "time": 200,
        "experience": 1,
        "ingredients": [
            { "item": "farmersdelight:minced_beef" },
            { "item": "seeddelight:pine_nut_kernel" },
            { "item": "seeddelight:pine_nut_kernel" }
        ],
        "result": { "item": "seeddelight:pinenut_with_meatballs" }
    },
    {
        "identifer": "seeddelight:roasted_beef_with_seed",
        "priority": 0,
        "container": { "item": "minecraft:bowl" },
        "time": 200,
        "experience": 1,
        "ingredients": [
            { "item": "farmersdelight:minced_beef" },
            { "tag": "seeddelight:can_eat_seed" },
            { "tag": "seeddelight:can_eat_seed" }
        ],
        "result": { "item": "seeddelight:roasted_beef_with_seed" }
    },
    {
        "identifer": "seeddelight:rosehip_jam_jar",
        "priority": 0,
        "container": { "item": "minecraft:glass_bottle" },
        "time": 200,
        "experience": 1,
        "ingredients": [
            { "item": "seeddelight:rosehip" },
            { "item": "seeddelight:rosehip" },
            { "item": "minecraft:sugar" }
        ],
        "result": { "item": "seeddelight:rosehip_jam_jar" }
    },
    {
        "identifer": "seeddelight:rosehip_tea",
        "priority": 0,
        "container": { "item": "minecraft:glass_bottle" },
        "time": 200,
        "experience": 1,
        "ingredients": [
            { "item": "seeddelight:rosehip" },
            { "item": "seeddelight:rosehip" }
        ],
        "result": { "item": "seeddelight:rosehip_tea" }
    },
    {
        "identifer": "seeddelight:seed_rosehip_pie",
        "priority": 0,
        "time": 200,
        "experience": 1,
        "ingredients": [
            [
                { "item": "seeddelight:sunflower_seed" },
                { "item": "minecraft:melon_seeds" },
                { "item": "minecraft:pumpkin_seeds" }
            ],
            [
                { "item": "seeddelight:sunflower_seed" },
                { "item": "minecraft:melon_seeds" },
                { "item": "minecraft:pumpkin_seeds" }
            ],
            { "item": "minecraft:wheat" },
            { "item": "seeddelight:rosehip" }
        ],
        "result": { "item": "seeddelight:seed_rosehip_pie" }
    },
    {
        "identifer": "seeddelight:seed_tart",
        "priority": 0,
        "container": { "item": "farmersdelight:pie_crust" },
        "time": 200,
        "experience": 1,
        "ingredients": [
            { "item": "seeddelight:sunflower_seed" },
            { "item": "seeddelight:acorn_kernel" },
            { "item": "seeddelight:pine_nut_kernel" },
            { "item": "farmersdelight:milk_bottle" },
            { "item": "minecraft:egg" }
        ],
        "result": { "item": "seeddelight:seed_tart" }
    },
    {
        "identifer": "seeddelight:stir_fried_cabbage_with_acorn",
        "priority": 0,
        "container": { "item": "minecraft:bowl" },
        "time": 200,
        "experience": 1,
        "ingredients": [
            { "item": "farmersdelight:cabbage" },
            { "item": "seeddelight:acorn" },
            { "item": "seeddelight:acorn" }
        ],
        "result": { "item": "seeddelight:stir_fried_cabbage_with_acorn" }
    },
    {
        "identifer": "seeddelight:stir_fried_cabbage_with_acorn",
        "priority": 1,
        "container": { "item": "minecraft:bowl" },
        "time": 200,
        "experience": 1,
        "ingredients": [
            { "item": "farmersdelight:cabbage_leaf" },
            { "item": "farmersdelight:cabbage_leaf" },
            { "item": "seeddelight:acorn" },
            { "item": "seeddelight:acorn" }
        ],
        "result": { "item": "seeddelight:stir_fried_cabbage_with_acorn" }
    },
    {
        "identifer": "seeddelight:sunflower_seed_crisp",
        "priority": 1,
        "container": { "item": "minecraft:bowl" },
        "time": 200,
        "experience": 1,
        "ingredients": [
            { "item": "seeddelight:sunflower_seed" },
            { "item": "seeddelight:sunflower_seed" },
            { "item": "minecraft:wheat" },
            { "item": "minecraft:sugar" }
        ],
        "result": { "item": "seeddelight:sunflower_seed_crisp" }
    }
];
export { cookingPotRecipes };
//# sourceMappingURL=CookingPotRecipes.js.map