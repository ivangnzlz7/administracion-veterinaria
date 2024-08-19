import { useState } from 'react'
import AdminNav from "../components/AdminNav"
import Alerta from "../components/Alerta"
import useAuth from '../hooks/useAuth'

const CambiarPassword = () => {

    const { guardarPassword } = useAuth()

    const [alerta, setAlerta] = useState({})
    const [password, setPassword] = useState({
        pwd_actual: '',
        pwd_nuevo: ''
    })

    const handleSubmit =  async e => {
        e.preventDefault()

        if(Object.values(password).some(campo => campo === '')){
                setAlerta({
                    msg: 'Todos los campos son obligatorios',
                    error: true
                })
                setTimeout(() => {
                    setAlerta({})
                }, 5000);
                return;
        }

        if(password.pwd_nuevo.length < 6){
            setAlerta({
                msg: 'Debe contener 6 caracteres minimo el password',
                error: true
            })
            setTimeout(() => {
                setAlerta({})
            }, 5000);
        }

        const resultado =  await guardarPassword(password)
        setAlerta(resultado)
        setTimeout(() => {
            setAlerta({})
        }, 5000);
    }

    const { msg } = alerta
    return (
        <>
            <AdminNav />

            <h2 className="font-black text-3xl text-center mt-10 dark:text-white">Cambiar Password</h2>
            <p className="text-xl mt-5 mb-10 text-center dark:text-white">Modifica tu {''}
                <span className="font-bold text-purple-800 dark:text-gray-500">Password aqui</span>
            </p>
            <div className="flex justify-center">
                <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5 dark:bg-slate-900">

                    {msg && <Alerta 
                        alerta={alerta}
                    />}
                    <form
                        onSubmit={handleSubmit}
                    >

                            <div className="my-3">
                                <label 
                                htmlFor='password'
                                className="font-bold uppercase text-gray-600 dark:text-white">Password Actual</label>
                                <input
                                    id='password'
                                    type="password"
                                    className="border bg-gray-50 w-full p-2 mt-5 rounded-lg
                                    dark:bg-gray-800
                                    dark:border-gray-700/100 dark:text-white"
                                    name="pwd_actual"
                                    placeholder='Escribe Password Actual'
                                    onChange={ e => setPassword({
                                        ...password,
                                        [e.target.name] : e.target.value

                                    })}
                                />
                            </div>

                            <div className="my-3">
                                <label 
                                htmlFor='nuevopassword'
                                className="font-bold uppercase text-gray-600 dark:text-white">Password Nuevo</label>
                                <input
                                    id='nuevopassword' 
                                    type="password"
                                    className="border bg-gray-50 w-full p-2 mt-5 rounded-lg
                                    dark:bg-gray-800
                                    dark:border-gray-700/100 dark:text-white"
                                    name="pwd_nuevo"
                                    placeholder='Escribe Password Nuevo'
                                    onChange={ e => setPassword({
                                        ...password,
                                        [e.target.name] : e.target.value

                                    })}
                                />
                            </div>

                            <input 
                                type="submit"
                                value='Actualizar Password'
                                className=" bg-purple-800 px-10 py-3 font-bold
                                text-white rounded-lg uppercase w-full
                                mt-5 cursor-pointer hover:bg-purple-500
                                transition ease-in-out duration-500
                                dark:bg-blue-950 dark:hover:bg-blue-900"
                            />

                    </form>
                </div>
            </div>
        </>
    )
}

export default CambiarPassword
