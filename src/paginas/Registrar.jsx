import { useState } from 'react';
import { Link } from 'react-router-dom';
import Alerta from '../components/Alerta';
import clienteAxios from '../config/axios';


const Registrar = () => {
    const [ nombre, setNombre ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ repetirPassword, setRepetirPassword ] = useState('');
    const [alerta, setAlerta] = useState({});
    const handleSubmit = async e => {
        e.preventDefault();

        if([nombre, email, password, repetirPassword].includes('')){
            setAlerta({msg: 'Hay campos vacios', error: true})
            return;
        }

        if(password !== repetirPassword){
            setAlerta({msg: 'Los Password no son iguales', error: true})
            return;
        }

        if(password.length < 6){
            setAlerta({msg: 'El password es corto, agrega minimo 6 caracteres o mas', error: true})
            return;
        }

        setAlerta({});
        // Crear usuario en la api
        try {
            await clienteAxios.post('/veterinarios', {nombre, email, password})
            setAlerta({
                msg: 'Creado exitosamente, verifique su email', 
                error: false
            })
            
         } catch (error) {
                setAlerta({
                    msg: error.response.data.msg,
                    error: true
                })
         }

    }

    const { msg } = alerta

  return (
    <>
        <div className="mb-8">
            <h1 className=" text-purple-800 font-black text-6xl text-center" >
                    Crea Tu Cuenta y Administra {''}
                    <span className=' text-black'>Tus Pacientes</span>
            </h1>
            <img src="/veterinario.jpeg" alt="mascota" className=' mx-auto'/>
        </div>

        <div className='mb-auto md:mt-5 shadow-lg px-6 py-9
        rounded-xl bg-white  mx-auto bg-center bg-no-repeat'>

            {msg && <Alerta
                alerta={alerta}
            />}
            <form
               onSubmit={handleSubmit} 
            >
            <div className='mb-5'>
                    <label
                        className="uppercase text-gray-600 block text-xl font-bold"
                        htmlFor='nombre'
                    >
                        Nombre
                    </label>
                    <input
                        id='nombre' 
                        type="text"
                        placeholder="Tu Nombre"
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        value={nombre}
                        onChange={e => setNombre(e.target.value) }
                    />
                </div>
                <div className='mb-5'>
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
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label
                        className="uppercase text-gray-600 block text-xl font-bold"
                        htmlFor='password'
                    >
                        Password
                    </label>
                    <input
                        id='password'
                        type="password"
                        placeholder="Tu Password"
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        
                    />
                </div>
                <div className='mb-5'>
                    <label
                        className="uppercase text-gray-600 block text-xl font-bold"
                        htmlFor='passwordnuevo'
                    >
                        Repite el password
                    </label>
                    <input
                        id='passwordnuevo' 
                        type="password"
                        placeholder="Repite Tu Password"
                        className="border w-full p-3 mt-3 bg-transparent rounded-xl"
                        value={repetirPassword}
                        onChange={e => setRepetirPassword(e.target.value)}

                    />
                </div>
                <input  
                    type="submit"
                    value='Crear Cuenta'
                    className=" bg-purple-800 w-full py-3 px-10
                    rounded-xl text-white uppercase font-bold
                    mt-5 hover:cursor-pointer hover:bg-purple-500
                    md:w-auto transition ease-in-out duration-500"
                />
            </form>

            <nav className='mt-8 lg:flex lg:justify-between gap-12'>
                <Link
                    className='block text-gray-700 text-center my-5
                    hover:text-gray-700' 
                    to='/'>¿Ya tienen una cuenta? Inicia Sesion
                </Link>
                <Link
                    className='block text-center my-5 text-gray-700 hover:text-gray-700'
                    to='/olvide-password'>Olvide mi password
                </Link>
            </nav> 
        </div>
    </>
)
}

export default Registrar
