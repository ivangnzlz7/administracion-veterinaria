import usePacientes from "../hooks/usePacientes"
import Paciente from "./Paciente"

const ListadoPacientes = () => {

  const { pacientes } = usePacientes()

  return (
    <>
      {pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center dark:text-white">Listado Pacientes</h2>

          <p className="text-xl mt-5 mb-10 text-center dark:text-white">
            Administra tus {''}
            <span className=" text-purple-800 font-bold dark:text-white">Pacientes y Citas</span>
          </p>

          {pacientes.map(paciente => (
            <Paciente
              key={paciente._id}
              paciente={paciente}
            />
          ))}
        </>
      ) :
        (
          <>
            <h2 className="font-black text-3xl text-center dark:text-white">No hay pacientes</h2>

            <p className="text-xl mt-5 mb-10 text-center dark:text-white">
              Comienza agregando pacientes {''} 
              <span className=" text-purple-800 font-bold dark:text-gray-500">y apareceran en este lugar</span>
            </p>
          </>
        )}
    </>
  )
}

export default ListadoPacientes
