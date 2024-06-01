import { CANDIDATES_ROUTE, CREATE_TEMPLATE_ROUTE, PROFILES_ROUTE, PROFILE_ROUTE, TEMPLATES_ROUTE, TEMPLATE_ROUTE, UPLOAD_RESUME_ROUTE } from '@/constants/routes';
import { Navigate, Route, Routes} from 'react-router-dom'
import Auth from '../pages/Auth/Auth';
import { IRole } from '@/types/user.types';
import { useUserRole } from './useUserRole';
import { UploadResume } from '../pages/UploadResume/UploadResume';
import { Templates } from '../pages/Templates/Templates';
import { CreateTemplate } from '../pages/CreateTemplate/CreateTemplate';
import { Template } from '../pages/Template/Template';
import { Profiles } from '../pages/Profiles/Profiles';
import { Profile } from '../pages/Profile/Profile';

const roleRoutes = (role?: IRole)=>{

  if(!role) {
    return <Route path="*" element={<Auth/>}/>
  }

  switch(role) {
    case 'hr':
      return  <>
        <Route path={UPLOAD_RESUME_ROUTE} element={<UploadResume/>}/>
        <Route path={PROFILES_ROUTE} element={<Profiles/>}/>
        <Route path={PROFILE_ROUTE(":id").base} element={<Profile/>}/>
        <Route path={UPLOAD_RESUME_ROUTE} element={<UploadResume/>}/>
        <Route path="*" element={<Navigate to={ UPLOAD_RESUME_ROUTE }/>}/>
      </>
    case 'hm':
      return  <>
        <Route path={CREATE_TEMPLATE_ROUTE} element={<CreateTemplate/>}/>
        <Route path={TEMPLATES_ROUTE} element={<Templates/>}/>
        <Route path={TEMPLATE_ROUTE(":id").base} element={<Template/>}/>
        <Route path={PROFILES_ROUTE} element={<Profiles/>}/>
        <Route path={PROFILE_ROUTE(":id").base} element={<Profile/>}/>
        <Route path={UPLOAD_RESUME_ROUTE} element={<UploadResume/>}/>
        <Route path="*" element={<Navigate to={ UPLOAD_RESUME_ROUTE }/>}/>
      </>

    case 'rm':
      return <>
        <Route path={PROFILE_ROUTE(":id").base} element={<Profile/>}/>
        <Route path={PROFILES_ROUTE} element={<Profiles/>}/>
        <Route path="*" element={<Navigate to={ CANDIDATES_ROUTE }/>}/>
      </>
  }
}

export const RouterProvider = ()=>{

  const role = useUserRole()
  
  // const router = createBrowserRouter(routes);

 return  <Routes>
          {roleRoutes(role)}
      </Routes>

}
