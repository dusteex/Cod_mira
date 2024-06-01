import { Provider as ReduxProvider } from 'react-redux'
import store from './store/store'
import { RouterProvider } from '@/components/providers/RouterProvider'
import { Header } from './components/widgets/header/Header'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './components/providers/AuthProvider'

export default function App() {

  return (
  <BrowserRouter>
    <ReduxProvider store={store}>
      <AuthProvider>
        <Header/>
        <RouterProvider/>
      </AuthProvider>
    </ReduxProvider>
  </BrowserRouter>
  )
}
