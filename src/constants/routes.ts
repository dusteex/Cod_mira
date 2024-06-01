export const SIGN_IN_ROUTE = '/signIn'
export const UPLOAD_RESUME_ROUTE = '/upload'
export const PROFILE_ROUTE = (id:number | string) => ({
  base: `/profile/${id}`,
  competencies: `/profile/${id}/competencies`,
  career: `/profile/${id}/career`,
})
export const TEMPLATES_ROUTE = "/templates"
export const TEMPLATE_ROUTE = (id:number | string) => ({
  base: `/templates/${id}`
})
export const PROFILES_ROUTE = "/profiles"
export const CREATE_TEMPLATE_ROUTE = '/templates/create'
export const CANDIDATES_ROUTE = '/candidates'

