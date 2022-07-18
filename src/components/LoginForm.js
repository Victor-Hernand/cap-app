import {postLogin} from '../services/Auth';
import  ToastNotification from './ToastNotification';
import { useContext } from 'react';
import { UserContext } from '../context/user'
import { Navigate, useNavigate } from 'react-router-dom';
export default function LoginForm() {
    const [user, setUser] = useContext(UserContext)
    const navigate = useNavigate()
    const submitLoginForm = async(event) => {
        event.preventDefault()
        const formData = new FormData(document.getElementById('login-form'))
        const response = await postLogin(formData)
        if(typeof response == 'object'){
            setUser(response)
            await localStorage.setItem('user', JSON.stringify(response))
            return navigate('/')
        }else{
            ToastNotification(response, 'error')
        }
        
    }
  return (
    <>
      <div className="min-h-full flex flex-col items-center justify-center justify-center py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://cap.miposvirtual.com/images/logo.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Ingresa tus credenciales</h2>
          </div>
          <ToastNotification />
          <form className="mt-8 space-y-6" action="#" method="POST" id="login-form" onSubmit={submitLoginForm}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Correo
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Correo"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Contraseña"
                />
              </div>
            </div>


            <div>
              <button
                type='submit'
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Continuar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
