import { IRole } from "@/types/user.types";
import { CANDIDATES_ROUTE, PROFILES_ROUTE, TEMPLATES_ROUTE, UPLOAD_RESUME_ROUTE } from "./routes";

export interface ILink {
  href: string;
  label: string;
}

const UPLOAD_RESUME_LINK = {
  href: UPLOAD_RESUME_ROUTE,
  label: 'Загрузка резюме'
}

const PROFILES_LINK = {
  href: PROFILES_ROUTE,
  label: 'Все резюме'
}

const TEMPLATES_LINK = {
  href: TEMPLATES_ROUTE,
  label: 'Шаблоны'
}

const CANDIDATES_LINK = {
  href: CANDIDATES_ROUTE,
  label: 'Кандидаты'
}

export const headerLinks:Record<IRole,ILink[]> = {
  hr: [
  UPLOAD_RESUME_LINK,
  PROFILES_LINK,
],
  hm: [
  UPLOAD_RESUME_LINK,
  PROFILES_LINK,
  TEMPLATES_LINK,
  CANDIDATES_LINK
  ] ,
  rm: [
    UPLOAD_RESUME_LINK,
    PROFILES_LINK,
    TEMPLATES_LINK,
    CANDIDATES_LINK
  ]
}
