import usePacientes from "../hooks/usePacientes"

const Paciente = ({ paciente }) => {

  const { setEdicion, eliminarPaciente} = usePacientes()

  const { email, fecha, nombre, propietario, sintomas, _id } = paciente

  const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha)
    return new Intl.DateTimeFormat('es-AR', { dateStyle: 'long' }).format(nuevaFecha)
  }

  return (

    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-lg dark:bg-slate-900 transition ease-in-out duration-500">
      <p className="font-bold uppercase text-indigo-700 my-2 dark:text-gray-400">Nombre: {''}
        <span className="font-normal normal-case text-black dark:text-white">{nombre}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2 dark:text-gray-400">Propietario: {''}
        <span className="font-normal normal-case text-black dark:text-white">{propietario}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2 dark:text-gray-400">Email: {''}
        <span className="font-normal normal-case text-black dark:text-white">{email}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2 dark:text-gray-400">Fecha: {''}
        <span className="font-normal normal-case text-black dark:text-white">{formatearFecha(fecha)}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2 dark:text-gray-400">Sintomas: {''}
        <span className="font-normal normal-case text-black dark:text-white">{sintomas}</span>
      </p>

      <div className="flex justify-between my-5">
        <button
          type="button"
          className="py-2 px-10 bg-purple-800 hover:bg-purple-500
          text-white uppercase font-bold rounded-lg dark:bg-blue-950 dark:hover:bg-blue-900
          transition ease-in-out duration-500"
          onClick={() => setEdicion(paciente)}
        >Editar</button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700
          text-white uppercase font-bold rounded-lg dark:bg-red-900 dark:hover:bg-red-700
          transition ease-in-out duration-500"
          onClick={() => eliminarPaciente(_id, nombre)}
        >Eliminar</button>
      </div>
    </div>

  )
}

export default Paciente
