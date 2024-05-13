import { ResourceInterface } from "./interface/resource.interface";
import { PICK_UP_GARBAGE } from "./ressources/pickUpGarabage.data";

export const MAP_RESSOURCES:Map<String, ResourceInterface> = new Map(
[
  [PICK_UP_GARBAGE.id, PICK_UP_GARBAGE]
]
);


