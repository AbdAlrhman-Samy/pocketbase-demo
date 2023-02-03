import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider,
  useRouteError
} from 'react-router-dom'
import { Layout } from './Layouts/Layout'
import { AuthLayout } from './Layouts/AuthLayout'

import { Home } from './pages/Home'
import { ErrorPage } from './pages/ErrorPage'
import { Login } from "./pages/Auth/Login";
import { Signup } from "./pages/Auth/Signup";
import { User } from './pages/User/User'

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Layout/>} > 
      <Route index element={<Home/>} />
      <Route path="*" element={<ErrorPage/>} />
      <Route path="auth" element={<AuthLayout/>}  >
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>} />
      </Route>
      <Route path='user' element={<User/>} />
    </Route>

  )
)

export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}