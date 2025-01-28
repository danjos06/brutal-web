import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDice } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons'
import React, {useState } from "react"
import tensao from '../assets/tensao.png'

function ContadorTensao(){

    const [count, setCount] = useState(0)

    return (
        <>
        <h1 className='text-white text-3xl'>Tensão:</h1>
        <div className='text-white bg-[#b50f27]/65 rounded-3xl shadow-[#b50f27] shadow-2xl mb-5'>
            <p className='text-8xl py-3'>{count}</p>
            <div className='bg-[#282828] w-full py-3 px-5 rounded-b-3xl flex justify-between items-center'>
              <FontAwesomeIcon className='text-4xl text-white hover:scale-125 hover:text-[#e3818f] duration-200 ease-linear cursor-pointer' onClick={() => {if (count > 0) setCount((count) => count - 1)}} icon={faCircleMinus} />
                <img className='h-[48px]' src={tensao} alt="" />
              {/* <FontAwesomeIcon className='text-5xl text-[#b50f27]' icon={faDice} /> */}
              <FontAwesomeIcon className='text-4xl text-white hover:scale-125 hover:text-[#e3818f] duration-200 ease-linear cursor-pointer' onClick={() => {if (count < 10) setCount((count) => count + 1)}} icon={faCirclePlus} />
            </div>
        </div>
        </>
        
    )
}
export default ContadorTensao;