import { useState, useEffect } from 'react'
import Alerta from './Alerta'
import usePacientes from '../hooks/usePacientes'

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [id, setId] = useState(null)

    const [alerta, setAlerta] = useState({})

    const { guardarPaciente, paciente } = usePacientes()

    useEffect(() => {
        if(paciente?.nombre){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
            setId(paciente._id)
        }

    }, [paciente])


    const handleSubmit = e => {
        e.preventDefault()

        // Validar el formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            setTimeout(() => {
                setAlerta({})
            }, 5000);
            return;
        }

        guardarPaciente({ nombre, propietario, email, fecha, sintomas, id })
        setAlerta({
            msg: 'Guardado Exitosamente'
        })
        setTimeout(() => {
            setAlerta({})
        }, 5000);
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('') 
        setId('')
    }

    const { msg } = alerta


    return (
        <> 
            <h2 className="font-black text-3xl text-center dark:text-white">Administrador de Pacientes</h2>

            <p className="text-xl mt-5 mb-10 text-center dark:text-white">
                Añade tus pacientes y {''}
                <span className="font-bold text-purple-800 dark:text-gray-500">Administralos</span>
            </p>


            <form
                className="bg-white py-10 px-5 mb-10 lg:mb-5
                shadow-md rounded-md dark:bg-slate-900 transition ease-in-out duration-500"
                onSubmit={handleSubmit}

            >
                <div className="mb-5">
                    <label
                        htmlFor="mascota"
                        className="text-gray-700 uppercase font-bold dark:text-white"
                    >Nombre Mascotas</label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md
                        dark:bg-gray-800 dark:border-gray-700/100 dark:text-white"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="propietario"
                        className="text-gray-700 uppercase font-bold  dark:text-white"
                    >Nombre Propietario</label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md 
                        dark:bg-gray-800 dark:border-gray-700/100 dark:text-white" 
                        value={propietario}
                        onChange={e => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="text-gray-700 uppercase font-bold  dark:text-white"
                    >Email Propietario</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md 
                        dark:bg-gray-800 dark:border-gray-700/100 dark:text-white" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="fecha"
                        className="text-gray-700 uppercase font-bold  dark:text-white"
                    >Fecha alta</label>
                    <input
                        id="fecha"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md 
                        dark:bg-gray-800 dark:border-gray-700/100 dark:text-white" 
                        value={fecha}
                        onChange={e => setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="sintomas"
                        className="text-gray-700 uppercase font-bold  dark:text-white"
                    >Sintomas</label>
                    <textarea
                        id="sintomas"
                        placeholder="Descripcion de los Sintomas Presentados"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md 
                        dark:bg-gray-800 dark:border-gray-700/100 dark:text-white min-h-20"
                        value={sintomas}
                        onChange={e => setSintomas(e.target.value)}
                    />
                </div>
                <input
                    type="submit"
                    className=" bg-purple-800 w-full p-3 text-white rounded-md 
                    uppercase font-bold hover:bg-purple-500
                    cursor-pointer transition ease-in-out duration-500 dark:bg-blue-950 dark:hover:bg-blue-900" 
                    value={ id ? 'Guardando Cambios' : 'Agregando Cambios'}
                />

            </form>

            {msg && <Alerta alerta={alerta} />}

            
        </>
    )
}

export default Formulario
