import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Toggle from './Toggle'

const Header = () => {


    const { cerrarSesion } = useAuth()
    return (
        <header className="py-5 bg-purple-800  sticky top-0 dark:bg-slate-950 transition ease-in-out duration-500 ">

            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                <p className="font-bold text-2xl text-white text-center">Administrador de Pacientes de Veterinarios</p>

                <nav className='flex flex-col items-center lg:flex-row gap-5 mt-5'>
                    <Link to='/admin' className='text-white uppercase font-bold text-lg hover:text-slate-300'>Pacientes</Link>
                    <Link to='/admin/perfil' className='text-white uppercase font-bold text-lg hover:text-slate-300'>Perfil</Link>
                    <button
                        type='button'
                        className='text-white uppercase font-bold text-lg hover:text-slate-300'
                        onClick={cerrarSesion}
                    >
                        Cerrar Sesion
                    </button>
                    <Toggle />
                </nav>
            </div>

        </header>
    )
}

export default Header
