import { mockProfiles } from "@/mock/profiles"

const getAll = async ()=>{
  return new Promise(res=>setTimeout(()=>res({data:mockProfiles}),500))
}

const getOne = async (id:number|string)=>{
  return new Promise(res=>setTimeout(()=>res({data:{}}),500))
}

const upload = async ()=>{
  return new Promise(res=>setTimeout(()=>res({data:{}}),500))
}

export const ProfilesService = {
  getAll,
  getOne,
  upload
}
