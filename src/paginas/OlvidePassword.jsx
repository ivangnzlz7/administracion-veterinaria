import { useState } from 'react'
import { Link } from 'react-router-dom';
import Alerta from '../components/Alerta';
import clienteAxios from '../config/axios'


const OlvidePassword = () => {
    const [email, setEmail] = useState('')
    const [alerta, setAlerta] = useState({})


    const handleSubmit = async e => {
        e.preventDefault()

        if(email === '' || email.length < 6) {
           setAlerta({msg: 'El Email es obligatorio', error: true});
           return;
        }

        try {

            const { data } = await clienteAxios.post('veterinarios/olvide-password', { email })

            setAlerta({msg: data.msg})

            
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg
            })
            
        }
    }

    const { msg } = alerta

  return (
    <>
        <div className=' mb-10'>
            <h1 className=" text-purple-800 font-black text-5xl text-center leading-snug">
                    Recupera Tu Acceso y No Pierdas {''}
                    <span className=' text-black'>Tus Pacientes</span>
            </h1>
        </div>

        <div className='md:mt-5 shadow-lg px-8 py-9 rounded-xl bg-white mx-auto'>

            {msg && <Alerta
                alerta={alerta}
            />}
            
        <form
        onSubmit={handleSubmit}> 
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
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
            </div>

                <input  
                    type="submit"
                    value='Enviar instrucciones'
                    className=" bg-purple-800 w-full py-2 px-6
                    rounded-xl text-white uppercase font-bold
                    mt-5 hover:cursor-pointer hover:bg-purple-500
                    md:w-auto transition ease-in-out duration-500"
                />
        </form>

        <nav className='mt-8 lg:flex lg:justify-between gap-14'>
                <Link
                    className='block text-center my-5 text-gray-700 hover:text-gray-500' 
                    to='/'>¿Ya tienes una cuenta? Inicia Sesion
                </Link>
                <Link
                    className='block text-center my-5 text-gray-700 hover:text-gray-500' 
                    to='/registrar'>¿No tienes una cuenta? Registrate
                </Link>
            </nav>

        </div>
    </>
  )
}

export default OlvidePassword
