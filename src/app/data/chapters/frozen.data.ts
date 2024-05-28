import { ChapterInterface } from "../interface/chapter.interface";
import { CLEAR_WOOD_CELEBRATION } from "../ressources/frozen/celebration.data";
import { FROZEN_FINAL_TASK } from "../ressources/frozen/frozen_final_task.data";
import { MEAL_CELEBRATION } from "../ressources/frozen/meal-celebration.data";
import { PICK_UP_GARBAGE } from "../ressources/frozen/pickUpGarabage.data";
import { REUSED_ORNAMENTS } from "../ressources/frozen/reused_ornaments.data";
import { SAVE_OLAF } from "../ressources/frozen/saveOlaf.data";
import { THREE_R } from "../ressources/frozen/three-r.data";
import { TRADITION_TREE } from "../ressources/frozen/tradition_tree.data";

export const FROZEN_CHAPTER:ChapterInterface = {
  title:"FROZEN",
  history:"Dans un royaume où le changement climatique menace de faire fondre le château de glace d’Elsa. Shreilak aura besoin de travailler avec Elsa pour pouvoir inverser le problème et rétablir la tranquillité dans le royaume.",
  translatedHistory:"En un reino donde el cambio climático amenaza con derretir el castillo de hielo de Elsa. Shreilak necesitará trabajar junto a Elsa para poder revertir el problema y devolver la tranquilidad al reino.",
  objectives:[
    {
      title:"La gran limpieza",
      process: "Al llegar al reino, Shreilak se da cuenta de que el reino se encuentra lleno de residuos. Necesitamos dejar limpio todo!!",
      processTranslated: "Al llegar al reino, Shreilak se da cuenta de que el reino se encuentra lleno de residuos. Necesitamos dejar limpio todo!!",
      resources: [
        PICK_UP_GARBAGE,
        CLEAR_WOOD_CELEBRATION
      ]
    },
    {
      title:"Olaf en peligro",
      process: "Elsa ha venido corriendo a decirnos que Olaf se está derritiendo. Limpiar el bosque no ha sido suficiente para deterner el calentamiento global, tenemos que reducir la cantidad de basura.",
      processTranslated: "Elsa ha venido corriendo a decirnos que Olaf se está derritiendo. Limpiar el bosque no ha sido suficiente para deterner el calentamiento global, tenemos que reducir la cantidad de basura.",
      resources: [
        SAVE_OLAF,
        MEAL_CELEBRATION
      ]
    },
    {
      title:"Navidad reutilizada",
      process: "Nos hemos encontrado a Elsa llorando en su habitación del castillo. Todos los adornos de navidad de su castillo se han derretido, y adornar el castillo en navidad era algo que le trae recuerdos de cuando era pequeña.",
      processTranslated: "Nos hemos encontrado a Elsa llorando en su habitación del castillo. Todos los adornos de navidad de su castillo se han derretido, y adornar el castillo en navidad era algo que le trae recuerdos de cuando era pequeña.",
      resources: [
        REUSED_ORNAMENTS,
        TRADITION_TREE
      ]
    },
    {
      title:"Adiós al calentamiento",
      process: "¡Lo logramos! Salvamos al mundo del calentamiento global con ayuda de las reglas de las tres R: reciclar, reducir y reutilizar.",
      processTranslated: "¡Lo logramos! Salvamos al mundo del calentamiento global con ayuda de las reglas de las tres R: reciclar, reducir y reutilizar.",
      resources: [
        THREE_R,
        FROZEN_FINAL_TASK
      ]
    }
  ]
}


