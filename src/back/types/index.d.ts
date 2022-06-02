import IUser from "../models/user";

declare global {
  namespace Express {
    export interface User extends IUser {
    }
  }
}

// declare global {
//   namespace Express {
//     interface Request {
//       payload?: string | undefined;
//       user?: User | undefined;
//     }
//   }
// }
