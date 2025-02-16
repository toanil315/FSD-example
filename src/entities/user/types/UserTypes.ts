export interface BaseUser {
  name: string;
  age: number;
  address: string;
}

export interface User extends BaseUser {
  id: string;
  key: string;
}
