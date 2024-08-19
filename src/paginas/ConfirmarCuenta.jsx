import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/axios'

const ConfirmarCuenta = () => {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false)
  const [cargando, setCargando] = useState(true)
  const [alerta, setAlerta] = useState({})

  const params = useParams()
  const { id } = params

    useEffect(() => {
        const confirmarCuenta = async () => {
          try {
            const url = `/veterinarios/confirmar/${id}`
            const { data } = await clienteAxios(url)
            setCuentaConfirmada(true)
            setAlerta({
              msg: data.msg
            })
            setTimeout(() => {
                setAlerta({})
            }, 5000);  

            
          } catch (error) {
            setAlerta({
              msg: error.response.data.msg,
              error: true
            })
            setTimeout(() => {
                setAlerta({})
            }, 5000);
          }

          setCargando(false)

        }
        confirmarCuenta();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <>
        <div className="mb-10">
            <h1 className="bg-purple-800 font-black text-6xl text-center" >
                    Confirma Tu Cuenta y Comienza a Administrar Tus Pacientes
            </h1>
        </div>

         <div className='mt-20 md:mt-5 shadow-lg px-8 py-10 rounded-xl bg-white mx-64'>

        {!cargando &&
        <Alerta 
          alerta={alerta}
        /> } 
          

            {cuentaConfirmada && (
              <Link
                    className='block text-center my-5 text-gray-700' 
                    to='/'>Iniciar Sesion
                </Link>
            )}
 
        </div>
    </>
  ) 
}

export default ConfirmarCuenta
