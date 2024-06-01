import { ICreateTemplateDTO, IEditTemplateDTO } from "@/types/templates.types"
import axios from "axios";

const create = async (data: ICreateTemplateDTO) => {
  // return new Promise(res=>setTimeout(()=>res({data:{...data.template,id:++id}}),500))
  return await axios.post('http://localhost:8080/v1/template/',data)
} 

const edit = async (data: IEditTemplateDTO) => {
  return await axios.put('http://localhost:8080/v1/template/',data)
} 

const getAll = async ()=>{
  // return new Promise(res=>setTime out(()=>res({data:[]}),500))
  return await axios.get('http://localhost:8080/v1/template/all')
}

const getOne = async (id:number|string)=>{
  return new Promise(res=>setTimeout(()=>res({data:{}}),500))
}

export const TemplatesService = {
  create,
  getAll,
  getOne,
  edit
}
