import { ICandidateCredentials } from "./candidate.types"
import { ITemplate } from "./templates.types"

export interface IProfile {
  template_p: Pick<ITemplate,"name" | "id"> // p - partial/pick
  credentials: ICandidateCredentials
  compProfile: ICompProfile | null
}

export interface ICompProfile {
  skills: {
    green: string[], // скилы, которые есть у кандидата
    red: string[] // скилы, которых нет у кандидата
  }
  workYears: {
    value: number | string,
    fitTemplate: boolean
  }
  overall: number,
}
