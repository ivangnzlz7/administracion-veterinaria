import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/axios'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState({})

    const { setAuth } = useAuth()

    const navigate = useNavigate() 

    const handleSubmit = async(e) => {
        e.preventDefault()

        if ([email, password].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }
        if(password.length < 6){
            setAlerta({
                error: true 
            })
        }

        try {
            const { data } = await clienteAxios.post('/veterinarios/login', { email, password })
            localStorage.setItem('token', data.token)
            setAuth(data)
            navigate('/admin')
            
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
 
    }

    const { msg } = alerta
    const { error } = alerta 

  return (
    <>
    
        <div className="mt-20 md:mt-5 shadow-lg px-10 py-9 rounded-xl bg-white mx-auto">

            {msg && <Alerta
                alerta={alerta}
            />}

            <form
            onSubmit={handleSubmit}
            >
                <div>
                    <label
                        className="uppercase text-gray-600 block text-xl font-bold"
                        htmlFor='email'
                    >
                        Email
                    </label>
                    <input
                        id='email' 
                        type="email"
                        placeholder="Email de Registro"
                        className="border w-full p-3 mt-3 bg-transparent rounded-xl"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="mt-5">
                    <label
                        className="uppercase text-gray-600 block text-xl font-bold"
                        htmlFor='password'
                    >
                        Password
                    </label>
                    <input 
                        id='password'
                        type="password"
                        placeholder={error ? 'Password incorrecto': 'Password'}
                        className="border w-full p-3 mt-3 bg-transparent rounded-xl"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <input  
                    type="submit"
                    value='Iniciar Sesion'
                    className=" bg-purple-800 w-full py-3 px-10
                    rounded-xl text-white uppercase font-bold
                    mt-5 hover:cursor-pointer hover:bg-purple-500
                    md:w-auto transition ease-in-out duration-500"
                />
            </form>

            <nav className='mt-8 lg:flex lg:justify-between gap-12'>
                <Link
                    className='block text-center my-5 text-gray-700 hover:text-gray-400' 
                    to='/registrar'>¿No tienen una cuenta? Registrate
                </Link>
                <Link
                    className='block text-center my-5 text-gray-700
                    hover:text-gray-400'
                    to='/olvide-password'>Olvide mi password
                </Link>
            </nav>
        </div>

        <div>
            <h1 className=" text-purple-800 font-black text-5xl
            text-center leading-snug" >
                    Inicia seccion y Administra tus
                <span className="text-black"> pacientes</span>
            </h1>
            <img src="dist/veterinario3.jpeg" alt="Mascotas" className='mt-12'/>
        </div>
    
        
    </>
  )
}

export default Login
