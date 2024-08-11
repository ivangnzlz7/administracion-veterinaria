import { useEffect, useState } from 'react'
import AdminNav from "../components/AdminNav"
import useAuth from '../hooks/useAuth'
import Alerta from '../components/Alerta'


const EditarPerfil = () => {


    const { auth, actualizarPerfil } = useAuth()

    const [perfil, setPerfil] = useState({})
    const [alerta, setAlerta] = useState({})


    useEffect(() => {
        setPerfil(auth)
    }, [auth])

    const handleSubmit = async e => {
        e.preventDefault()

        const { nombre, email } = perfil

        if ([nombre, email].includes('')) {
            setAlerta({
                msg: 'Email y Nombre son obligatorios.',
                error: true
            })
            return;
        }

        const resultado = await actualizarPerfil(perfil)

        setAlerta(resultado)
    }

    const { msg } = alerta

    return (
        <>
            <AdminNav />

            <h2 className="font-black text-3xl text-center mt-10 dark:text-white">Editar Perfil</h2>
            <p className="text-xl mt-5 mb-10 text-center dark:text-white">Modifica tu {''}
                <span className="font-bold text-purple-800 dark:text-gray-500">Informacion aqui</span>
            </p>

            <div className="flex justify-center">
                <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5 dark:bg-slate-900
                transition ease-in-out duration-500">

                    {msg && <Alerta
                        alerta={alerta}
                    />}
                    <form
                        onSubmit={handleSubmit}
                    >

                        <div className="my-3">
                            <label className="font-bold uppercase text-gray-600 dark:text-white"
                                htmlFor='nombre'>Nombre</label>
                            <input
                                id='nombre'
                                type="text"
                                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg dark:bg-gray-800
                                    dark:border-gray-700/100 dark:text-white"
                                name="nombre"
                                value={perfil.nombre || ''}
                                onChange={e => setPerfil({
                                    ...perfil,
                                    [e.target.name]: e.target.value
                                })}
                            />
                        </div>

                        <div className="my-3">
                            <label className="font-bold uppercase text-gray-600 dark:text-white"
                                htmlFor='sitioweb'>Sitio Web</label>
                            <input
                                id='sitioweb'
                                type="text"
                                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg
                                    dark:bg-gray-800
                                    dark:border-gray-700/100 dark:text-white"
                                name="web"
                                value={perfil.web || ''}
                                onChange={e => setPerfil({
                                    ...perfil,
                                    [e.target.name]: e.target.value
                                })}
                            />
                        </div>

                        <div className="my-3">
                            <label className="font-bold uppercase text-gray-600 dark:text-white"
                                htmlFor='telefono'>Telefono</label>
                            <input
                                id='telefono'
                                type="text"
                                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg
                                    dark:bg-gray-800
                                    dark:border-gray-700/100 dark:text-white"
                                name="telefono"
                                value={perfil.telefono || ''}
                                onChange={e => setPerfil({
                                    ...perfil,
                                    [e.target.name]: e.target.value
                                })}
                            />
                        </div>

                        <div className="my-3">
                            <label className="font-bold uppercase text-gray-600 dark:text-white"
                                htmlFor='email'>Email</label>
                            <input
                                id='email'
                                type="text"
                                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg
                                    dark:bg-gray-800
                                    dark:border-gray-700/100 dark:text-white"
                                name="email"
                                value={perfil.email || ''}
                                onChange={e => setPerfil({
                                    ...perfil,
                                    [e.target.name]: e.target.value
                                })}
                            />
                        </div>

                        <input
                            type="submit"
                            value='Guardar Cambios'
                            className=" bg-purple-800 px-10 py-3 font-bold
                                text-white rounded-lg uppercase
                                w-full mt-5 cursor-pointer hover:bg-purple-500
                                transition ease-in-out duration-500
                                dark:bg-blue-950 dark:hover:bg-blue-900"
                        />

                    </form>
                </div>
            </div>
        </>
    )
}

export default EditarPerfil
