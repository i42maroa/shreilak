import { ResourceInterface } from "../../interface/resource.interface";

export const CLEAR_WOOD_CELEBRATION:ResourceInterface = {
  id: "5",
  name:"Cantos de renovación",
  description:"Tras un duro esfuerzo, hemos sido conseguido limpiar todo el bosque y queremos celebrarlo. Como Elsa no sabe francés, queremos ayudarle enseñandole un cuento y una canción francesa.",
  descriptionTranslated:"Tras un duro esfuerzo, hemos sido conseguido limpiar todo el bosque y queremos celebrarlo. Como Elsa no sabe francés, queremos ayudarle enseñandole un cuento y una canción francesa.",
  text:"Para comenzar, los alumnos leeran la carta de un cuento de Navidad de 'Sarah cover All I want for Christmas is you' siguiendo tres fases: una prelectorio, una lectura y una post-lectura. Para terminar, cantaremos la canción usando 'Lyrics training' ",
  images:[
    {
      alt:"pick",
      url:"assets/images/ressources/frozen/celebrate.png"
    }
  ],
  resources:[
    {
      url:"/",
      name: "Aprendamos la canción"
    },
    {
      url:"/",
      name:"¡Vamos a cantar!"
    }
  ]
}
