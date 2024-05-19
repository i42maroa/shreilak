import { ResourceInterface } from "../interface/resource.interface";

export const PICK_UP_GARBAGE:ResourceInterface = {
  id: "1",
  name:"Recogemos basura",
  description:"En este ejercicio vamos a llevar a cabo la realización de patatin patatan",
  text:"Para poder cumplir el objetivo tenemos que ayudar a yo que se ahora mismo",
  images:[
    {
      alt:"pick",
      url:"https://i.pinimg.com/736x/16/f5/18/16f518c69133be7e824df9d3a6bc186c.jpg"
    }
  ],
  resources:[
    {
      url:"https://drive.google.com/file/d/1mtnVk9A8JIOUWmQ5QsJ8MwaeAg9pLtxG/view?usp=drive_link",
      name: "Ficha"
    },
    {
      url:"https://www.cristic.com/juegos-educativos/",
      name:"Juego de recoger"
    }
  ]
}
