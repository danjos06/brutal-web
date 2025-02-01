import { useEffect, useState } from "react";
import '../App.css'
import brutalLogo from '../assets/brutal-logo.png'
import ContadorDado from './contadorDado.jsx';
import ContadorTensao from './contadorTensao.jsx';
import ContadorCondicao from './contadorCondicao.jsx';

function Contador() {
    return (
       <>
       <div className='grid grid-cols-5 text-center gap-24 py-2 px-24 select-none'>
        <div className='bg-gray-800/70 backdrop-blur-2xl shadow-2xl rounded-lg p-5'>
          <p className='text-5xl text-white py-3'>Danjos</p>
          <ContadorDado />
          <ContadorTensao />
          <ContadorCondicao />
        </div>
        <div className='bg-gray-800/70 backdrop-blur-2xl shadow-2xl rounded-lg p-5'>
          <p className='text-5xl text-white py-3'>Digdog</p>
          <ContadorDado />
          <ContadorTensao />
          <ContadorCondicao />
        </div>
        <div className='bg-gray-800/70 backdrop-blur-2xl shadow-2xl rounded-lg p-5'>
          <p className='text-5xl text-white py-3'>Muc</p>
          <ContadorDado />
          <ContadorTensao />
          <ContadorCondicao />
        </div>
        <div className='bg-gray-800/70 backdrop-blur-2xl shadow-2xl rounded-lg p-5'>
          <p className='text-5xl text-white py-3'>Tadas</p>
          <ContadorDado />
          <ContadorTensao />
          <ContadorCondicao />
        </div>
        <div className='bg-gray-800/70 backdrop-blur-2xl shadow-2xl rounded-lg p-5'>
          <p className='text-5xl text-white py-3'>Teteu</p>
          <ContadorDado />
          <ContadorTensao />
          <ContadorCondicao />
        </div>
      </div>
      </> 
    )
}

export default Contador;