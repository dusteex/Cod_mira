import { IProfile } from "@/types/profile.types";

export const mockProfiles:IProfile[] = [
  {
    template_p: {name:'Фронтенд разработчик', id:1},
    compProfile: {
      overall: 85,
      workYears: {
        value: 1,
        fitTemplate: false,
      },
      skills: {
        green: ['js','typescript'],
        red: ['remix']
      } 
    },
    credentials: {
      id: 1,
      date_of_birth: '05.09.2004',
      name: 'Ульянов Дмитрий Владимирович',
      phone: '88005553535',
      email: 'test1@gmail.com'
    }
  },
  {
    template_p: {name:'Дизайнер', id:2},
    compProfile: {
      overall: 90,
      workYears: {
        value: 1,
        fitTemplate: false,
      },
      skills: {
        green: ['figma', 'UI', 'UX'],
        red: []
      } 
    },
    credentials: {
      id: 2,
      date_of_birth: '5 апреля 2004 года',
      name: 'Тест тест тестович',
      phone: '88005553531',
      email: 'test2@gmail.com'
    }
  }
]
