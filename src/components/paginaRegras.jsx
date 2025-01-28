import { useEffect, useState } from "react";
import CuidarFeridas from "./vantagensgerais/cuidarFeridas";
import TomarJeito from "./vantagensgerais/tomarJeito";
import ChoqueRealidade from "./vantagensgerais/choqueRealidade";
import Vigor from "./vantagensespecialidade/vigor";
import Intelecto from "./vantagensespecialidade/intelecto";
import Agilidade from "./vantagensespecialidade/agilidade";
import Forca from "./vantagensespecialidade/forca";
import Carisma from "./vantagensespecialidade/carisma";

function PaginaRegras() {

    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <>
        <div className="flex justify-center my-4">
        <div className="text-center flex justify-center text-3xl text-white outline outline-[#e01030] rounded-xl">
          <button className={`p-1 px-3 rounded-lg transition-all duration-300 ${activeTab === "tab1" ? "bg-[#e01030] text-white" : "text-[#e01030] bg-[#e01030]/0 hover:bg-[#e01030]/30"}`} onClick={()=> setActiveTab("tab1")}>
            Vantagens
          </button>

          <button className={`p-1 px-3 rounded-lg transition-all duration-300 ${activeTab === "tab2" ? "bg-[#e01030] text-white" : "text-[#e01030] bg-[#e01030]/0 hover:bg-[#e01030]/30"}`} onClick={()=> setActiveTab("tab2")}>
            Tipos de Cena
          </button>

          <button className={`p-1 px-3 rounded-lg transition-all duration-300 ${activeTab === "tab3" ? "bg-[#e01030] text-white" : "text-[#e01030] bg-[#e01030]/0 hover:bg-[#e01030]/30"}`} onClick={()=> setActiveTab("tab3")}>
            Iniciativa e Vida
          </button>
        </div>
        </div>

        <div className={`grid grid-cols-2 gap-3 mx-3 ${activeTab === "tab1" ? "block" : "hidden"}`}>
            <div className="text-white p-5 bg-gray-800/70 backdrop-blur-lg rounded-2xl">
                <h1 className="text-center text-4xl m-2">Vantagens Gerais</h1>
                <div id="card">
                    <CuidarFeridas />
                    <TomarJeito />
                    <ChoqueRealidade />
                </div>
            </div>
            <div className="text-white p-5 bg-gray-800/70 backdrop-blur-lg rounded-2xl">
                <h1 className="text-center text-4xl m-2">Vantagens de Especialidade</h1>
                <div id="card" className="">
                    <Vigor />
                    <Intelecto />
                    <Agilidade />
                    <Forca />
                    <Carisma />
                </div>
            </div>
        </div>
        
        <div className={`${activeTab === "tab2" ? "block" : "hidden"}`}>
            <div className="text-white p-5 bg-gray-800/70 backdrop-blur-lg rounded-2xl">
                <h1 className="text-center text-4xl m-2">Vantagens Gerais</h1>
                <div id="card">
                    <CuidarFeridas />
                    <TomarJeito />
                    <ChoqueRealidade />
                </div>
            </div>
        </div>
        
        </>
    )
}

export default PaginaRegras;