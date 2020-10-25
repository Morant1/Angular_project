// export class User {

//     constructor(public _id: string,public name: string, public coins: number, public moves: []) {
        
//     }

//   }

export interface User {
  _id: string,
  name: string,
  coins: number, 
  moves: object[]
}