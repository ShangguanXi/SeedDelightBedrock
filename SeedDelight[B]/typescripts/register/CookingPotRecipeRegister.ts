import {WorldInitializeAfterEvent, system, world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
let register = true
export class CookingPotRecipeRegister {
    @EventAPI.register(world.afterEvents.worldInitialize)
    register(args: WorldInitializeAfterEvent) {
        system.runInterval(() => {
            if (register) {
                world.getDimension("overworld").runCommandAsync("function seeddelight/recipe_registries");
                register = false
            }
        })
    }
}