import { world, PlayerInteractWithBlockAfterEvent, PlayerBreakBlockBeforeEvent, system, BlockVolume, ItemStack, Block } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
import { ItemAPI } from "../lib/ItemAPI";

export class BlockFood {
    @EventAPI.register(world.beforeEvents.playerBreakBlock)
    break(args: PlayerBreakBlockBeforeEvent) {
        const player = args.player;
        const block = args.block;
        if (block.typeId!="seeddelight:rosehip_pie") return;
        const stage = block.permutation.getState("farmersdelight:food_block_stage") as number
        if (stage == 0) {
            args.cancel = true
            system.runTimeout(() => {
                ItemAPI.spawn(block,block.typeId)
                block.dimension.setBlockType(block.location, "minecraft:air")
                ItemAPI.damage(player, player.selectedSlotIndex)
                block.dimension.playSound("dig.stone", block.location)
            })
        }
    }

}