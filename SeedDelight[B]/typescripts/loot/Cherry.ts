import { GameMode, ItemComponentTypes, system, PlayerBreakBlockBeforeEvent, world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
import { RandomAPI } from "../lib/RandomAPI";
import { ItemAPI } from "../lib/ItemAPI";

export class Cherry {
    @EventAPI.register(world.beforeEvents.playerBreakBlock)
    loot(args: PlayerBreakBlockBeforeEvent) {
        const itemStack = args.itemStack;
        const itemId = itemStack?.typeId
        const enchantment = itemStack?.getComponent(ItemComponentTypes.Enchantable)?.hasEnchantment('silk_touch')
        const block = args.block;
        const player = args.player;
        if (block.typeId!="minecraft:cherry_leaves")
            return
        if (player.getGameMode() == GameMode.Creative) 
            return;
        if (((!enchantment) || itemId != "minecraft:shears")) {
            if (RandomAPI.probability(25)) {
                system.run(() => {
                    ItemAPI.spawn(block, "seeddelight:cherry")
                })
                
            }
        }
    }
}
