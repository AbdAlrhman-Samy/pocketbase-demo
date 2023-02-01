import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'
import { Layout } from './Layouts/Layout'
import { AuthLayout } from './Layouts/AuthLayout'

import { Home } from './pages/Home'
import { ErrorPage } from './pages/ErrorPage'
import { Login } from "./pages/Auth/Login";
import { Signup } from "./pages/Auth/Signup";

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Layout/>}> 
      <Route index element={<Home/>} />
      <Route path="*" element={<ErrorPage/>} />
      <Route path="auth" element={<AuthLayout/>}>
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Route>

  )
)

export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}