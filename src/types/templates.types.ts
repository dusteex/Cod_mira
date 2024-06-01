export interface ISkill {
  id: number;
  name: string;
  options: {
    priority: number // from 0 to 1
  },
  wordings: string[]
}

export interface ITemplate {
  id: number;
  name: string;
  filters: {
    workYears: number
    // масштабируем 
  },
  skills: ISkill[]
}

export type ICreateTemplateDTO = Omit<ITemplate,'id'>

export type IEditTemplateDTO = ITemplate

export interface ICreateTemplateForm {
  name: string;
  filters: {
    workYears: number
  },
  skills: string;
}
