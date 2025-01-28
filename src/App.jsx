import { useEffect, useState } from "react";
import './App.css';
import brutalLogo from './assets/brutal-logo.png'
import tensao2 from './assets/tensao2.png'
import tensao3 from './assets/tensao3.png'
import CuidarFeridas from "./components/vantagensgerais/cuidarFeridas.jsx";
import TomarJeito from "./components/vantagensgerais/tomarJeito.jsx";
import ChoqueRealidade from "./components/vantagensgerais/choqueRealidade.jsx";
import Contador from "./components/contador.jsx";
import PaginaRegras from "./components/paginaRegras.jsx";
import { faDice } from '@fortawesome/free-solid-svg-icons';

function App() {

  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };
  
    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);

  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <>
      <div className='flex justify-between p-5'>
        <button className={`text-white text-4xl mx-9 duration-200 ${activeTab === "tab1" ? "bg-[#e01030] p-3 rounded-xl scale-110" : "hover:scale-110 hover:text-[#e01030]"}`} onClick={()=> setActiveTab("tab1")}>Contador</button>

        <img className='h-16' src={brutalLogo} alt="logo brutal"/>

        <button className={`text-white text-4xl mx-9 duration-200 ${activeTab === "tab2" ? "bg-[#e01030] p-3 rounded-xl scale-110" : "hover:scale-110 hover:text-[#e01030]"}`} onClick={()=> setActiveTab("tab2")}>Regras</button>
      </div>

      <div className={`transition-opacity duration-500 ease-in-out ${
            activeTab === "tab1" ? "opacity-100" : "opacity-0 pointer-events-none fixed"
          }`}>
        <Contador />
      </div>

      <div className={`inset-28 transition-opacity duration-500 ease-in-out ${
            activeTab === "tab2" ? "opacity-100" : "opacity-0 pointer-events-none fixed"
          }`}>
        <PaginaRegras />
      </div>
    </>
  )
}

export default App