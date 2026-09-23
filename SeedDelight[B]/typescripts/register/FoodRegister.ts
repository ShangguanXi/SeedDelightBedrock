import { ItemStopUseAfterEvent,world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
import { ItemAPI } from "../lib/ItemAPI";
export class Food {
  @EventAPI.register(world.afterEvents.itemStopUse)
  food(args: ItemStopUseAfterEvent) {
    const itemStack = args.itemStack;
    const player = args.source
    const useDuration = args.useDuration
    // 状态效果由物品上的 farmersdelight:consume_effects 组件提供，这里只处理其他逻辑
    if (itemStack && useDuration == 0) {
      switch (itemStack.typeId) {
        case "seeddelight:seed_tart":
          ItemAPI.add(player, "minecraft:glass_bottle");
          break;
      }
    }
  }
}