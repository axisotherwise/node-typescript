import { User } from "../dtos/user";

// declare global {
//   namespace Express {
//     interface Request {
//       user: User;
//     }
//   }
// }

declare module "express-serve-static-core" {
  interface Request {
    user: User;
  }
}