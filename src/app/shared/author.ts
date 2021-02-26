import { User } from './user';

export interface Author extends User {
  company: string;
  about: string;
}
