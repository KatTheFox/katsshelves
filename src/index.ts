import { writeFileSync } from "fs-extra";
import { shelves } from "./data";

function updateJson() {
  writeFileSync(
    "/home/katrina/.config/unity3d/Weather Factory/Cultist Simulator/mods/katsshelves/content/shelves.json",
    JSON.stringify(shelves)
  );
}
updateJson();
