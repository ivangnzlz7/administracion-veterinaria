import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/axios'

const NuevoPassword = () => {
  const [password, setPassword] = useState('')
  const [alerta, setAlerta] = useState({})
  const [tokenValido, setTokenValido] = useState(false)
  const [ passwordModificado, setPasswordModificado ] = useState(false)

  const params = useParams()
  const { token } = params

  useEffect(() => {

    const comprobarToken = async () => {

      try {

        await clienteAxios(`/veterinarios/olvide-password/${token}`)
        setAlerta({
          msg: 'Coloca tu Nuevo Password'
        })
        setTimeout(() => {
            setAlerta({})
        }, 5000);
        setTokenValido(true)

      } catch (error) {
        setAlerta({
          msg: 'Hubo un error con el enlace',
          error: true
        })
        setTimeout(() => {
            setAlerta({})
        }, 5000);
      }
    }
    comprobarToken();

  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password.length < 6) {
      setAlerta({
        msg: 'El password debe contener minimo 6 caracteres',
        error: true
      })
      setTimeout(() => {
          setAlerta({})
      }, 5000);
      return
    }

    try {
      const url = `/veterinarios/olvide-password/${token}`
      const { data } = await clienteAxios.post(url, { password })

      setAlerta({
        msg: data.msg
      })
      setTimeout(() => {
          setAlerta({})
      }, 5000);
      setPasswordModificado(true)

    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
      setTimeout(() => {
          setAlerta({})
      }, 5000);
    }
  }

  const { msg } = alerta
  return (
    <>
      <div className="mb-6">
        <h1 className="bg-purple-800 font-black text-6xl text-center" >
          Reestablece tu password y no pierdas Acesso a tus pacientes
        </h1>
      </div>

      <div className='mt-20 md:mt-5 shadow-lg px-6 py-10 rounded-xl bg-white mx-60'>
        {msg && <Alerta
          alerta={alerta}
        />}

        {tokenValido && (
          <>

            <form
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  className="uppercase text-gray-600 block text-xl font-bold"
                  htmlFor='password'
                >
                  Nuevo Password
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

              <input
                type="submit"
                value='Guardar Nuevo Password'
                className=" bg-purple-800 w-full py-3 px-10
                    rounded-xl text-white uppercase font-bold
                    mt-5 hover:cursor-pointer transition ease-in-out duration-500
                    hover:bg-purple-500
                    md:w-auto"
              />
            </form>

            {passwordModificado && (
              <Link
              className='block text-center my-5 text-gray-700 hover:text-gray-500'
              to='/'>Inicia Sesion
            </Link>
            )}
          </>
        )}
      </div>
    </>
  )
}

export default NuevoPassword 
