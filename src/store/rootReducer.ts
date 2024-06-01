import { authReducer } from "./slices/authSlice";
import { profilesReducer } from "./slices/profilesSlice";
import { templatesReducer } from "./slices/templatesSlice";

export const rootReducer = {
  auth: authReducer,
  templates: templatesReducer,
  profiles: profilesReducer
}
