import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import '../App.css';

function ContadorCondicao(){

    const [sequela, setSequela] = useState(0)

    const [ferida, setFerida] = useState(0)

    return (
        <>
        <h1 className='text-white text-3xl'>Condição:</h1>
        <div className='grid grid-cols-2 gap-3'>
        <div className='text-white bg-[#b50f27]/65 rounded-3xl shadow-[#b50f27] shadow-2xl mb-5'>
        <p className='text-2xl pt-1'>Sequela</p>
            <p className='text-8xl pb-1'>{sequela}</p>
            <div className='bg-[#282828] w-full py-3 px-4 rounded-b-3xl'>
            <div className='flex justify-between items-center'>
              <FontAwesomeIcon className='text-3xl text-white hover:scale-125 hover:text-[#e3818f] duration-200 ease-linear cursor-pointer' onClick={() => {if (sequela > 0) setSequela((sequela) => sequela - 1)}} icon={faCircleMinus} />
              <FontAwesomeIcon className='text-3xl text-white hover:scale-125 hover:text-[#e3818f] duration-200 ease-linear cursor-pointer' onClick={() => {if (sequela < 5) setSequela((sequela) => sequela + 1)}} icon={faCirclePlus} />
            </div>
            </div>
        </div>
        <div className='text-white bg-[#b50f27]/65 rounded-3xl shadow-[#b50f27] shadow-2xl mb-5'>
        <p className='text-2xl pt-1'>Ferida</p>
            <p className='text-8xl pb-1'>{ferida}</p>
            <div className='bg-[#282828] w-full py-3 px-4 rounded-b-3xl'>
            <div className='flex justify-between items-center'>
              <FontAwesomeIcon className='text-3xl text-white hover:scale-125 hover:text-[#e3818f] duration-200 ease-linear cursor-pointer' 
              onClick={() => {if (ferida > sequela) 
                setFerida((ferida) => ferida - 1)}}
              icon={faCircleMinus} />
              <FontAwesomeIcon className='text-3xl text-white hover:scale-125 hover:text-[#e3818f] duration-200 ease-linear cursor-pointer' onClick={() => {if (ferida < 6) setFerida((ferida) => ferida + 1)}} icon={faCirclePlus} />
            </div>
            </div>
        </div>
        </div>
        </>
        
    )
}
export default ContadorCondicao;