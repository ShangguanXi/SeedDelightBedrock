import { ItemStopUseAfterEvent,world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
import { ItemAPI } from "../lib/ItemAPI";
export class Food {
  @EventAPI.register(world.afterEvents.itemStopUse)
  food(args: ItemStopUseAfterEvent) {
    const itemStack = args.itemStack;
    const player = args.source
    const useDuration = args.useDuration
    if (itemStack && useDuration == 0) {
      switch (itemStack.typeId) {
        case "seeddelight:cherry_ice_cream":
          player.addEffect('slowness', 30 * 20, { amplifier: 0 });
          player.addEffect('haste', 60 * 20, { amplifier: 0 });
          break;
        case "seeddelight:cherry_jam_sandwich":
        case "seeddelight:cherry_wine":
          player.addEffect('haste', 90 * 20, { amplifier: 0 });
          break;
        case "seeddelight:rosehip_jam_sandwich":
        case "seeddelight:rosehip_tea":
          player.addEffect('regeneration', 10 * 20, { amplifier: 0 });
          break;
        case "seeddelight:pine_needle_wine":
          player.addEffect('resistance', 10 * 20, { amplifier: 0 });
          break;
        case "seeddelight:seed_rosehip_pie":
          player.addEffect('regeneration', 5 * 20, { amplifier: 0 });
          break;
        case "seeddelight:seed_tart":
          ItemAPI.add(player, "minecraft:glass_bottle");
          break;
      }
    }
  }
}