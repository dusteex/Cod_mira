export type IRole = 'hr' | 'hm' | 'rm'

export interface IAuthForm {
  role:IRole
} 

export interface IUser {
  role: IRole
}
