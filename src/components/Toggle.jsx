import { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
const Toggle = () => {

    const settingTheme = useRef(document.documentElement.className === "dark")

    useEffect(() => {
        if (localStorage.theme === "dark") {
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }, [])


    const handleClick = () => {
        settingTheme.value = document.documentElement.classList.toggle("dark");
        settingTheme.value
            ? (localStorage.theme = "dark")
            : (localStorage.theme = "light");
    };




    return (
        <>
            <button className='rounded-md cursor-pointer p-2
            border-none text-white hover:text-slate-300'
                onClick={handleClick}>

                {localStorage.theme === "light" ? (<FontAwesomeIcon icon={faMoon} className=' h-9' />)
                    : (<FontAwesomeIcon icon={faSun} className=' h-9' />)}

            </button>

        </>
    )
}

export default Toggle
