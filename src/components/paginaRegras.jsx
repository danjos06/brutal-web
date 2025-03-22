import { useState } from "react";
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
        
        <div className={`mx-3 ${activeTab === "tab2" ? "block" : "hidden"}`}>
            <div className="text-center p-3 bg-gray-800/70 rounded-2xl">
            <h1 className="text-center text-4xl text-white">Cenas</h1>
            <div className="grid grid-cols-3 gap-3 m-3">
            <div className="text-white p-5 bg-gray-900/90 backdrop-blur-lg rounded-2xl text-center">
                <h1 className="text-center text-4xl m-2">Cenas Livres</h1>
                <div id="card">
                    <p className="text-2xl">Cenas interpretativas onde não existem ordem de ação e os jogadores tem liberdade de interagir com o cenário de maneira livre e interpretar seus personagens em momentos pacíficos. Cenas com maior foco em roleplay e leve foco na investigação </p>
                </div>
            </div>
            <div className="text-white p-5 bg-gray-900/90 backdrop-blur-lg rounded-2xl text-center">
                <h1 className="text-center text-4xl m-2">Cenas de Suspense</h1>
                <div id="card">
                    <p className="text-2xl">Cenas Investigativas e tensas, onde o perigo eminente é uma grande preocupação, assim forçando os jogadores a investigar seus arredores em busca de pistas/ maneiras de superar uma dificuldade momentânea </p>
                </div>
            </div>
            <div className="text-white p-5 bg-gray-900/90 backdrop-blur-lg rounded-2xl text-center">
                <h1 className="text-center text-4xl m-2">Cenas de Encontro</h1>
                <div id="card">
                    <p className="text-2xl">Cenas de puro terror, o ápice da tensão, onde o assassino se revela, os sobreviventes devem se preparar para um fuga ou combate. Cenas com turnos definidos e um perigo constante</p>
                </div>
            </div>
            </div>
            </div>

            <div className="text-white p-5 bg-gray-800/70 backdrop-blur-lg rounded-2xl my-3 text-center">
                <div className="bg-gray-900/90 p-5 rounded-2xl m-3">
                <h1 className="text-center text-4xl">Testes de susto</h1>
                <div id="card">
                    <p className="text-2xl">Um teste de susto é um teste requisitado pelo mestre a qualquer momento chocante que os players presenciem, role um d6, caso falhe descarte o dado</p>
                </div>
                </div>
            </div>
            
            <div className="text-center p-3 bg-gray-800/70 rounded-2xl">
            <h1 className="text-center text-4xl text-white">Dados</h1>
            <div className="grid grid-cols-2 gap-3 m-3">
            <div className="text-white p-5 bg-gray-900/90 backdrop-blur-lg rounded-2xl text-center">
                <h1 className="text-center text-4xl m-2">Dados sacrificados</h1>
                <div id="card">
                    <p className="text-2xl">Dados que resultem em falha durante CENAS LIVRES e CENAS DE SUSPENSE são automaticamente descartados, indo para a pilha do mestre/assassino</p>
                </div>
            </div>
            <div className="text-white p-5 bg-gray-900/90 backdrop-blur-lg rounded-2xl text-center">
                <h1 className="text-center text-4xl m-2">Dados descartados</h1>
                <div id="card">
                    <p className="text-2xl">Dados que resultem em falha durante CENAS DE ENCONTRO e TESTES DE SUSTO são descartados, não pertencendo a ninguém</p>
                </div>
            </div>
            </div>
            </div>
        </div>
        
        <div className={`mx-3 ${activeTab === "tab3" ? "block" : "hidden"}`}>
            <div className="flex gap-3">
            <div className="text-white p-5 bg-gray-800/70 backdrop-blur-lg rounded-2xl my-3 max-w-fit">
                <h1 className="text-center text-4xl m-2">Iniciativa</h1>
                <div id="card">
                    <p className="text-2xl">1. Herói</p>
                    <p className="text-2xl">2. Atleta</p>
                    <p className="text-2xl">3. Valentona</p>
                    <p className="text-2xl">4. Esbelto</p>
                    <p className="text-2xl">5. Inocente</p>
                    <p className="text-2xl">6. Nerd</p>
                    <p className="text-2xl">7. Relaxado</p>
                    <p className="text-2xl">8. Cética</p>
                    <p className="text-2xl">9. Assassino</p>
                </div>
            </div>
            <div>
            <div className="text-white p-5 bg-gray-800/70 backdrop-blur-lg rounded-2xl my-3">
                <h1 className="text-center text-4xl m-2">Ferida</h1>
                <div id="card">
                    <div className="text-white p-5 bg-gray-900/90 backdrop-blur-lg rounded-2xl text-center text-2xl">
                    <p>Ferida é todo e qualquer dano superficial que o personagem adquire. Caso acumule 6, o personagem morre instantaneamente.</p>
                    </div>
                </div>
            </div>
            <div className="text-white p-5 bg-gray-800/70 backdrop-blur-lg rounded-2xl my-3">
                <h1 className="text-center text-4xl m-2">Sequela</h1>
                <div id="card">
                    <div className="text-white p-5 bg-gray-900/90 backdrop-blur-lg rounded-2xl text-center text-2xl">
                    <p>Sequelas são feridas graves adquiridas ao receber a ação &quot;Ferir&quot; do assassino. Sequelas tem um limite de 5 e o personagem não pode ter um número de feridas menor que seu número de sequelas.</p>
                    </div>
                </div>
            </div></div>
            </div>
        </div>
        </>
    )
}

export default PaginaRegras;