import { world, PlayerInteractWithBlockAfterEvent, PlayerBreakBlockBeforeEvent, system, BlockVolume, ItemStack, Block } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
import { ItemAPI } from "../lib/ItemAPI";

export class BlockFood {
    @EventAPI.register(world.beforeEvents.playerBreakBlock)
    break(args: PlayerBreakBlockBeforeEvent) {
        const player = args.player;
        const block = args.block;
        if (block.typeId!="seeddelight:rosehip_pie") return;
        // 用刀破坏时交给农夫乐事的 farmersdelight:pastry 掉落切片，避免整派和切片重复掉落
        if (args.itemStack?.hasTag("farmersdelight:is_knife")) return;
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