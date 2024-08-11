import { Link } from 'react-router-dom'

const AdminNav = () => {
    return (
        <nav className='flex gap-8 justify-center md:justify-end'>
            <Link
                to='/admin/perfil'
                className='font-bold uppercase
                text-gray-500 hover:text-gray-400 text-xl' 
            >Perfil</Link>
            <Link
                to='/admin/cambiar-password'
                className='font-bold uppercase text-gray-500 hover:text-gray-400 text-xl'
            >Cambiar Password</Link>
        </nav>
        
    )
}

export default AdminNav
