/* eslint-disable react/prop-types */

const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? 'from-red-600 to-red-600 dark:bg-red-700' : 'from-purple-800 to-purple-800 dark:bg-blue-900'}
    bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm mb-10 `}>

        {alerta.msg} 
      
    </div>
    //'from-indigo-400 to-indigo-600'
  )
}

export default Alerta
