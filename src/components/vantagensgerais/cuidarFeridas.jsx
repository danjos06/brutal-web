import { useEffect, useState } from "react";
import tensao from '../../assets/tensao.png'

function CuidarFeridas() {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <h2 className="text-3xl flex"><img className="h-[2.25rem] mr-3" src={tensao} alt="" />CUIDAR DE FERIDAS</h2>
                <div className={`transition-all duration-300 ${isHovered ? "text-3xl bg-black/70 p-5 rounded-2xl my-3 shadow-black shadow-md" : "text-2xl py-3"}`}
                onMouseEnter={()=>setIsHovered(true)}
                onMouseLeave={()=>setIsHovered(false)}
                // onClick={()=> isHovered ? setIsHovered(false) : setIsHovered(true)}
                >
                  {isHovered ? (
                    <p>Você pode gastar quantos <span className="inline-flex"><img className="h-[2.25rem] ml-3 mr-2" src={tensao} alt="" /><p className="bg-[#e01030] font-bold mr-2 rounded-xl p-1">Pontos de Tensão</p></span> quiser para reduzir em um valor igual as suas Feridas ou as de algum companheiro Essa vantagem só pode ser usada uma vez a cada encontro.</p>
                  ):(
                    <p>Gaste quantos <span className="inline-flex"><img className="h-[2rem] ml-3 mr-2" src={tensao} alt="" /><p className="bg-[#e01030] font-bold mr-2 rounded-xl p-1">Tensão</p></span> quiser para reduzir suas feridas ou as de algum companheiro. Só pode ser usada uma vez a cada encontro.</p>
                  )}
                </div>
        </>
    )
}

export default CuidarFeridas;