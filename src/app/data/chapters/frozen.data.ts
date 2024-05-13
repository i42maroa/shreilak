import { ChapterInterface } from "../interface/chapter.interface";
import { PICK_UP_GARBAGE } from "../ressources/pickUpGarabage.data";

export const FROZEN_CHAPTER:ChapterInterface = {
  title:"FROZEN",
  history:"Dans un royaume où le changement climatique menace de faire fondre le château de glace d’Elsa. Shreilak aura besoin de travailler avec Elsa pour pouvoir inverser le problème et rétablir la tranquillité dans le royaume.",
  translatedHistory:"En un reino donde el cambio climático amenaza con derretir el castillo de hielo de Elsa. Shreilak necesitará trabajar junto a Elsa para poder revertir el problema y devolver la tranquilidad al reino.",
  objectives:[
    {
      title:"Limpiar el bosque",
      process: "Para salvar a olaf tendremos que ayudar haciendo esto y lo otro",
      resources: [
        PICK_UP_GARBAGE
      ]
    },
    {
      title:"Salvar a olaf",
      process: "Para salvar a olaf tendremos que ayudar haciendo esto y lo otro",
      resources: [
        PICK_UP_GARBAGE
      ]
    }
  ]
}


