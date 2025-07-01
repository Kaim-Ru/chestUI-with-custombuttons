import * as mc from "@minecraft/server";
import * as mcui from "@minecraft/server-ui";

mc.world.beforeEvents.playerInteractWithBlock.subscribe((e) => {
  if (e.block.typeId === "minecraft:barrel") {
    mc.system.run(() => {
      const closeFormUI = () => {
        const locationSnapshot = e.player.location;
        e.player.teleport({ x: 0, y: 1000, z: 0 });
        mc.system.runTimeout(() => {
          e.player.teleport(locationSnapshot);
        }, 1);
      };
      const showCustomChestUI = () => {
        new mcui.ActionFormData()
          .title("moreChest:chest")
          .body(`${currentPage}/${maxPage}`)
          .button("left")
          .button("right")
          .button("close")
          .show(e.player)
          .then((response) => {
            if (
              response.canceled &&
              response.cancelationReason == "UserClosed"
            ) {
              closeFormUI();
            }
            if (response.selection === 0) {
              console.log("Bを押しました");
              showCustomChestUI();
            } else if (response.selection === 1) {
              console.log("Aを押しました");
              showCustomChestUI();
            } else if (response.selection === 2) {
              closeFormUI();
            }
          })
          .catch((e) => console.error(e))
          .show(e.player);
      };

      showCustomChestUI();
    });
  }
});
