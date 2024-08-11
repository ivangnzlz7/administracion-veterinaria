/* eslint-disable react/prop-types */

const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? 'from-red-600 to-red-600' : 'from-lime-500 to-lime-500'}
    bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm mb-10 `}>

        {alerta.msg}
      
    </div>
    //'from-indigo-400 to-indigo-600'
  )
}

export default Alerta
