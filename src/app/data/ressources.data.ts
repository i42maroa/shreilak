import { ResourceInterface } from "./interface/resource.interface";
import { PICK_UP_GARBAGE } from "./ressources/pickUpGarabage.data";
import { SAVE_OLAF } from "./ressources/saveOlaf.data";
import { THREE_R } from "./ressources/three-r.data";

export const MAP_RESSOURCES:Map<String, ResourceInterface> = new Map(
[
  [PICK_UP_GARBAGE.id, PICK_UP_GARBAGE],
  [THREE_R.id, THREE_R],
  [SAVE_OLAF.id, SAVE_OLAF]
]
);


